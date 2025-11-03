import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Corpo } from "./componentes/corpo/corpo";
import { Cards } from "./componentes/cards/cards";
import { Separador } from "./componentes/separador/separador";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecalho, Corpo, Cards, Separador],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portifolio');
}
