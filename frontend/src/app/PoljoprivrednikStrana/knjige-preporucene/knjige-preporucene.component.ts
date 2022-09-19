import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Knjiga } from 'src/app/models/knjiga';
import { Korisnik } from 'src/app/models/korisnik';

@Component({
  selector: 'app-knjige-preporucene',
  templateUrl: './knjige-preporucene.component.html',
  styleUrls: ['./knjige-preporucene.component.css']
})
export class KnjigePreporuceneComponent implements OnInit {

  constructor(private router: Router) { }

  // Knjige: Knjiga[] = [
  //   {autor: "Chelsea Bieker", naziv: "Godshot", slika:"../../../assets/godshot.jpg", promocija:false},
  //   {autor: "Bonnie Tsui", naziv: "Why we swim", slika:"../../../assets/bonnie.jpg", promocija: true},
  //   {autor: "Andres Barba", naziv: "Luminous republic", slika:"../../../assets/andres.jpg", promocija: false}
  // ];

  // PreporuceneKnjige = [
  //   {knjiga: this.Knjige[0], preporucio_username:"ivan"},
  //   {knjiga: this.Knjige[1], preporucio_username:"stole"}
  // ]

  PreporuceneKnjige: Knjiga[];
  Korisnik:Korisnik;
  Preporucili: string[];

  ngOnInit(): void {
    this.Korisnik = JSON.parse(localStorage.getItem('korisnik'));
    this.PreporuceneKnjige = this.Korisnik.knjige;
    this.Preporucili = this.Korisnik.preporucili;
  }

  odjava() {
    localStorage.removeItem('korisnik');
  }

  detaljnoKnjiga(knjiga: any) {
    localStorage.setItem("selektovana_knjiga", JSON.stringify(knjiga));
    this.router.navigate(['/knjiga']);
  }
  

}
