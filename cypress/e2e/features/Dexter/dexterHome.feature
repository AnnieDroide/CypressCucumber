Feature: Test de la página de Dexter


Scenario: Verificar la página de la marca Le-Coq Sportif
 Given que un usuario está en la página de "Dexter"
 When clickea la opción "Por ahora no quiero, gracias."
 And realiza scroll hasta "Navegá por marcas" 
 And selecciona la opción de "le-coq-sportif"
 Then se verifica que la url contiene "/le-coq-sportif"
