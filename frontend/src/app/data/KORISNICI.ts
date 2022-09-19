import { Korisnik } from '../models/korisnik';
import { KNJIGE } from './KNJIGE';

export const KORISNICI: Korisnik[] = [
    {ime: "Mirjana", prezime: "Radosavljevic", email: "radosavljevic4m@gmail.com",
    telefon:"061/243-9899", username:"mina", password: "mina", 
    tip:"kupac", knjige: [KNJIGE[0], KNJIGE[1]], preporucili:["ivan", "olja"]},
    {ime: "Ivan", prezime: "Kukrkic", email: "kukrka99@gmail.com",
    telefon:"061/243-9899",username:"ivan", password: "ivan",
    tip:"kupac",knjige: [KNJIGE[1]], preporucili:["olja"]},
    {ime: "Olivera", prezime: "Krnjajic", email: "krnjaja@gmail.com",
    telefon:"061/243-9899",username:"olja", password: "olja",
    tip:"kupac", knjige: [KNJIGE[2]], preporucili:["mina"]},
    {ime: "Uros", prezime: "Stokovic", email: "stole_svi_me_vole@gmail.com",
    telefon:"061/243-9899",username:"stole", password: "stole",
    tip:"prodavac", knjige: [], preporucili:[]}
]