Feature: Test de la página de Store Automation

    Scenario:Realizar Loguin
        Given que un usuario está en la página de "Store"
        When cuando el usuario presiona "Login or register" en el menu principal
        And completa usuario y password "1"
        Then se verifica que el titulo principal en "My Account"
