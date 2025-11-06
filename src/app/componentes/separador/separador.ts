import { Component, input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-separador',
  imports: [MatDividerModule, MatCard],
  templateUrl: './separador.html',
  styleUrl: './separador.scss',
})
export class Separador {
  titulo = input<string>('');

}
