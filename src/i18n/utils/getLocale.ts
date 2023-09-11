import { locales } from "../locales/locales"

export default function getLocale(path: string) {
  const lang = path.split('/')[1]
  return locales.find(local => local === lang)
}