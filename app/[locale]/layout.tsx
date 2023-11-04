import './globals.scss';
import './anim.scss';
import './styles.scss';

import { useLocale } from 'next-intl';
import { Layout } from '../../components/Layout';

export const metadata = {
  title: 'Front-end / Full-Stack',
  description: `Hi, I'm Denis. Experienced Full-Stack developer from Ukraine based on Nextjs/Nestjs.`,
};

export default function RootLayout({
  children,
  params,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body id="home">
        <Layout params={params}>
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
}
