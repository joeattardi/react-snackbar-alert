import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './icons';

export const themes = {
  default: {
    color: 'rgba(0, 0, 0, 0.9)'
  },
  info: {
    color: 'rgba(0, 180, 255, 0.95)',
    icon: InfoIcon
  },
  success: {
    color: 'rgba(127, 175, 27, 0.95)',
    icon: SuccessIcon
  },
  warning: {
    color: 'rgba(240, 123, 6, 0.95)',
    icon: WarningIcon
  },
  error: {
    color: 'rgba(211, 0, 0, 0.95)',
    icon: ErrorIcon
  }
};

export function getTheme(name) {
  return themes[name] || themes.default;
}

export const themeNames = Object.keys(themes);
