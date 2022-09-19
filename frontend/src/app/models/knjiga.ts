import { Komentar } from "./komentar";

export interface Knjiga {
    slika: String;
    naslov: String;
    autor: String;
    opis: String,
    godinaIzdanja: number,
    brojStrana: number,
    promocija: boolean,
    komentari: Komentar[]
}