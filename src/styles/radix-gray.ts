import { gray, grayA, grayDark, grayDarkA } from '@radix-ui/colors';

function declarations(scale: Record<string, string>): string {
  return Object.entries(scale).map(([key, value]) => {
    const step = key.match(/\d+$/)?.[0];
    const alpha = key.startsWith('grayA') ? 'a' : '';
    return `--gray-${alpha}${step}:${value};`;
  }).join('');
}

// Emit the official palettes at build time. CSS owns system appearance,
// including the first paint, live OS changes, and pages without JavaScript.
export const systemGrayStyles = `
  :root { ${declarations(gray)} ${declarations(grayA)} }
  @media (prefers-color-scheme: dark) {
    :root { ${declarations(grayDark)} ${declarations(grayDarkA)} }
  }
`;

export const browserThemeColors = { light: gray.gray1, dark: grayDark.gray1 };
