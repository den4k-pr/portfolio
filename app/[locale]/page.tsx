import { Greeting } from '../../components/Mein/Greeting';
import { AboutUs } from '../../components/Mein/About';
import { Skills } from '../../components/Mein/Skills';
import { MyPortfolio } from '../../components/Mein/MyPortfolio';
import { Contact } from '../../components/Mein/Contact';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <Greeting title={t('title')} animTitle={t('animTitle')} subTitle={t('subTitle')} />
      <AboutUs
        aboutTitle={t('aboutTitle')}
        aboutSpan={t('aboutSpan')}
        aboutSubTitle={t('aboutSubTitle')}
        text1={t('text1')}
        li1={t('li1')}
        li2={t('li2')}
        li3={t('li3')}
        li4={t('li4')}
        li5={t('li5')}
        text2={t('text2')}
        button={t('button')}
      />
      <Skills skillsTitle={t('skillsTitle')} skillsSpan={t('skillsSpan')} />
      <MyPortfolio
        latestProjectTitle={t('latestProjectTitle')}
        latestProjectSpan={t('latestProjectSpan')}
        sectionProjectsOne={t('sectionProjectsOne')}
        sectionProjectsTwo={t('sectionProjectsTwo')}
      />
      <Contact
        contactTitle={t('contactTitle')}
        contactSpan={t('contactSpan')}
        contactFormName={t('contactFormName')}
        contactFormLastName={t('contactFormLastName')}
        contactFormMobile={t('contactFormMobile')}
        contactFormEmail={t('contactFormEmail')}
        contactFormMessage={t('contactFormMessage')}
        contactFormButton={t('contactFormButton')}
        contactFormSuccess={t('contactFormSuccess')}
        contactFormError={t('contactFormError')}
      />
    </>
  );
}
