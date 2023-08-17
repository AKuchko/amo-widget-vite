// Скрипт для создания виджета для разработки
import { Config, WidgetBuilder } from "amo-widget-builder";
import { config as commonConfig } from "./common";

const { DEV_SERVER_PORT } = process.env
const public_path = `https://localhost:${DEV_SERVER_PORT}`

// создаем объект настроек, который расширяет стандартные настройки из common.ts
const config: Config = {
    ...commonConfig,
    entryPoint: `${public_path}/app.js`,
}

// создаем экземпляр объекта WidgetBuilder, который и будет собирать наш виджет
const builder = new WidgetBuilder(config);

// инициализируем сборку виджета
// builder.init является асинхронной фунцией, 
// поэтом выполняем ее в самовызывающейся асинхронной фнкции 
(async () => {
    await builder.init()
    // данная функция в итоге создаеет zip-архив со стандартными настройками,
    // изображениями, script.js и manifest.js, что очень ускоряет процесс.
    // также script.js подключается к localhost'у, поэтому нет необходимости при каждом изменении загружать zip
})()