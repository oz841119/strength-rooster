import { createI18nServer } from 'next-international/server'
 
export const { getI18n, getScopedI18n } = createI18nServer({
  en: () => import('./en'),
  "zh-tw": () => import('./zh-tw'),
})