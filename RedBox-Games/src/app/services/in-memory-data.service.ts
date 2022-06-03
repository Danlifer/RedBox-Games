import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const Videogames = [
    {name:'The Legend of Zelda: Breath of the Wild',img:'assets\\img\\ZeldaBOTW.png',id:1},
    {name:'Super Mario World',img:'assets\\img\\Super_Mario_World.png',id:2},
    {name:'Portal 2',img:'assets\\img\\Portal2.png',id:3},
    {name:'The Legend of Zelda: A Link to the Past',img:'assets\\img\\ZeldaALTTP.png',id:4},
    {name:'Super Metroid',img:'assets\\img\\SuperMetroid.png',id:5},
    {name:'Mass Effect 2',img:'assets\\img\\MassEffect2.png',id:6},
    {name:'Super Mario 64',img:'assets\\img\\SuperMario64.png',id:7},
    {name:'Red Dead Redemption 2',img:'assets\\img\\RDR2.png',id:8},
    {name:'Half-Life 2',img:'assets\\img\\HL2.png',id:9},
    {name:'Disco Elysium',img:'assets\\img\\DiscoElysium.png',id:10},
    {name:'Super Mario Bros. 3',img:'assets\\img\\SuperMario3.png',id:11},
    {name:'Grand Theft Auto V',img:'assets\\img\\GTAV.png',id:12},
    {name:'Hades',img:'assets\\img\\Hades.png',id:13},
    {name:'Castlevania: Symphony of the Night',img:'assets\\img\\CastlevaniaSOTN.png',id:14},
    {name:'Halo 2',img:'assets\\img\\Halo2.png',id:15},
    {name:'The Witcher 3: Wild Hunt',img:'assets\\img\\TheWitcher3.png',id:16},
    {name:'The Last of Us',img:'assets\\img\\TheLastOfUs.png',id:17},
    {name:'BioShock',img:'assets\\img\\BioShock.png',id:18},
    {name:'Bloodborne',img:'assets\\img\\bloodborne.png',id:19},
    {name:'Undertale',img:'assets\\img\\undertale.png',id:20}
    ];
    return {Videogames};
  }
}
