import { Component, OnInit } from '@angular/core';
import { LogovanjeService } from '../../logovanje.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KORISNICI } from 'src/app/data/KORISNICI';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servis: LogovanjeService, private router: Router,
    private notif:MatSnackBar) { }

  ngOnInit(): void {
    if(localStorage.getItem('korisnici')==null){
      localStorage.setItem('korisnici',
      JSON.stringify(KORISNICI));
    }
  }

  username: string;
  password: string;
  user: any;

  login(): void{

    
    let korisnici = JSON.parse(localStorage.
      getItem('korisnici'));
      korisnici.forEach(korisnik => {
        if(korisnik.username==this.username
          && korisnik.password==this.password){
              localStorage.setItem('korisnik', JSON.stringify(korisnik));
               if(korisnik.tip=="kupac"){
                 this.router.navigate(['/kupac']);
               }
               else{
                 this.router.navigate(['/kupac']);
               }
          }
      });    
  }



}
