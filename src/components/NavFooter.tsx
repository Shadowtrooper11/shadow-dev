'use client'

import { useTranslations } from "next-intl"

export default function NavFooter() {
    const t = useTranslations('NavFooter');

    return (
        <footer className="bg-zinc-800/20 p-4 border-t-2 border-zinc-700/40">
            <div className="text-center">
                <p>{t('text')}</p>
            </div>
        </footer>
    )
}