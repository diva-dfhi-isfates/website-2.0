export const getLocaleInUrl = (url: string): string => {
  const search = url.split('?')[1]
  return new URLSearchParams(search).get('lang') || 'de'
}
