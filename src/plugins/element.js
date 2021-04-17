/**
 * 用一个新的文件 来引入elements-puls
 * https://element-plus.gitee.io/#/zh-CN/
 */

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 国际化
import 'dayjs/locale/zh-cn'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import messages from '../utils/i18n'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: window.navigator.language.toLocaleLowerCase(),
    fallbackLocale: localeEN.name,
    messages,
})


export default (app) => {
    app.use(ElementPlus, { locale: localeZH })

    app.use(i18n)
    return app
}

