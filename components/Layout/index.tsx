import { useLocale, useTranslations } from 'next-intl';
import { Loading } from './Preloader';
import { Footer } from './footer';
import { Header } from './header';
import { notFound } from 'next/navigation';

export const Layout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  const t = useTranslations('Index');

  return (
    <Loading>
      <Header
        locale={locale}
        home={t('home')}
        about={t('about')}
        skills={t('skills')}
        portfolio={t('portfolio')}
        contact={t('contact')}
      />
      {children}
      <Footer />
    </Loading>
  );
};
