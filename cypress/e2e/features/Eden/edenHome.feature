Feature: Test de la página de Eden

    Scenario:verificar funcionalidad del buscador
        Given que un usuario está en la página de "Eden"
        When escribe "rock" en el campo del buscador
        And hace click en la sugerencia "Cosquin Rock 2024"
        Then se verifica que el titulo es 'Cosquin Rock 2024 '
        And la fecha es "10" de "febrero" a las "14:00" Hs


    Scenario: verificar funcionalidad del buscador
        Given que un usuario está en la página de "Eden"
        When escribe "rock" en el campo del buscador
        And hace click en la sugerencia "Cosquin Rock 2024"

        Then se verifican los siguientes datos del evento
            | titulo | Cosquin Rock 2024 |
            | dia    | 10                |
            | mes    | febrero           |
            | hora   | 14:00             |


    Scenario: Verificar los precios de 1 cuarteto
        Given que un usuario está en la página de "Eden"
        When presiona el botón del header "CUARTETOS"
        And presiona el botón Ver de "El Loco Amato"
        Then el precio que se visualiza tiene el formato correcto

    Scenario: Verificar precios usando Intercept
        Given que un usuario está en la página de "Eden"
        When presiona el botón del header "CUARTETOS"
        And presiona el botón Ver de "1"
        Then el precio que se visualiza tiene el formato correcto validado con la respuesta del Intercept

    @ignore
    Scenario: Verificar precios usando Intercept (Teatros)
        Given que un usuario está en la página de "Eden"
        When presiona el botón del header "TEATROS"


    Scenario: Verificar precios usando llamada el servicio
        Given que un usuario está en la página de "Eden"
        When presiona el botón del header "CUARTETOS"
        And presiona el botón Ver de "1"
        Then el precio que se visualiza tiene el formato correcto validado con el servicio

