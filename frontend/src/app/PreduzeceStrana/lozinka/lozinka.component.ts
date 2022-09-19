import { Component, OnInit } from '@angular/core';
import { LogovanjeService } from 'src/app/logovanje.service';
import { ProdavnicaService } from 'src/app/prodavnica.service';
import { Korisnik } from 'src/app/models/korisnik';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lozinka',
  templateUrl: './lozinka.component.html',
  styleUrls: ['./lozinka.component.css']
})
export class LozinkaComponent implements OnInit {

  constructor(private servis: LogovanjeService,
    private servisProd: ProdavnicaService,
    private notif: MatSnackBar,
    private router: Router) { }

    Korisnici: Korisnik[];

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('korisnik'));
    this.Korisnici = JSON.parse(localStorage.getItem('korisnici'));
    if(this.user.tip=="kupac"){
      this.kupac = true;
    }
  }

  kupac:boolean;

  staraSifra: string;
  novaSifra: string;
  novaSifra2: string;

  passwordRegex: RegExp;

  message: string;

  user: Korisnik;

  odjava() {
    
    localStorage.removeItem('korisnik');
  }

  promeniLozinku() {

    if (this.staraSifra == this.novaSifra) {
      this.notif.open("Nova lozinka ne može biti ista kao stara!", "OK");
      return;
    }
   
    if (this.novaSifra != this.novaSifra2) {
      this.notif.open("Lozinke se ne poklapaju!", "OK");
      return;
    }


    this.user.password = this.novaSifra;

      this.Korisnici.forEach(k => {
        if(k.username == this.user.username)
        {
          k.password = this.user.password;
        }
      });
      localStorage.setItem('korisnik', JSON.stringify(this.user));
      localStorage.setItem('korisnici', JSON.stringify(this.Korisnici));
      this.notif.open("Uspešno ste promenili lozinku!", "OK");
      this.router.navigate(['/login']);
      

  }

  odustani(){
    this.router.navigate(['/profil']);
  }

}
