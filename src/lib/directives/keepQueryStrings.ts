export const keepQueryStrings = (node: HTMLAnchorElement, page: Page<Record<string, string>>) => {
  const addQueryStringsToHref = (page): void => {
    const url = node.href.split('?')[0]
    node.setAttribute('href', `${url}${page.url.search}`)
  }

  addQueryStringsToHref(page)

  return {
    update(page) {
      addQueryStringsToHref(page)
    }
  }
}