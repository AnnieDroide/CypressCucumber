# Configuración de VSC

## Plugins recomendados para el VSCode

En el caso de emplear el "Visual Studio Code", se recomienda ingresar al menú lateral de los cuadraditos e instalar los siguientes plugins:

- *Better Comments*: aaron-bond.better-comments
- *Bracket Pair Colorization Toggler*: dzhavat.bracket-pair-toggler
- *Cucumber (Gherkin) Full Support*: alexkrechik.cucumberautocomplete
- *Cucumber Formatter*: telmodsg.cucumber-formatter
- *Cypress Helper*: shelex.vscode-cy-helper
- *Cypress Snippets*: andrew-codes.cypress-snippets
- *cypress-cucumber-steps*: dylanmoerland.cypress-cucumber-steps
- *ESLint*: dbaeumer.vscode-eslint
- *GitLens - Git supercharged*: eamodio.gitlens
- *Material Icon Theme*: PKief.material-icon-theme
- *Path Intellisense*: bracket-pair-toggler.run
- *Prettier-Code formatter*: esbenp.prettier-vscode
- *SonarLint*: SonarSource.sonarlint-vscode

## Navegar desde el feature al step

1. File > Preferences > Settings (Code > Preferences > Settings on Mac)
2. Hacer click en la pestaña *Workspace*
3. Click en el botón "Open Setting (JSON)" ubicado arriba a la derecha (hoja con flecha)
4. Verificar que la configuración sea la siguiente


{
    "workbench.settings.useSplitJSON": false,
    "cucumberautocomplete.steps": [
        "cypress/e2e/step_definitions/**.js"
      ],
   "cucumberautocomplete.syncfeatures": "cypress/e2e/features/**/*.feature",
   "cucumberautocomplete.strictGherkinCompletion": false,
   "cucumberautocomplete.smartSnippets": true,
   "cucumberautocomplete.stepsInvariants": true
}


Más información: [StackOverflow](https://stackoverflow.com/questions/66434401/is-it-possible-to-navigate-from-feature-file-to-step-definition-and-vice-versa-i?newreg=c766d9efea28417c949af597a9f8098b)

## Linting

Herramienta de *análisis estático* que permite realizar una revisión del código sin ejecutarlo.

Para configurarlo, se deben seguir los siguientes pasos:

1. En la parte inferior izquierda, presionar la "rueda"
2. En el menú, seleccionar *Settings*
3. En "Search settings" ingresar "format on save"
4. Activar el checkbox "Format a file on save. A formater..."
5. La primera vez que se guarde un archivo, aparecerá un menú con las opciones "Prettier", "TypeScript", etc. Seleccionar "Prettier - Code formatter"

# CypressCucumber

Proyecto básico Cypress con Cucumber-Gherking.

## Reporte

Para que se genere el reporte con el comando "gerenate:report" se debe tener el archivo "cucumber-json-formatter.exe" en la carpeta raiz.
El mismo puede ser descargado de https://github.com/cucumber/json-formatter/releases/tag/v19.0.0

## Flags de Configuración
- hideXHRInCommandLog: En **true** permite NO visualizar las llamadas de servicio de tipo XHR. En **flase** permite visualizar las llamadas de servicio de tipo XHR.
