# Feedback_form_testHH POM
Автотест формы обратной связи на фреймворке Cypress в формате Page Object Model

> **Статус проекта:**
> Публичный проект: [https://www.testograf.ru/ru/blog/feedback-form-template/]
> 
>  Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать e2e проверку функционала формы обратной связи

## Чек-лист проверок формы обратной связи в Miro
https://clck.ru/3FipNw

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://github.com/KendrickKalmar/Feedback_form_testHH/blob/main/2025-01-13_17-30-56.png?raw=true)

2. Локаторы вынесены в отдельный файл
![image](https://raw.githubusercontent.com/KendrickKalmar/Feedback_form_testHH/refs/heads/main/2025-01-13_17-30-36.png)

3. Тестовые данные вынесены в отдельный файл
![image](https://raw.githubusercontent.com/KendrickKalmar/Feedback_form_testHH/refs/heads/main/image.png)

4. Скрин автотеста
![image](https://raw.githubusercontent.com/KendrickKalmar/Feedback_form_testHH/refs/heads/main/Au/2025-01-13_18-24-32.png)



## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команды:
```
npm i
npx cypress run --spec cypress/e2e/test.cy.js --browser chrome
```
Ожидаемый результат: получим отчет о прохождении тестов.

Фактический результат:

Невозможно определить локатор каждого поля через cypress, так как поверх размещён локатор #ttgraf-33. Возможно, есть несколько элементов (селекторов), которые перекрываются, и нужно обратиться к "младшему" селектору. Проверил значиение z-index и visibility для селектора поля инпутов. 
Если работать через DevTools, то все локаторы отображаются корректно, но для cypress они невидимы
![image](https://raw.githubusercontent.com/KendrickKalmar/Feedback_form_testHH/refs/heads/main/Au/2025-01-13_17-58-05.png)

## Автор

Хохлов Александр (https://t.me/itcouldbeus)
