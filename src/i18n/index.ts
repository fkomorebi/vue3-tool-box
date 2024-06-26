import { createI18n } from 'vue-i18n'
import zhHK from '@/i18n/lib/zh-HK.json'
import enUS from '@/i18n/lib/en-US.json'

const i18n = createI18n({
  locale: 'zh-HK',
  fallbackLocale: 'zh-HK',
  messages: {
    'zh-HK': zhHK,
    'en-US': enUS,
  },

},
)
export default i18n
