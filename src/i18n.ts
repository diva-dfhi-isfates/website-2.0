import { register, init } from 'svelte-i18n'

register('de', () => import('./localizations/de.json'))
register('fr', () => import('./localizations/fr.json'))

init({
  fallbackLocale: 'de',
  initialLocale: 'de'
})
