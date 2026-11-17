import type { ComponentProps } from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import styles from './Button.module.css';

type Appearance = 'standard' | 'icon';

type ButtonProps = Omit<ComponentProps<typeof BaseButton>, 'className'> & {
  appearance?: Appearance;
  className?: string;
};

type ButtonLinkProps = ComponentProps<'a'> & {
  appearance?: Appearance;
};

function controlClass(appearance: Appearance, className = ''): string {
  return [styles.control, appearance === 'icon' ? styles.icon : '', className].filter(Boolean).join(' ');
}

export function Button({ appearance = 'standard', className, ...props }: ButtonProps) {
  return <BaseButton className={controlClass(appearance, className)} {...props} />;
}

// Base UI Button owns action semantics; navigation keeps native link semantics.
export function ButtonLink({ appearance = 'standard', className, ...props }: ButtonLinkProps) {
  return <a className={controlClass(appearance, className)} {...props} />;
}
