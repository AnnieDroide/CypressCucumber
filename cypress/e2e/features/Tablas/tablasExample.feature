Feature: Ejemplo de Uso de Tablas

    Scenario: Ejemplo de Uso de Hashes
        Then leo la siguiente tabla aplicando Hashes
            | num | mes        |
            | 1   | enero      |
            | 2   | febrero    |
            | 3   | marzo      |
            | 4   | abril      |
            | 5   | mayo       |
            | 6   | junio      |
            | 7   | julio      |
            | 8   | agosto     |
            | 9   | septiembre |
            | 10  | octubre    |
            | 11  | noviembre  |
            | 12  | diciembre  |


    Scenario: Ejemplo de Uso de Rows
        Then leo la siguiente tabla aplicando rows
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |


    Scenario: Ejemplo de Uso de Raw
        Then leo la siguiente tabla aplicando raw
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |

    Scenario: Ejemplo de Uso de RawTable
        Then leo la siguiente tabla aplicando rawTable
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |


    Scenario: Ejemplo de Uso de RowsHashes
        Then leo la siguiente tabla aplicando RowsHashes
            | num | mes        |
            | 1   | enero      |
            | 2   | febrero    |
            | 3   | marzo      |
            | 4   | abril      |
            | 5   | mayo       |
            | 6   | junio      |
            | 7   | julio      |
            | 8   | agosto     |
            | 9   | septiembre |
            | 10  | octubre    |
            | 11  | noviembre  |
            | 12  | diciembre  |


    Scenario: Ejemplo de uso de flat
        Then leo la siguiente tabla con raw y aplico flat
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |


    Scenario: Ejemplo de uso de flat en 1
        Then leo la siguiente tabla con raw en 1 y aplico flat
            | tech     | uso            |
            | cypress  | e2e, servicios |
            | selenium | varios         |
    @focus
    Scenario Outline:

