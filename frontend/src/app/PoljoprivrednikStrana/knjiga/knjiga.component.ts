import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { ProdavnicaService } from 'src/app/prodavnica.service';
import { DialogKomentarService } from 'src/app/dialog-komentar.service';
import { DialogKorpaService } from 'src/app/dialog-korpa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Komentar } from 'src/app/models/komentar';
import { DialogPreporuciKnjiguService } from 'src/app/dialog-preporuci-knjigu.service';
import { Knjiga } from 'src/app/models/knjiga';
import {KOMENTARI} from 'src/app/data/KOMENTARI';

@Component({
  selector: 'app-knjiga',
  templateUrl: './knjiga.component.html',
  styleUrls: ['./knjiga.component.css']
})
export class KnjigaComponent implements OnInit {

  constructor(private servis: ProdavnicaService,
    private dialogServis: DialogKomentarService,
    private dialogServ: DialogKorpaService,
    private notif: MatSnackBar,
    private router: Router,
    private dialogKnjigaServis:DialogPreporuciKnjiguService) { }

  kupac: boolean;

  Komentari:Komentar[];

  ngOnInit(): void {
    this.kupac = false;
    this.Korisnik = JSON.parse(localStorage.getItem('korisnik'));
    if (localStorage.getItem('selektovana_knjiga') != null) {
      this.knjiga = JSON.parse(localStorage.getItem('selektovana_knjiga'));
    }

    this.Komentari = this.knjiga.komentari;
       
    this.ocena = 0;

        this.Komentari.forEach(k => {
          if (k.username == this.Korisnik.username) {
            this.komentarisao = true;
          }
          this.ocena = this.ocena + k.ocena;
        });
        if(this.Komentari.length != 0) {
          this.ocena = this.ocena / this.Komentari.length;
        }
        

      

      if(this.Korisnik.tip == "kupac"){
        this.kupac = true;
      }

  }
  ocena:any;
  Korisnik: Korisnik;
  knjiga: Knjiga;

  odjava() {
    
    localStorage.removeItem('korisnik');
  }

  kom: any;
  komentarisao: boolean;
  narucivao: boolean;

  dodajKomentar() {

    this.dialogServis.openConfirmDialog().afterClosed().subscribe(
      value => {
        if (value != false) {
          var d = new Date();
          var kom = {
            tekst: value.kom,
            ocena: value.ocena,
            username: this.Korisnik.username,
            datum: d.toLocaleDateString()
          }
          this.Komentari.push(kom);
          this.komentarisao = true;
          this.ocena = 0;
          this.Komentari.forEach(k => {
            this.ocena = this.ocena + k.ocena;
          });
          if(this.Komentari.length != 0) {
            this.ocena = this.ocena / this.Komentari.length;
          }

          this.knjiga.komentari = this.Komentari;

          localStorage.setItem('selektovana_knjiga', JSON.stringify(this.knjiga));

          this.Knjige = JSON.parse(localStorage.getItem('knjige'));
          this.Knjige.forEach(knjiga => {
            if(knjiga.naslov == this.knjiga.naslov){
              knjiga.komentari = this.Komentari;
            }
          });
          localStorage.setItem("knjige", JSON.stringify(this.Knjige));

        }
      }
    )
  }

  obrisiKomentar(){
    var myKom;
    this.Komentari.forEach(kom => {
      if(kom.username == this.Korisnik.username){
        myKom = kom;
      }
    });
    const index = this.Komentari.indexOf(myKom,0);
    if (index > -1) {
      this.Komentari.splice(index, 1);
   }

    this.komentarisao = false;
    this.ocena = 0;
    this.Komentari.forEach(k => {
      this.ocena = this.ocena + k.ocena;
    });
     if(this.Komentari.length != 0) {
      this.ocena = this.ocena / this.Komentari.length;
    }

    localStorage.setItem('selektovana_knjiga', JSON.stringify(this.knjiga));

    this.Knjige = JSON.parse(localStorage.getItem('knjige'));
    this.Knjige.forEach(knjiga => {
      if(knjiga.naslov == this.knjiga.naslov){
        knjiga.komentari = this.Komentari;
      }
    });
    localStorage.setItem("knjige", JSON.stringify(this.Knjige));

  }

  preporuciKnjigu(){
    
    this.dialogKnjigaServis.openConfirmDialog().afterClosed().subscribe(
      value => {
        if(value != false){
          var i = 0;
          var exists = false;
          var username = value.username;
          this.Korisnici = JSON.parse(localStorage.getItem('korisnici'));
          this.Korisnici.forEach(korisnik => {
            if(korisnik.username == username)
            {
              korisnik.knjige.forEach(knjiga => {
                if(!exists)
                {
                  i = i+1;
                }
               
                if(knjiga.naslov == this.knjiga.naslov)
                {
                  exists = true;
                  return;
                }
              });
              if(!exists)
              {
                korisnik.knjige.push(this.knjiga);
                korisnik.preporucili.push(this.Korisnik.username);
              }
              else if(korisnik.preporucili[i-1] != this.Korisnik.username){
                let p = korisnik.preporucili[i-1].concat(", ", this.Korisnik.username);
                korisnik.preporucili[i-1] = p;
              }
            }
          });
          localStorage.setItem('korisnici', JSON.stringify(this.Korisnici));
        }
      }
    )
  }

  Korisnici: Korisnik[];

  Knjige: Knjiga[];

  staviNaPromociju(){
    this.Knjige = JSON.parse(localStorage.getItem('knjige'));
    this.knjiga = JSON.parse(localStorage.getItem("selektovana_knjiga"))
    this.Knjige.forEach(k => {
      if(k.naslov == this.knjiga.naslov){
        k.promocija = true;
      }
    });
    
    this.knjiga.promocija = true;
    localStorage.setItem('selektovana_knjiga', JSON.stringify(this.knjiga));
    localStorage.setItem('knjige', JSON.stringify(this.Knjige));
  }
 
}