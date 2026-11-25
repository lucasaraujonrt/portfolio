import { getDict, type Locale } from '@/lib/i18n'
import { HomeClient } from './home-client'
import { HomeFooter } from './home-footer'
import { ShortVersion } from './short-version'

export function Home({ locale }: { locale: Locale }) {
  const dict = getDict(locale)
  return (
    <div lang={locale === 'en' ? 'en' : undefined} className="flex flex-1 flex-col overflow-x-clip">
      <HomeClient dict={dict}>
        <ShortVersion dict={dict} />
        <HomeFooter dict={dict} />
      </HomeClient>
    </div>
  )
}
