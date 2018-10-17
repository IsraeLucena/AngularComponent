import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {itemMenu} from '../model/item-menu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('itens') itens: itemMenu[];
  @Output() name = new EventEmitter<string>();
  
  nome;

  constructor() { }

  ngOnInit() {
  }

  clickItem(item){
    this.nome = item
    this.name.emit(item)
  }
  
}
