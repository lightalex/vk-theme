# vk-theme

Модуль позволяет определить цветовую схему предпочтительную для отображения пользователю на сайте vk.com, при наличии установленных в браузер пользователем расширений, которые могут влиять на отображение сайта vk.com. Расширение должно уметь отвечать на данные запросы. Для этого расширение может использовать модуль [vk-theme-controller](https://github.com/lightalex/vk-theme-controller).

### Установка

```
npm i @lightalex/vk-theme или yarn add @lightalex/vk-theme
```

### Документация

`vkTheme.subscribe((theme, type) => { ... })` - подписка на получение информации о цветовой схеме и ее изменении. `theme` принимает значения `dark` (тёмное оформление) или `light` (светлое оформление). `type` принимает значения `extension_theme` (ответ на запрос цветовой схемы) или `extension_theme_changed` (цветовая схема была изменена).

`vkTheme.unscribe(null | (theme, type) => { ... })` - удаление подписки. В качестве аргумента может принимать функцию обратного вызова, которая была передана в метод `subscribe`. В таком случае отписка произвойдет только для одной функции обратного вызова.

`vkTheme.get()` - запрос на получение цветовой схемы. Ответ будет получен в функцию обратного вызова, которая должна быть передана заранее в методе `subscribe`. `type` в функции обратного вызова будет равен `extension_theme`.

### Использование

```js
import vkTheme from '@lightalex/vk-theme';

vkTheme.subscribe((theme, type) => {
	document.body.setAttribute('scheme', theme === 'dark' ? 'space_gray' : 'client_light');
});
vkTheme.get();
```
