import { useEffect, useRef, useState } from 'react';
import Copy from 'reicon-react/icons/Copy';
import type { SocialLink } from '../data/portfolio';
import { Button, ButtonLink } from './ui/Button';
import styles from './ContactLinks.module.css';

interface Props {
  email: string;
  links: SocialLink[];
}

export default function ContactLinks({ email, links }: Props) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'opening-email'>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const emailLink = `mailto:${email}`;
  const copied = status === 'copied';

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copyEmail() {
    if (resetTimer.current) clearTimeout(resetTimer.current);

    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
      resetTimer.current = setTimeout(() => setStatus('idle'), 2400);
    } catch {
      setStatus('opening-email');
      window.location.href = emailLink;
    }
  }

  return (
    <div className={styles.links} aria-label="Contact Alex">
      <Button
        className={styles.copyEmail}
        type="button"
        aria-label={`Copy email address: ${email}`}
        title="Copy email address"
        onClick={copyEmail}
        data-copied={copied ? '' : undefined}
      >
        <Copy size={16} weight="Outline" aria-hidden="true" />
        <span className={styles.emailLabel}>
          <span className={styles.defaultLabel}>{email}</span>
          <span className={styles.feedback} aria-hidden="true">Email copied</span>
        </span>
      </Button>
      {links.map(({ name, icon, href }) => (
        <ButtonLink
          key={name}
          appearance="icon"
          href={href ?? `${emailLink}?subject=${encodeURIComponent(`Let’s connect on ${name}`)}`}
          aria-label={href ? `Alex on ${name}` : `Email Alex to connect on ${name}`}
          title={href ? name : `Connect on ${name}`}
          target={href ? '_blank' : undefined}
          rel={href ? 'noopener noreferrer' : undefined}
        >
          <span
            className={styles.socialIcon}
            style={{ maskImage: `url("${icon}")`, WebkitMaskImage: `url("${icon}")` }}
            aria-hidden="true"
          />
        </ButtonLink>
      ))}
      <span className="sr-only" role="status">
        {copied ? 'Email address copied to clipboard.' : status === 'opening-email' ? 'Opening your email app.' : ''}
      </span>
    </div>
  );
}
