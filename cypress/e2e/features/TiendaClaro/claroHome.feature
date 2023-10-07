Feature: Test de la página de Tienda Claro


    Scenario:verificar funcionalidad del buscador
        Given que un usuario está en la página de "Claro"
        When posiciona el mouse sobre "Celulares"
        Then se visualizan las opciones "Samsung, Motorola, Celulares Liberados"