INSTALACIÓN DE ANGULAR:

* Nota: Esta App se ha trabajado con la versión 15.04.0 de Angular y 18.13.0 de Node.Js
* Se recomienda usar la extensión: Angular Language Service de VSC para las funciones de autocompletado

1) Descargar Node.js en node.org, e instalar la versión LTS

2) Abrir un terminal CMD y verificar que se ha instalado, ejecutando los comandos:

   a) node -v
   b) npm -v

3) En el terminal CMD, limpiar la caché con el comando: 
         npm cache verify

4) Instalar (En terminal CMD) la versión de Angular con la que trabajaremos, con el siguiente comando:
        npm install -g @angular/cli@15.04.0
   * En el caso de querer instalar la última versión, hay que escribir el comando: 
        npm install -g @angular/cli

5) Verificar (En terminal CMD) la versión instalada, escribiendo: 
        ng version

6) Crear una carpeta en el ordenador o buscar una ubicación ya existente para crear la carpeta de nuestro proyecto.

7) En el terminal CMD, escribir cd dejar un espacio y arrastrar la carpeta donde almacenaremos la carpeta de nuestro proyecto.

8) Una vez en esa carpeta, escribimos (En terminal CMD):  
        ng new nombre-del-proyecto

9) Los archivos se irán descargando. Vamos al VSC y (Importante), abrimos la carpeta final de destino de nuestros archivos (Verificar no abrir nuestro proyecto dentro de otra carpeta).

10) Una vez descargado todo, desplegaremos el puerto 4200 donde se previsualizará la aplicación. Escribir en la consola de VSC (Terminal Powershell):
        ng serve
* Tras desplegarlo, podemos también escribir en el navegador la siguiente url:  http://localhost:4200/


SI QUEREMOS DESINSTALAR ANGULAR:

1) En un terminal CMD escribir uno a uno los siguientes comandos:
       npm uninstall -g @angular/cli
       npm cache verify
       npm install -g@angular/cli   (Si queremos descargar la última versión)
       npm install -g @angular/cli@version   (Si queremos instalar una versión en concreto)


DESARROLLANDO LA PRIMERA APP:

1) Dentro de la carpeta src, buscamos la carpeta app y dentro de ella el archivo app.components.ts
   - En la línea de código export class AppComponent { } es donde tendremos toda la lógica de la aplicación

2) El archivo app.component.css está vacío por defecto, dado que en el archivo app.component.html está todo el contenido de estilos dentro de las etiquetas <style></style>. No obstante en una aplicación profesional, se separará el código HTML del CSS en sus respectivos archivos. En esta aplicación, procederemos a borrar todo el contenido que hay dentro de app.component.html

3) En el archivo app.module.ts es donde va encapsulando los bloques de código (La aplicación se va dividiendo por dominios, ejemplo: Módulo de compras, módulo de ventas, etc.)

4) En el archivo app.components.ts tenemos también ennlazados los archivos app.component.html y app.component.css. Estas rutas se ubicarán dentro de: @Component({ }) en los apartadeos de templateUrl y styleUrls


PASO A PASO:

1) En el archivo app.components.ts vamos a ingresar una función changeTitle(){ } con la que cambiaremos el título de la aplicación

2) En el archivo app.component.html además de llamar a mi título dentro de un <h1>{  }</h1> llamaré a mi título. Igualmente mediante un evento click, crearé un botón para que cuando se presione cambie el título

3) Creamos nuestro primer componente (Terminal CMD), mediante el siguiente comando:
      ng g c components/product 
  * Donde components es la carpeta que creará y que albergará mi nuevo componente, y product será el nombre de mi componente 
  * Veremos que dentro de la carpeta app, se nos ha creado otra carpeta llamada components, con diversos archivos ligados al componente producto
  * El archivo product.component.spec.ts es para hacer las pruebas unitarias
  * El archivo product.component.ts es el que se va a encargar de toda la lógica del negocio

4) Haremos uso de los prompt, para enviar datos al componente creado y comunicarme así entre padre (Componente principal) e hijo (En este caso el componente producto).

5) Creo una interfaz de manera manual. Dentro de la carpeta app, crearé una carpeta llamada models y dentro de ella crearé un archivo al que llamaré product.model.ts. En ese archivo declararé los atributos esperados de un producto.

6) Nos dirigimos al archivo product.component.ts y le vamos a decir que vamos a recibir la información del archivo product.model.ts. Vamos a usar la palabra input en el import como también en un decorador @Input

7) Nos dirigimos al archivo product.component.html donde vamos a renderizar el título que hemos añadido en el archivo product.component.ts -Función @Input()-. Lo renderizaremos dentro de una etiqueta <h1>{{ }}</h2>

8) En el archivo product.component.ts tenemos un selector: 'app-product', el cual lo llamaremos desde HTML como un componente más. Para ello, iremos al archivo app.component.html

9) Nos vamos al archivo product.component.ts donde importaremos la interfaz creada de los productos del archivo product.models.ts En ambos archivos haremos uso del export e import

10) En el archivo product.component.ts export en: class ProductComponent {@Input()  }, dicho decorador no usará un title sino un product

11) A continuación vamos al archivo product.component.html donde cambiaremos la palabra título por {{product.title}}. Renderizaremos también la información del precio y las imágenes

13) Vamos al archivo app.modules.ts para importar el cliente {HttpClientModule} desde @angular/common

13) Nos vamos al archivo app.component.ts e importaremos { HttpClient } desde el módulo de @angular/common. Añadiremos también un patrón de inyección de dependencias. Ingresaremos también la URL de la Api con la que trabajaremos. Importamos también { Product }

14) Nos vamos al archivo app.component.html (Es decir el template HTML principal de la aplicación), y completaremos lo que está en la etiqueta <app-product></app-product> 

15) Nos vamos al archivo app.component.ts e importo la herramienta de Angular NgOptimizedImage para optimizar las imágenes. Haremos la misma importación en el archivo app.modules.ts donde además añadiremos el nombre de las librerías utilizadas en @NgModule({ imports: [ ], })

16) Vamos al archivo de product.component.html donde en la etiqueta de <img> añadiremos atributos que permitan un mejor renderizado de las imágenes









<!--
# MiprimeraApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
-->
