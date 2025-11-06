import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Projetos } from '../../services/projetos';

@Component({
  selector: 'app-cards',
  imports: [MatCardModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {

  projetos = inject(Projetos);
  
  listaProjetos = this.projetos.obterProjetos();
    
}
