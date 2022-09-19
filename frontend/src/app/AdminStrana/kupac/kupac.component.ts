import { Component, OnInit } from '@angular/core';
import { RegistrovanjeService } from '../../registrovanje.service';
import { Poljoprivrednik } from '../../models/poljoprivrednik';
import { Preduzece } from '../../models/preduzece';
import { Knjiga } from 'src/app/models/knjiga';
import { Router } from '@angular/router';
import { KNJIGE } from 'src/app/data/KNJIGE';
import { Korisnik } from 'src/app/models/korisnik';
import { DialogDodajKnjiguService } from 'src/app/dialog-dodaj-knjigu.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  constructor(private router:Router,
    private dialogKnjigaServis: DialogDodajKnjiguService) { 
   
  }

  Knjige: Knjiga[];
  Korisnik: Korisnik;
  kupac:boolean;
  PrikaziKnjige: Knjiga[];

  ngOnInit(): void {

    
    if(localStorage.getItem('knjige') == null) {
      localStorage.setItem('knjige', JSON.stringify(KNJIGE));
    }
    
  this.Knjige = JSON.parse(localStorage.getItem('knjige'));

    this.Korisnik = JSON.parse(localStorage.getItem('korisnik'));

    if(this.Korisnik.tip == "kupac"){
      this.kupac = true;
    }

    this.PrikaziKnjige = this.Knjige;
  }

  odjava() {
    localStorage.removeItem('korisnik');
  }

  detaljnoKnjiga(knjiga) {
    localStorage.setItem("selektovana_knjiga", JSON.stringify(knjiga));
    this.router.navigate(['/knjiga']);
  }

  naslov:string;
  autor:string;

  filter(){

    if((this.autor == undefined && this.naslov == undefined) || (this.autor == "" && this.naslov == "")
    || (this.autor == "" && this.naslov == undefined) || (this.autor == undefined && this.naslov == "")){
      this.PrikaziKnjige = this.Knjige;
      return;
    }

    this.PrikaziKnjige = this.Knjige.filter(k => {
      let autor = k.autor.split(" ");
      let exists = false;
      
      if(this.autor != undefined && this.autor != "") {
        autor.forEach(deo_imena_autora => {
          if(deo_imena_autora.toLowerCase() == this.autor.toLowerCase()){
            exists = true;
          }
        }); 
        if(k.autor.toLowerCase() == this.autor.toLowerCase()){
          exists = true;
        }
      }
      if(this.naslov != undefined && this.naslov != ""){
        if(k.naslov.toLowerCase() == this.naslov.toLowerCase()){
          exists = true;
         }
      }
      return exists;      
    })
  }




  dodajKnjigu(){
    this.dialogKnjigaServis.openConfirmDialog().afterClosed().subscribe(
      value => {
        if (value != false) {
          var knjiga = {
            naslov: value.naslov,
            slika:value.slika,
            autor:value.autor,
            opis:value.opis,
            godinaIzdanja: value.godinaIzdanja,
            brojStrana: value.brojStrana,
            promocija:false,
            komentari:[]
          }
          this.Knjige.push(knjiga);
          localStorage.setItem('knjige', JSON.stringify(this.Knjige));
        }
      }
    )
  }

}

