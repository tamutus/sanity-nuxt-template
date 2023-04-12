import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#ED6D23',
      },
      boxShadow: {
        top: 'var(--top-shadow-elevation-medium)',
        bottom: 'var(--bottom-shadow-elevation-medium)',
      },
    },
  },
};
