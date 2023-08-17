import { createApp } from "vue";
import WidgetPage from './WidgetPage.vue'

export function createVueApp() {
    const app = createApp(WidgetPage)
    app.mount('#page_holder')
}