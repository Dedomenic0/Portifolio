import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cabecalho',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, RouterLink],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
})
export class Cabecalho {

}
