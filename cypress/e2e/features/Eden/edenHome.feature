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



