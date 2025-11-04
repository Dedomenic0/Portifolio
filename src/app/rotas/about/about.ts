import { Component } from '@angular/core';
import { Sobre } from "../../componentes/sobre/sobre";
import { Cabecalho } from "../../componentes/cabecalho/cabecalho";

@Component({
  selector: 'app-about',
  imports: [Sobre, Cabecalho],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
