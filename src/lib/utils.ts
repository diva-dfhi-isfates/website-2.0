import { WEBSITE_TITLE } from "./constants"

export const getLocaleInUrl = (url: string): string => {
  const search = url.split('?')[1]
  return new URLSearchParams(search).get('lang') || 'de'
}

export const getUrlWithUpdatedLang = (url: string, lang: string, newLang: string): string => {
  if (url.endsWith('/')) url = url.slice(0, -1)

  return `${url}`.replace(`/${lang}`, `/${newLang}`)
}

export const getPageTitle = (preTitle: string): string => `${preTitle} - ${WEBSITE_TITLE}`
