import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const Videogames = [
    {name:'The Legend of Zelda: Breath of the Wild',img:'assets\\img\\ZeldaBOTW.png',id:1,year:2017,company:'Nintendo', 
      detail: 'The game is an installment of The Legend of Zelda series and is set at the end of its timeline. The player controls an amnesiac Link, who awakens from a hundred-year slumber, and attempts to regain his memories and prevent the destruction of Hyrule by Calamity Ganon.'},
    {name:'Super Mario World',img:'assets\\img\\Super_Mario_World.png',id:2,year:1990,company:'Nintendo',
      detail: 'Super Mario World is a 1990 platform game developed by Nintendo for the Super Nintendo Entertainment System (SNES). The story follows Mario is quest to save Princess Toadstool and Dinosaur Land from the series antagonist Bowser and his minions, the Koopalings.'},
    {name:'Portal 2',img:'assets\\img\\Portal2.png',id:3,year:2011,company:'Valve',
      detail: 'Portal 2 is the sequel to the award winning and hugely successful Portal developed by Valve Corporation. It features a single-player story set after the events of Portal is story; and a brand-new Co-op game mode, featuring additional test chambers designed specifically for Co-operative play. '},
    {name:'The Legend of Zelda: A Link to the Past',img:'assets\\img\\ZeldaALTTP.png',id:4,year:1991,company:'Nintendo',
      detail: 'A Link to the Past is a distant prequel to the original The Legend of Zelda and Zelda II: The Adventure of Link, and within the official chronology is the first game in the "Defeated Hero" timeline that connects to an alternate reality scenario that the Hero of Time does not succeed in Ocarina of Time.'},
    {name:'Super Metroid',img:'assets\\img\\SuperMetroid.png',id:5,year:1994,company:'Nintendo',
      detail: 'Super Metroid is the third installment in the Metroid series. With its 24-megabit (3 megabyte) cartridge size, it was the largest video game on the Super Nintendo at the time of its release. It is a 2D "Metroidvania" platform video game with action and adventure elements.'},
    {name:'Mass Effect 2',img:'assets\\img\\MassEffect2.png',id:6,year:2010,company:'BioWare',
      detail: 'Mass Effect 2 is an action role-playing video game developed by BioWare and published by Electronic Arts for Microsoft Windows and Xbox 360 in 2010, and for PlayStation 3 in 2011. It is the second installment in the Mass Effect series and a sequel to the original Mass Effect.'},  
    {name:'Super Mario 64',img:'assets\\img\\SuperMario64.png',id:7,year:1996,company:'Nintendo',
      detail: 'Super Mario 64 is a 3D platformer game released for the Nintendo 64 in 1996 for Japan and North America and in 1997 for Europe and Australia. This game was one of two (three in Japan) launch titles for the Nintendo 64, along with Pilotwings 64, which helped drive initial sales of the console. Since its release, Super Mario 64 has been widely acclaimed as one of the greatest and most important games of all time. The above text is from the Super Mario Wiki and is available under a Creative Commons license. Attribution must be provided through a list of authors or a link back to the original article.'},
    {name:'Red Dead Redemption 2',img:'assets\\img\\RDR2.png',id:8,year:2018,company:'Rockstar',
      detail: 'The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, in a fictionalized representation of the Western, Midwestern, and Southern United States.'},
    {name:'Half-Life 2',img:'assets\\img\\HL2.png',id:9,year:2004,company:'Valve',
      detail: 'Like the original Half-Life (1998), Half-Life 2 combines shooting, puzzles, and storytelling, and adds features such as vehicles and physics-based gameplay. Players control Gordon Freeman as he joins a resistance movement to liberate the Earth from the control of an alien empire, the Combine.'},
    {name:'Disco Elysium',img:'assets\\img\\DiscoElysium.png',id:10,year:2019,company:'ZA/UM',
      detail: 'Disco Elysium is a 2019 role-playing video game by ZA/UM. Inspired by Infinity Enginera games, particularly Planescape: Torment, the game was written and designed by Estonian novelist Robert Kurvitz and features a distinctive oil painting art style with music by the English band Sea Power.'},
    {name:'Super Mario Bros. 3',img:'assets\\img\\SuperMario3.png',id:11,year:1988,company:'Nintendo',
      detail: 'Super Mario Bros. 3 is a platform action-adventure game for the Famicom and NES and is the fourth installment in the Super Mario series. It was released for consoles in Japan on October 23, 1988, in North America on February 12, 1990, and in Europe and Australia on August 29, 1991. Prior to its North American release on the NES, Super Mario Bros. 3 was ported to the Nintendo PlayChoice-10.[6] The first game in the series since Super Mario Bros. to not derive its gameplay from another game, Super Mario Bros. 3 retains the same level-based platformer mechanics of previous titles. The above text is from the Super Mario Wiki and is available under a Creative Commons license. Attribution must be provided through a list of authors or a link back to the original article.'},  
    {name:'Grand Theft Auto V',img:'assets\\img\\GTAV.png',id:12,year:2013,company:'Rockstar',
      detail: 'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world.'},
    {name:'Hades',img:'assets\\img\\Hades.png',id:13,year:2020,company:'Supergiant Games',
      detail: 'Hades is a roguelike game from Supergiant Games, creators of Bastion, Transistor, and Pyre. You play as Zagreus, immortal son of Hades, on his quest to escape from the underworld, fighting through many angry lost souls along the way.'},
    {name:'Castlevania: Symphony of the Night',img:'assets\\img\\CastlevaniaSOTN.png',id:14,year:1997,company:'Konami',
      detail: 'Castlevania is an American adult animated dark fantasy action streaming television series made for the streaming service Netflix and is produced by Frederator Studios Kevin Kolde and Fred Seibert.'},
    {name:'Halo 2',img:'assets\\img\\Halo2.png',id:15,year:2004,company:'Bungie',
      detail: 'Halo 2 is the second installment in the Halo franchise and the sequel to 2001 critically acclaimed Halo: Combat Evolved. The game features new weapons, enemies, and vehicles, and shipped with online multiplayer via Microsoft is Xbox Live service.'},
    {name:'The Witcher 3: Wild Hunt',img:'assets\\img\\TheWitcher3.png',id:16,year:2015,company:'Projekt RED',
      detail: 'The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims.'},  
    {name:'The Last of Us',img:'assets\\img\\TheLastOfUs.png',id:17,year:2013,company:'Naughty Dog',
      detail: 'The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective.'},  
    {name:'BioShock',img:'assets\\img\\BioShock.png',id:18,year:2007,company:'Irrational Games',
      detail: 'BioShock is a first-person shooter with role-playing game customization and stealth elements, and is similar to System Shock 2. The player takes the role of Jack as he is guided through Rapture towards various objectives. The player collects multiple weapons and plasmids as they work their way through enemy forces.'},
    {name:'Bloodborne',img:'assets\\img\\bloodborne.png',id:19,year:2015,company:'From Software',
      detail: 'Bloodborne follows the player is character, a Hunter, through the decrepit Gothic, Victorian-era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease. Attempting to find the source of the plague, the player is character unravels the city is mysteries while fighting beasts and cosmic beings.'},
    {name:'Undertale',img:'assets\\img\\undertale.png',id:20,year:2015,company:'Toby Fox',
      detail: 'Undertale is a role-playing game that uses a top-down perspective. In the game, the player controls a child and completes objectives in order to progress through the story. Players explore an underground world filled with towns and caves, and are required to solve numerous puzzles on their journey.'},
    ];
    return {Videogames};
  }
}
