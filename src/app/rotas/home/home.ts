import { Component } from '@angular/core';
import { Cards } from "../../componentes/cards/cards";
import { Cabecalho } from "../../componentes/cabecalho/cabecalho";
import { Corpo } from "../../componentes/corpo/corpo";
import { Separador } from "../../componentes/separador/separador";
import { Sobre } from "../../componentes/sobre/sobre";
import { Rodape } from "../../componentes/rodape/rodape";

@Component({
  selector: 'app-home',
  imports: [Cards, Cabecalho, Corpo, Separador, Sobre, Rodape],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
