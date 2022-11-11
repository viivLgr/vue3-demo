import { createI18n } from 'vue-i18n';
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhlocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from './en'
import zhLocale from './zh-cn'

const messages = {
    'en': {
        ...enLocale,
        ...elementEnLocale
    },
    'zh-cn': {
        ...zhLocale,
        ...elementZhlocale
    }
}

const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: 'zh-cn',
    messages: messages
})

export default i18n;