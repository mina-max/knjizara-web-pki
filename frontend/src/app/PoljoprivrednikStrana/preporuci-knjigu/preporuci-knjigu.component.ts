import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preporuci-knjigu',
  templateUrl: './preporuci-knjigu.component.html',
  styleUrls: ['./preporuci-knjigu.component.css']
})
export class PreporuciKnjiguComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private ref: MatDialogRef<PreporuciKnjiguComponent>) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: ['', Validators.required]
    })
  }
  fg: FormGroup;
  
  posalji() {
    this.ref.close(this.fg.value)
  }

}
