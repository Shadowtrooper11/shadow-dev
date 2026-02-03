import Navbar from '@/src/components/Navbar';
import NavFooter from '@/src/components/NavFooter';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <NavFooter />
    </NextIntlClientProvider>
  );
}