import { AnchorProps } from '@mantine/core';
import Link from 'next/link';
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

interface LanguageProps extends AnchorProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Language: React.FC<LanguageProps> = (props) => {
  const { asPath, locale } = useRouter();

  const setCookie = (l: string) => {
    document.cookie = `NEXT_LOCALE=${l}; max-age=31536000; path=/`;
  };

  const newLocale = locales.find((l) => l.code !== locale);

  const handleLanguageOnChange = () => {
    setCookie(newLocale?.code || '');
  };

  return (
    <Link
      onClick={() => {
        handleLanguageOnChange();
        // props.onClick?.(e);
      }}
      {...props}
      as={asPath}
      locale={newLocale?.code}
      href={asPath}
    >
      {newLocale?.name}
    </Link>
  );
};

export default Language;
