import { locale } from "svelte-i18n"
import { get } from "svelte/store"
import { LANGS } from "./constants"

export const localisedURL = (node: HTMLAnchorElement, page) => {

  // unused parameter needed to trigger update()
  const addLocaleToHref = (page): void => {
    const lang = get(locale)

    // eslint-disable-next-line prefer-const
    let { origin , pathname } = new URL(node.href)

    const pathnameIsLocalised = LANGS.some(lang => pathname.startsWith('/' + lang))

    if (pathnameIsLocalised) pathname = pathname.split('/').slice(2).join('/')
    if (!pathname.startsWith('/')) pathname = '/' + pathname
    
    const updatedUrl = origin + '/' + lang + pathname
    node.setAttribute('href', updatedUrl)
  }

  addLocaleToHref(page)

  return {
    update() {
      addLocaleToHref(page)
    }
  }
}