import { Component, Input } from '@angular/core'; //Añadimos el Input que nos traerá la información del archivo product.model.ts
import { Product } from './../../models/product.model'; //Importamos la interface del archivo product.model.ts

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product! : Product;
}

  /*
  1) En un primer momento añadimos un decorador @Input() donde indicaremos que queremos el título. Cuando indiquemos que es de tipo string, nos pedirá inicializar la variable como buena práctica. La inicializaremos con un valor vacío.
  2) Posteriormente luego de importar la información de la interfaz, cambiaremos el título por un product. Como Angular me pide inicializarlo, lo llamaré product! dándole a entender que más adelante le iré añadiendo información
*/

