import localFont from 'next/font/local';

export const lato = localFont({
  src: [
    {
      path: '../public/fonts/Lato-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lato-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
  ],
  display: 'swap',
});