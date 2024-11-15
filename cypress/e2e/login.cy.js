describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки Восстановить пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
         cy.get('#loginButton').click('') // Нажала Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авториз.вижу текст
         cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

     })
    })

    it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки Восстановить пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввела верный логин
         cy.get('#pass').type('iLoveqastudio7'); // Ввела неверный пароль
         cy.get('#loginButton').click('') // Нажала Войти
         
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авториз.вижу текст
         cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

     })

     it('Проверка,что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки Восстановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввела логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click('') // Нажала Войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авториз.вижу текст
        cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки Восстановить пароль

        cy.get('#forgotEmailButton').click(''); // Нажимаю Восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввела почту для восстановления пароля 
        cy.get('#restoreEmailButton').click(''); // Нажала Отправить код 
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки Восстановить пароль

        cy.get('#mail').type('germn@dolnikov.ru'); // Ввела неверный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввела неверный пароль
        cy.get('#loginButton').click('') // Нажала Войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авториз.вижу текст
        cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })
    
    it('Верный пароль и приведение к строчным буквам в логине:', function () {
        cy.visit('https://login.qa.studio/'); // Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки Восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела логин с приведением строчных букв
        cy.get('#pass').type('iLoveqastudio1'); // Ввела верный пароль
        cy.get('#loginButton').click('') // Нажала Войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авториз.вижу текст
        cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })