import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const Videogames = [
    {name:'The Legend of Zelda: Breath of the Wild',img:'assets\\img\\ZeldaBOTW.png',id:1,year:2017,company:'Nintendo'},
    {name:'Super Mario World',img:'assets\\img\\Super_Mario_World.png',id:2,year:1990,company:'Nintendo'},
    {name:'Portal 2',img:'assets\\img\\Portal2.png',id:3,year:2011,company:'Valve'},
    {name:'The Legend of Zelda: A Link to the Past',img:'assets\\img\\ZeldaALTTP.png',id:4,year:1991,company:'Nintendo'},
    {name:'Super Metroid',img:'assets\\img\\SuperMetroid.png',id:5,year:1994,company:'Nintendo'},
    {name:'Mass Effect 2',img:'assets\\img\\MassEffect2.png',id:6,year:2010,company:'BioWare'},
    {name:'Super Mario 64',img:'assets\\img\\SuperMario64.png',id:7,year:1996,company:'Nintendo'},
    {name:'Red Dead Redemption 2',img:'assets\\img\\RDR2.png',id:8,year:2018,company:'Rockstar'},
    {name:'Half-Life 2',img:'assets\\img\\HL2.png',id:9,year:2004,company:'Valve'},
    {name:'Disco Elysium',img:'assets\\img\\DiscoElysium.png',id:10,year:2019,company:'ZA/UM'},
    {name:'Super Mario Bros. 3',img:'assets\\img\\SuperMario3.png',id:11,year:1988,company:'Nintendo'},
    {name:'Grand Theft Auto V',img:'assets\\img\\GTAV.png',id:12,year:2013,company:'Rockstar'},
    {name:'Hades',img:'assets\\img\\Hades.png',id:13,year:2020,company:'Supergiant Games'},
    {name:'Castlevania: Symphony of the Night',img:'assets\\img\\CastlevaniaSOTN.png',id:14,year:1997,company:'Konami'},
    {name:'Halo 2',img:'assets\\img\\Halo2.png',id:15,year:2004,company:'Bungie'},
    {name:'The Witcher 3: Wild Hunt',img:'assets\\img\\TheWitcher3.png',id:16,year:2015,company:'Projekt RED'},
    {name:'The Last of Us',img:'assets\\img\\TheLastOfUs.png',id:17,year:2013,company:'Naughty Dog'},
    {name:'BioShock',img:'assets\\img\\BioShock.png',id:18,year:2007,company:'Irrational Games'},
    {name:'Bloodborne',img:'assets\\img\\bloodborne.png',id:19,year:2015,company:'From Software'},
    {name:'Undertale',img:'assets\\img\\undertale.png',id:20,year:2015,company:'Toby Fox'}
    ];
    return {Videogames};
  }
}
