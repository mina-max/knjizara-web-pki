import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DodajKnjiguComponent } from './PoljoprivrednikStrana/dodaj-knjigu/dodaj-knjigu.component';
import { MatConfirmDialogComponent } from './PoljoprivrednikStrana/mat-confirm-dialog/mat-confirm-dialog.component';
import { PreporuciKnjiguComponent } from './PoljoprivrednikStrana/preporuci-knjigu/preporuci-knjigu.component';

@Injectable({
  providedIn: 'root'
})
export class DialogDodajKnjiguService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog() {
    return this.dialog.open(DodajKnjiguComponent, {
      width: '400px',
      height:'auto',
      disableClose: true
    })
  }
}