Feature: Test de la página de Tienda Claro


    Scenario:verificar funcionalidad del buscador
        Given que un usuario está en la página de "Claro"
        When posiciona el mouse sobre "Celulares"
        Then se visualizan las opciones "Samsung, Motorola, Celulares Liberados"

    Scenario: Verificar orden de los elementos en PLP
        Given que un usuario está en la página de "Claro"
        When se selecciona la opción "Ver catálogo completo"
        And se cambia filtro a "Menor precio"
        Then los precios están ordenados de menor a mayor

       

    
