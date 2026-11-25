import { HomeFooter } from '@/components/home/home-footer'
import { getDict } from '@/lib/i18n'

export function Footer({ portuguese = false }: { portuguese?: boolean }) {
  return <HomeFooter dict={getDict(portuguese ? 'pt' : 'en')} />
}
