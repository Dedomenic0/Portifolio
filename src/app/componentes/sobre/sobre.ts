import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "../cabecalho/cabecalho";

@Component({
  selector: 'app-sobre',
  imports: [RouterOutlet, Cabecalho],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {

}
