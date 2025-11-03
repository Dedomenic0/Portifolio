import { Component } from '@angular/core';
import { Cards } from "../../componentes/cards/cards";
import { Cabecalho } from "../../componentes/cabecalho/cabecalho";
import { Corpo } from "../../componentes/corpo/corpo";
import { Separador } from "../../componentes/separador/separador";

@Component({
  selector: 'app-home',
  imports: [Cards, Cabecalho, Corpo, Separador],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
