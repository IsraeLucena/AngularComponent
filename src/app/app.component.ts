import { Component } from '@angular/core';

import {itemMenu} from './model/item-menu'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name;

  getName(event){
    this.name = event;
  }

  itens: itemMenu[] = [{
    icon: 'zmdi-format-size text-orange',
    text: 'Texto'
  },
  {
    icon: 'zmdi-image-o text-green',
    text: 'Imagem'
  },{
    icon: 'zmdi-tv-play text-violet',
    text: 'Video'
  },
  {
    icon: 'zmdi-group text-pink',
    text: 'Formas'
  },{
    icon: 'zmdi-mood text-yellow',
    text: 'Emojis'
  },{
    icon: 'zmdi-shopping-cart text-green',
    text: 'Pagamento'
  },{
    icon: 'zmdi-star text-yellow',
    text: 'Favoritos'
  }
]
}
