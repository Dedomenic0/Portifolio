import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Projetos } from '../../services/projetos';
import { Popup } from '../popup/popup';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  imports: [MatCardModule],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {

  projetos = inject(Projetos);
  dialog = inject(MatDialog);
  
  listaProjetos = this.projetos.obterProjetos();
    
  openDialog(imagem: string, titulo: string):void {
    this.dialog.open(Popup, {
      data: {
        titulo: titulo,
        imagem: imagem
      },
      maxHeight: '100vh',
      maxWidth: '100vw'
    });
  }

}
