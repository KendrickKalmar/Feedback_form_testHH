import * as loc from "../locators/locators.json" // подключаем файл селекторами
import * as data from "../test_data/data.json" // подключаем файл селекторами
describe('e2e Формы обратной связи', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // домен вынесен в конфиг
          });


    it('e2e', function () {

      cy.get(loc.start_title, { timeout: 5000 }).should('be.visible') // Ищем заголовок "Форма обратной связи для сайте" на сайте
      cy.get(loc.start_title).contains(data.start_title) // Проверяем содержание
      cy.get(loc.name).type(data.name) // Ищем поле "Имя", пишем имя
      cy.get(loc.email).type(data.mail) // Ищем поле "Телефон", пишем телефон
      cy.get(loc.phone).type(data.number) // Ищем поле "Почта" , пишем имя
      cy.get(loc.menu).select(loc.order) // Ищем ниспадающий список, выбираем "Заказ" 
      cy.get(loc.textarea).type(data.message) // Ищем поле "Ваше сообщение", пишем сообщение
      cy.get(loc.button).click() // Ищем кнопку, *щёлк
      cy.get(loc.end_title, { timeout: 2000 }).should('be.visible') // ждём пока заголовок станет видимым
      cy.get(loc.end_title).contains(data.end_title) // Проверяем содержание

    })
    
   

 // запуск через теринал: npx cypress run --spec cypress/e2e/test.cy.js --browser chrome
})

