import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PreporuciKnjiguComponent } from './PoljoprivrednikStrana/preporuci-knjigu/preporuci-knjigu.component';

@Injectable({
  providedIn: 'root'
})
export class DialogPreporuciKnjiguService {

  constructor(private dialog: MatDialog) {
   }

   openConfirmDialog() {
    return this.dialog.open(PreporuciKnjiguComponent, {
      width: '400px',
      height:'auto',
      disableClose: true
    })
  }
}
