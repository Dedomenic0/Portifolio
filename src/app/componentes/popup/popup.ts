import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-popup',
  imports: [MatDialogModule, MatIconModule, MatAnchor],
  templateUrl: './popup.html',
  styleUrl: './popup.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Popup {
  data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<Popup>);
}
