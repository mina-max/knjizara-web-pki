import { Knjiga } from "../models/knjiga";
import { KOMENTARI } from "./KOMENTARI";

export const KNJIGE: Knjiga[] = [
    {autor: "Chelsea Bieker", naslov: "Godshot", slika:"../../../assets/godshot.jpg", promocija:false,
    opis:"Suša je obuzela grad Peaches u Kaliforniji. Oblast Centralne doline u kojoj žive četrnaestogodišnja Lejsi Mej i njena majka alkoholičarka nekada je bila poljoprivredni raj. Sada je to ekološka katastrofa, mesto napuknute zemlje i neplodnih farmi grožđa. U svom očaju, stanovnici su se za savet obratili vođi kulta po imenu Pastor Vern. On obećava, kroz tajne „zadatke“, da će doneti kišu za koju se svi mole.", 
    godinaIzdanja:2020, brojStrana:336, komentari: [KOMENTARI[0], KOMENTARI[1]]},
    {autor: "Bonnie Tsui", naslov: "Why we swim", slika:"../../../assets/bonnie.jpg", promocija: true,
    opis:"Plivamo u ledenim vodama Arktika i rekama prepunim pirana da bismo testirali svoje granice. Plivamo iz zadovoljstva, za vežbanje, za lečenje. Ali ljudi, za razliku od drugih životinja koje privlači voda, nisu prirodno rođeni plivači. Moramo biti naučeni. Naši evolucioni preci su učili za preživljavanje; sada, u dvadeset prvom veku, plivanje je jedna od najpopularnijih aktivnosti na svetu.", 
    godinaIzdanja:2020, brojStrana:288, komentari:[]},
    {autor: "Andres Barba", naslov: "Luminous republic", slika:"../../../assets/andres.jpg", promocija: false,
    opis:"San Kristobal je bio neupadljiv grad - mali, tek prosperitetni, okružen kišnom šumom i rekom. Ali onda su stigla deca. Niko nije znao odakle su došli: trideset dvoje dece, naizgled rođenih iz džungle, govore nepoznatim jezikom. U početku su sakupljali, krali hranu i novac i bežali na drveće. Ali njihovi prestupi su eskalirali u nasilje, a onda su deca iz grada počela da beže da im se pridruže. Suočene sa potpunim kolapsom, opštinske snage kreću u lov da pronađu decu pre nego što grad zapadne u nepopravljivi haos.", 
    godinaIzdanja:2020, brojStrana:208, komentari:[]}
  ];