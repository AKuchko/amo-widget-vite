import { monkeyPatch } from "./util/monkeyPatching"
import { createVueApp } from "./widgetPage"

// здесь мы описываем все callback'и по документации: render, setttings и т.д.
export default function (widget) {
    widget.callbacks = {
        init() {
            // monkeyPatch()
            createVueApp()
            return true 
        },
        render() {
            return true
        },
        settings() {
            console.log('setings')

            console.log(window)
            return true
        },      
        bind_actions () {
            return true
        },
        dpSettings() {},
        advancedSettings() {},
        destroy() {},
        onSave() {
            return true
        },
        onAddAsSource(pipeline_id) {},
        onSalesbotDesignerSave(handler_code, params) {},
        contacts: {
            selected () {}
        },
        leads: {
            selected () {}
        },
        todo: {
            selected () {}
        },
    }

    // script.js, подключаясь к localhost'у, будет выполнять данный файл,
    // при этом ожидая возврат обьекта widget, 
    // поэтому возвращаем widget с описанными callback'ами 
    return widget
} 