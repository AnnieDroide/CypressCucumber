Feature: Test de la página de Store Automation
Background: Entrar a Store & Login
        Given que un usuario está en la página de "Store"
        When el usuario presiona "Login or register" en el menu principal
        And completa usuario y password "1"
        Then se verifica que el titulo principal es "My Account"

    Scenario:Realizar Loguin
        When el usuario realiza hover "Welcome back"
        And clickea la opción "Logoff"
        Then se verifica que el titulo principal es "Account Logout"


    Scenario:Realizar Loguin & logout
       
        When el usuario realiza logout
        Then se verifica que el titulo principal es "Account Logout"
