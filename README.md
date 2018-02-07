# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:
* express
* sequelize
* graphql

## Запуск
```
yarn install i
yarn build
yarn start
```

http://localhost:3000/ - приложение
http://localhost:3000/graphql/ - GraphQL IDE

Для сброса данных в базе (моковые данные свои):
```
yarn reset-db
```

# Выполнение задания
Репозиторий содержит все составные части вступительного испытания.

Для реализации приложения мною были выбраны следующие технологии:

На nodejs развернута серверная часть приложения (1 задание), точно так же с помощью nodejs клиенту будет отдаваться статические ресурсы приложения. С одной стороны, отдавать статику силами nodejs не совсем правильно ввиду резкого увеличения нагрузки на серверную часть, которая не должна заботиться о статике. Решением могло бы быть использование nginx (что вполне логично и для продакшн проектов обязательное условие), но в рамках задания можно обойтись и nodejs как и для работы со статикой, так и для выполнения запросов к БД.

Вся разработка велась с использованием webpack, в частности, с использование webpack-dev-server, который осуществляет сборку только изменных модулей, что колоссально увеличивает скорость разработки. Было принято решение делать верстку в виде модулей, во втором задании через разные entries генерировалась разметка, а в третьем задании это особенно пригодилось: итоговый бандл содержит кучу модулей, отвечающих за рендеринг компонентов, стилизацию страницы и т.д.

В верстке использовался БЭМ (надеюсь, его концепцию я понял)

Для поддержания кода в чистоте и порядке использован eslint(air-bnb с небольшим конфигом).

Верстку постарался сделать без использования флексов для лучшей поддержки браузерами (а так хотелось).

# Архитектура приложения
Я плохо знаком с фрэймворками (React), поэтому предпочел писать своими руками.
Что я увидел в данном приложении:
1. Необходима сущность, которая будет выполнять роль ругулировщика при взаимодействии очень многих компонентов - календарь, встреч, таймлайна, формы, модалок.
2. В данном случае я выбрал исплользование паттерна медиатор, который как раз справится с задачами перенаправления событий и сообщений между разными компонентами.
3. В свою очередь, компоненты реализованы с помощью паттерна MVC, таким образом, существует четкое разделение ответственности между составными частями приложения, появляется возможность достаточно легко масштабировать приложение разработкой новых компонентов и встраивания их связей через медиатор.
4. Возможно, я сильно ошибся, что хотел показать универсальное решение в виде связи "один контроллер - несколько представлений", потому что в какой-то момент сопровождать код стало действительно тяжело.
5. Для избежания мутабельности при "прокидывании" данных от контроллера до представлений использовался lodash, в частности метод deepClone, который создает копию любого объекта, автоматически решая проблемы мутабельности.
6. Благодаря использованию медиатора архитектуру приложения можно представить в виде дерева, корневым элементом которого является медиатор. Потомками медиатора являются контроллеры компонентов, которые "не дергают" никакие методы других компонентов, а только лишь сообщают медиатору и каком-либо наступившем событии. Это позволит инкапсулировать реализацию компонентов, а также легко заменять или наращивать функциональность приложения, не изменяя разработанные модули и компоненты.
7. Сообщения о событиях также могут быть направлены от представлений к соответствующим контроллерам с целью четко организовать поток данных в приложении.

# Реализованные фичи
1. Таймлайн обновляется каждую минуту, синхронизирован с временной сеткой. В случае, если текущее время не попадает в диапазон от 8 до 23 часов, текущее время смещено влево.В адаптивной версии работает также.
2. При клике на кнопки в datepicker (вперед, назад) происходит обновление информации о встречах
3. При выборе конкретной встречи отображается tooltip с необходимой информацией, при редактировании встречи открывается форма с заполненными полями.
4. Все Кнопки в форме кликабельны, реализована модалка с удалением встречи

Я постарался сделать неплохую инфраструктуру, чтобы всё же закончить данное приложение в течение ещё какого-то времени, постепенно наращивая его функционал.
