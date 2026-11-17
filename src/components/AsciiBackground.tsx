import { useEffect, useRef } from 'react';
import { mountAsciiBackground } from '../lib/ascii/controller';
import styles from './AsciiBackground.module.css';

export default function AsciiBackground() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (host.current) return mountAsciiBackground(host.current);
  }, []);

  return <div ref={host} className={styles.background} aria-hidden="true" />;
}
