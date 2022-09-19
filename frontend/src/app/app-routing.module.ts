import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './StartStrana/login/login.component';
import { RegistracijaComponent } from './StartStrana/registracija/registracija.component';
import { RegPreduzeceComponent } from './StartStrana/reg-preduzece/reg-preduzece.component';
import { RegPoljoprivrednikComponent } from './StartStrana/reg-poljoprivrednik/reg-poljoprivrednik.component';
import { KupacComponent } from './AdminStrana/kupac/kupac.component';
import { PoljoprivrednikComponent } from './PoljoprivrednikStrana/poljoprivrednik/poljoprivrednik.component';
import { PreduzeceComponent } from './PreduzeceStrana/preduzece/preduzece.component';
import { SifraComponent } from './PoljoprivrednikStrana/sifra/sifra.component';
import { DodajComponent } from './AdminStrana/dodaj/dodaj.component';
import { ObrisiComponent } from './AdminStrana/obrisi/obrisi.component';
import { DodajPoljComponent } from './AdminStrana/dodaj-polj/dodaj-polj.component';
import { DodajPredComponent } from './AdminStrana/dodaj-pred/dodaj-pred.component';
import { MagacinComponent } from './PoljoprivrednikStrana/magacin/magacin.component';
import { DodajRasadnikComponent } from './PoljoprivrednikStrana/dodaj-rasadnik/dodaj-rasadnik.component';
import { ProdavnicaComponent } from './PoljoprivrednikStrana/prodavnica/prodavnica.component';
import { KnjigaComponent } from './PoljoprivrednikStrana/knjiga/knjiga.component';
import { ProizvodiPreduzeceComponent } from './PreduzeceStrana/proizvodi-preduzece/proizvodi-preduzece.component';
import { DodajStepsComponent } from './PreduzeceStrana/dodaj-steps/dodaj-steps.component';
import { PoslovanjeComponent } from './PreduzeceStrana/poslovanje/poslovanje.component';
import { LozinkaComponent } from './PreduzeceStrana/lozinka/lozinka.component';
import { ProfilComponent } from './AdminStrana/profil/profil.component';
import { AzurirajPredComponent } from './AdminStrana/azuriraj-pred/azuriraj-pred.component';
import { KnjigePreporuceneComponent } from './PoljoprivrednikStrana/knjige-preporucene/knjige-preporucene.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'registracija/poljoprivrednik', component: RegPoljoprivrednikComponent},
  {path: 'registracija/preduzece', component: RegPreduzeceComponent},
  {path: 'kupac', component: KupacComponent},
  {path: 'poljoprivrednik', component: PoljoprivrednikComponent},
  {path: 'preduzece', component: PreduzeceComponent},
  {path: 'sifra', component: SifraComponent},
  {path: 'dodaj', component: DodajComponent},
  {path: 'obrisi', component: ObrisiComponent},
  {path: 'dodaj/poljoprivrednik', component: DodajPoljComponent},
  {path: 'dodaj/preduzece', component: DodajPredComponent},
  {path: 'magacin', component: MagacinComponent},
  {path: 'dodajRasadnik', component: DodajRasadnikComponent},
  {path: 'prodavnica', component: ProdavnicaComponent},
  {path: 'knjiga', component: KnjigaComponent},
  {path: 'proizvodiPreduzece', component: ProizvodiPreduzeceComponent},
  {path: 'dodajProizvodPreduzece', component: DodajStepsComponent},
  {path: 'poslovanje', component: PoslovanjeComponent},
  {path:'lozinka', component: LozinkaComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'azurirajPred', component: AzurirajPredComponent},
  {path: 'knjige-preporucene', component: KnjigePreporuceneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
