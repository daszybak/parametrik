import { Anchor, AnchorProps } from '@mantine/core';
import { useRouter } from 'next/router';

const locales = [
  {
    code: 'en',
    name: 'En',
  },
  {
    code: 'de',
    name: 'De',
  },
];

interface LanguageProps extends AnchorProps {}

const Language: React.FC<LanguageProps> = (props) => {
  const { asPath, locale, push } = useRouter();

  const setCookie = (l: string) => {
    document.cookie = `NEXT_LOCALE=${l}; max-age=31536000; path=/`;
  };

  const newLocale = locales.find((l) => l.code !== locale);

  const handleLanguageOnChange = () => {
    setCookie(newLocale?.code || '');
    push(
      {
        pathname: asPath,
      },
      asPath,
      {
        locale: newLocale?.code || '',
        shallow: false,
      }
    );
  };

  return (
    <Anchor onClick={() => handleLanguageOnChange()} {...props}>
      {newLocale?.name}
    </Anchor>
  );
};

export default Language;
