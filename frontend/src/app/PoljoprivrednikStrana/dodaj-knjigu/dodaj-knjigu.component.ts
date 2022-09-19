import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dodaj-knjigu',
  templateUrl: './dodaj-knjigu.component.html',
  styleUrls: ['./dodaj-knjigu.component.css']
})
export class DodajKnjiguComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private ref: MatDialogRef<DodajKnjiguComponent>) { }

  ngOnInit(): void {
  this.fg = this.fb.group({
    slika: ['', Validators.required],
    naslov: ['', Validators.required],
    autor: ['', Validators.required],
    opis: ['', Validators.required],
    godinaIzdanja: ['', Validators.required],
    brojStrana: ['', Validators.required],
  })
}
fg: FormGroup;


dodaj() {
  this.ref.close(this.fg.value)
}

}
