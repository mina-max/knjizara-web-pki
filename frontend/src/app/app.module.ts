import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './StartStrana/login/login.component';
import { RegistracijaComponent } from './StartStrana/registracija/registracija.component';
import { RegPreduzeceComponent } from './StartStrana/reg-preduzece/reg-preduzece.component';
import { PoljoprivrednikComponent } from './PoljoprivrednikStrana/poljoprivrednik/poljoprivrednik.component';
import { RegPoljoprivrednikComponent } from './StartStrana/reg-poljoprivrednik/reg-poljoprivrednik.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KupacComponent } from './AdminStrana/kupac/kupac.component';
import { PreduzeceComponent } from './PreduzeceStrana/preduzece/preduzece.component';
import { SifraComponent } from './PoljoprivrednikStrana/sifra/sifra.component';
import { DodajComponent } from './AdminStrana/dodaj/dodaj.component';
import { ObrisiComponent } from './AdminStrana/obrisi/obrisi.component';
import { DodajPoljComponent } from './AdminStrana/dodaj-polj/dodaj-polj.component';
import { DodajPredComponent } from './AdminStrana/dodaj-pred/dodaj-pred.component';
import { MagacinComponent } from './PoljoprivrednikStrana/magacin/magacin.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DodajRasadnikComponent } from './PoljoprivrednikStrana/dodaj-rasadnik/dodaj-rasadnik.component';
import { MatConfirmDialogComponent } from './PoljoprivrednikStrana/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProdavnicaComponent } from './PoljoprivrednikStrana/prodavnica/prodavnica.component';
import { KnjigaComponent } from './PoljoprivrednikStrana/knjiga/knjiga.component';
import { KomentarComponent } from './PoljoprivrednikStrana/komentar/komentar.component';
import { KorpaComponent } from './PoljoprivrednikStrana/korpa/korpa.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip'
import { ConfirmDialogComponent } from './PreduzeceStrana/confirm-dialog/confirm-dialog.component';
import { ProizvodiPreduzeceComponent } from './PreduzeceStrana/proizvodi-preduzece/proizvodi-preduzece.component';
import { DodajStepsComponent } from './PreduzeceStrana/dodaj-steps/dodaj-steps.component'
import {MatStepperModule} from '@angular/material/stepper'
import {MatFormFieldModule, } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { PoslovanjeComponent } from './PreduzeceStrana/poslovanje/poslovanje.component';
import { LozinkaComponent } from './PreduzeceStrana/lozinka/lozinka.component';
import { ProfilComponent } from './AdminStrana/profil/profil.component';
import { AzurirajPredComponent } from './AdminStrana/azuriraj-pred/azuriraj-pred.component';
import {MatTableModule} from '@angular/material/table';
import { PreporuciKnjiguComponent } from './PoljoprivrednikStrana/preporuci-knjigu/preporuci-knjigu.component';
import { KnjigePreporuceneComponent } from './PoljoprivrednikStrana/knjige-preporucene/knjige-preporucene.component';
import { DodajKnjiguComponent } from './PoljoprivrednikStrana/dodaj-knjigu/dodaj-knjigu.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracijaComponent,
    RegPreduzeceComponent,
    PoljoprivrednikComponent,
    RegPoljoprivrednikComponent,
    KupacComponent,
    PreduzeceComponent,
    SifraComponent,
    DodajComponent,
    ObrisiComponent,
    DodajPoljComponent,
    DodajPredComponent,
    MagacinComponent,
    DodajRasadnikComponent,
    MatConfirmDialogComponent,
    ProdavnicaComponent,
    KnjigaComponent,
    KomentarComponent,
    KorpaComponent,
    ConfirmDialogComponent,
    ProizvodiPreduzeceComponent,
    DodajStepsComponent,
    PoslovanjeComponent,
    LozinkaComponent,
    ProfilComponent,
    AzurirajPredComponent,
    PreporuciKnjiguComponent,
    KnjigePreporuceneComponent,
    DodajKnjiguComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
