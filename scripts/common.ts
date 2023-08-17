import { Config } from 'amo-widget-builder';
import path from 'path';

// Данный конфиг используется для настройки amo-widget-builder, а именно для создания manifest.js
// Многие настройки совпадают с манифестом, но есть и дополнительные поля 
export const config: Config = {
    // Названиие виджета
    name: {
        ru: 'Тестовый виджет',
        en: 'Test widget',
    },
    // описание виджета после того как скачен 
    description: {
        ru: 'Опиание виджета',
        en: 'Widget description',
    },
    // короткое описание виджета 
    shortDescription: {
        ru: 'Короткое опиание',
        en: 'Widget short description',
    },
    // описание виджета до скачивания (в туре)
    tourDescription: {
        ru: 'Это тестовый виджет для amoCRM',
        en: 'This is a test widget for amoCRM',
    },
    // Заголоовок для расширенных настроек виджета
    advancedSettingsTitle: {
        ru: 'Настройки виджета',
        en: 'Widget settings',
    },
    // данная настройка используется для внесения "фейковой настройки", т.к. необходиммо иметь хотя бы одну 
    // в случае если мы используем сохранение настроек на стороне amoCRM, то данный ключ не нужен
    fakeConfig: {
        required: false,
    },
    locations: [],
    // поддержииваемые языки 
    locales: ['ru', 'en'],
    // путь, где будет создана папка с виджетом
    outDir: path.resolve(__dirname, '..'),
    // указывем папку, куда будет собираться код для виджета (наш bundle)
    bundleDir: path.resolve(__dirname, '../dist'),
    version: '1.0.0',
};