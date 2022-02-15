import { register, init } from 'svelte-i18n'

register('Deutsch', () => import('./localizations/de.json'))
register('Français', () => import('./localizations/fr.json'))

init({
  fallbackLocale: 'Deutsch',
  initialLocale: 'Deutsch'
})
