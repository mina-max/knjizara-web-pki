import { Component, OnInit } from '@angular/core';
import { RegistrovanjeService } from 'src/app/registrovanje.service';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  korisnik:Korisnik;
  Korisnici:Korisnik[];

  kupac:boolean;


  constructor(private servis: RegistrovanjeService,
    private router: Router) { }

    ngOnInit(): void {
      this.korisnik = JSON.parse(localStorage.getItem('korisnik'));
      this.Korisnici = JSON.parse(localStorage.getItem('korisnici'));
     
      this.ime = this.korisnik.ime;
      this.prezime = this.korisnik.prezime;
      this.username = this.korisnik.username;
      this.telefon = this.korisnik.telefon;
      this.email = this.korisnik.email;

      if(this.korisnik.tip == "kupac"){
        this.kupac = true;
      }
    }

    ime: string;
    prezime: string;
    username: string;
    mesto: string;
    telefon: string;
    email: string;
   
  
    signup() {
      this.korisnik.ime = this.ime;
      this.korisnik.prezime = this.prezime;
      this.korisnik.telefon = this.telefon;
      this.korisnik.email = this.email;

      this.Korisnici.forEach(k => {
        if(k.username == this.korisnik.username)
        {
          k.ime = this.korisnik.ime;
          k.prezime = this.korisnik.prezime;
          k.telefon = this.korisnik.telefon;
          k.email = this.korisnik.email;
        }
      });
      localStorage.setItem('korisnik', JSON.stringify(this.korisnik));
      localStorage.setItem('korisnici', JSON.stringify(this.Korisnici));
      this.router.navigate(['/profil']);
    }

  odjava() {
    localStorage.removeItem('korisnik');
  }

  promeniLozinku(){
    this.router.navigate(['/lozinka']);
  }


}
