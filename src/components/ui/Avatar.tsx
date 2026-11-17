import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import styles from './Avatar.module.css';

interface Props {
  src: string;
  alt: string;
  initials: string;
  size?: 'profile' | 'company';
  srcSet?: string;
}

export function Avatar({ src, alt, initials, size = 'profile', srcSet }: Props) {
  const dimension = size === 'company' ? 24 : 48;

  return (
    <BaseAvatar.Root className={styles.root} data-size={size} aria-hidden={alt ? undefined : true}>
      <BaseAvatar.Fallback className={styles.fallback} role={alt ? 'img' : undefined} aria-label={alt || undefined}>
        {initials}
      </BaseAvatar.Fallback>
      <BaseAvatar.Image
        keepMounted
        className={styles.image}
        src={src}
        srcSet={srcSet}
        sizes={`${dimension}px`}
        alt={alt}
        width={dimension}
        height={dimension}
        loading="eager"
        fetchPriority={size === 'profile' ? 'high' : 'auto'}
      />
    </BaseAvatar.Root>
  );
}
