import { Knjiga } from "./knjiga";

export interface Korisnik {
    ime: string,
    prezime: string,
    email: string,
    telefon: string,
    username: string,
    password: string,
    tip: string,
    knjige: Knjiga[],
    preporucili: string[]
}