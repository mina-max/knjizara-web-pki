import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.css']
})
export class KomentarComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private ref: MatDialogRef<KomentarComponent>) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      ocena: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      kom: ['', Validators.required]
    })
  }
  fg: FormGroup;
  
  posalji() {
    if(this.fg.value.kom == "" || this.fg.value.ocena == "" ||
    this.fg.value.ocena < 1 || this.fg.value.ocena > 5) return;
    this.ref.close(this.fg.value)
  }

}
