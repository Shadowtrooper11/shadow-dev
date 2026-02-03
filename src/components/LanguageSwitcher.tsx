'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../i18n/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <label className="relative inline-flex items-center gap-1">
      <Globe />
      <select
        defaultValue={locale}
        onChange={handleChange}
        disabled={isPending}
        className="bg-black text-white border border-zinc-700 rounded px-2 py-1 text-sm focus:outline-none cursor-pointer"
      >
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </label>
  );
}