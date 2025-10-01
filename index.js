let className = ["scout", "soldier", "pyro", "demoman", "heavy", "engineer", "medic", "sniper", "spy"];

let scoutPrimary = ["Scattergun","Force-A-Nature","Shortstop","Soda Popper","Baby Face's Blaster", "Back Scatter"]
let scoutSecondary = ["Pistol","Lugermorph","C.A.P.P.E.R","Winger","Pretty Boy's Pocket Pistol","Flying Guillotine","Bonk! Atomic Punch","Crit-a-Cola","Mad Milk","Mutated Milk"]
let scoutMelee = ["Bat","Holy Mackerel","Unarmed Combat","Batsaber","Sandman","Candy Cane","Boston Basher","Three-Rune Blade","Sun-on-a-Stick","Fan O'War","Atomizer","Wrap Assassin"]

let soldierPrimary = ["Rocket Launcher","Original","Direct Hit","Black Box","Rocket Jumper","Liberty Launcher","Cow Mangler 5000","Beggar's Bazooka","Air Strike"]
let soldierSecondary = ["Shotgun","Reserve Shooter","Buff Banner","Gunboats","Battalion's Backup","Concheror","Mantreads","Righteous Bison","B.A.S.E. Jumper","Panic Attack"]
let soldierMelee = ["Shovel","Equalizer","Pain Train","Half-Zatoichi","Disciplinary Action","Market Gardener","Escape Plan"]

let pyroPrimary = ["Flame Thrower", "Rainblower","Nostromo Napalmer","Backburner","Degreaser","Phlogistinator","Dragon's Fury"];
let pyroSecondary = ["Shotgun","Reserve Shooter","Flare Gun","Detonator","Manmelter","Scorch Shot","Panic Attack","Thermal Thruster","Gas Passer"]
let pyroMelee = ["Fire Axe","Lollichop","Axtinguisher","Postal Pummeler","Homewrecker","Maul","Powerjack","Back Scratcher","Sharpened Volcano Fragment","Third Degree","Neon Annihilator","Hot Hand"]

let demoPrimary = ["Grenade Launcher","Loch-n-Load","Ali Baba's Wee Booties","Bootlegger","Loose Cannon","Iron Bomber"]
let demoSecondary = ["B.A.S.E. Jumper","Stickybomb Launcher","Scottish Resistance","Chargin' Targe","Sticky Jumper","Splendid Screen","Tide Turner","Quickiebomb Launcher"]
let demoMelee = ["Bottle","Scottish Handshake","Eyelander","Horseless Headless Horsemann's Headtaker","Nessie's Nine Iron","Scotsman's Skullcutter","Pain Train","Ullapool Caber","Claidheamh Mòr","Half-Zatoichi","Persian Persuader"]

let heavyPrimary = ["Minigun","Iron Curtain","Natascha","Brass Beast","Tomislav","Huo-Long Heater"]
let heavySecondary = ["Shotgun","Family Business","Sandvich","Robo-Sandvich","Dalokohs Bar","Fishcake","Buffalo Steak Sandvich","Panic Attack","Second Banana"]
let heavyMelee = ["Fists", "Apoco-Fists", "Killing Gloves of Boxing","Gloves of Running Urgently","Bread Bite","Warrior's Spirit","Fists of Steel","Eviction Notice","Holiday Punch"]

let engiPrimary = ["Shotgun","Frontier Justice","Widowmaker","Pomson 6000","Rescue Ranger","Panic Attack"]
let engiSecondary = ["Pistol","Lugermorph","C.A.P.P.E.R","Wrangler","Giger Counter","Short Circuit"]
let engiMelee = ["Wrench","Golden Wrench","Gunslinger","Southern Hospitality","Jag","Eureka Effect"]

let medicPrimary = ["Syringe Gun","Blutsauger","Crusader's Crossbow","Overdose"]
let medicSecondary = ["Medi Gun","Kritzkrieg","Quick-Fix","Vaccinator"]
let medicMelee = ["Bonesaw","Ubersaw","Vita-Saw","Amputator","Solemn Vow"]

let sniperPrimary = ["Sniper Rifle","AWPer Hand","Huntsman","Fortified Compound","Sydney Sleeper","Bazaar Bargain","Machina","Shooting Star","Hitman's Heatmaker","Classic"]
let sniperSecondary = ["SMG","Cleaner's Carbine","Jarate","Self-Aware Beauty Mark","Razorback","Darwin's Danger Shield","Cozy Camper"]
let sniperMelee = ["Kukri","Tribalman's Shiv","Bushwacka","Shahanshah","Fortified Compound"]

let spyPrimary = ["Revolver","Big Kill","Ambassador","L'Etranger","Enforcer","Diamondback"]
let spySecondary = ["Sapper","Ap-Sap","Snack Attack","Red-Tape Recorder"]
let spyMelee = ["Knife","Sharp Dresser","Black Rose","Your Eternal Reward","Wanga Prick","Conniver's Kunai","Big Earner"]
let spyWatch = ["Invis Watch","Enthusiast's Timepiece","Quäckenbirdt","Cloak and Dagger","Dead Ringer"]

let Primary;
let Secondary;
let Melee;
let Watch;

const imageFolder = "Images/";

function isEmbed(isEmbed){
    switch (document.getElementById("embedChecker").innerHTML) {
        case "index":
            return false;
            break;
        case "embed":
            return true;
            break;
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * (max));
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function getLoadout(Class){
    Watch = ""
    switch (Class) {
        case "scout":
            Primary = scoutPrimary[getRandomInt(scoutPrimary.length)];
            Secondary = scoutSecondary[getRandomInt(scoutSecondary.length)];
            Melee = scoutMelee[getRandomInt(scoutMelee.length)];
            break;
        case "soldier":
            Primary = soldierPrimary[getRandomInt(soldierPrimary.length)];
            Secondary = soldierSecondary[getRandomInt(soldierSecondary.length)];
            Melee = soldierMelee[getRandomInt(soldierMelee.length)];
            break;
        case "pyro":
            Primary = pyroPrimary[getRandomInt(pyroPrimary.length)];
            Secondary = pyroSecondary[getRandomInt(pyroSecondary.length)];
            Melee = pyroMelee[getRandomInt(pyroMelee.length)];
            break;
        case "demoman":
            Primary = demoPrimary[getRandomInt(demoPrimary.length)];
            Secondary = demoSecondary[getRandomInt(demoSecondary.length)];
            Melee = demoMelee[getRandomInt(demoMelee.length)];
            break;
        case "heavy":
            Primary = heavyPrimary[getRandomInt(heavyPrimary.length)];
            Secondary = heavySecondary[getRandomInt(heavySecondary.length)];
            Melee = heavyMelee[getRandomInt(heavyMelee.length)];
            break;
        case "engineer":
            Primary = engiPrimary[getRandomInt(engiPrimary.length)];
            Secondary = engiSecondary[getRandomInt(engiSecondary.length)];
            Melee = engiMelee[getRandomInt(engiMelee.length)];
            break;
        case "medic":
            Primary = medicPrimary[getRandomInt(medicPrimary.length)];
            Secondary = medicSecondary[getRandomInt(medicSecondary.length)];
            Melee = medicMelee[getRandomInt(medicMelee.length)];
            break;
        case "sniper":
            Primary = sniperPrimary[getRandomInt(sniperPrimary.length)];
            Secondary = sniperSecondary[getRandomInt(sniperSecondary.length)];
            Melee = sniperMelee[getRandomInt(sniperMelee.length)];
            break;
        case "spy":
            Primary = spyPrimary[getRandomInt(spyPrimary.length)];
            Secondary = spySecondary[getRandomInt(spySecondary.length)];
            Melee = spyMelee[getRandomInt(spyMelee.length)];
            Watch = spyWatch[getRandomInt(spyWatch.length)];
            break;
        default:
            console.error("Please input a valid class");
            break;
    }
}

function generate(){
    if(isEmbed() == false){
        randomizedClassName = className[getRandomInt(className.length)];
        getLoadout(randomizedClassName);
        document.getElementById("embedClass").content = capitalizeFirstLetter(randomizedClassName);
        document.getElementById("primary").innerHTML = Primary;
        document.getElementById("secondary").innerHTML = Secondary;
        document.getElementById("melee").innerHTML = Melee;
        document.getElementById("watch").innerHTML = Watch;
        document.getElementById("primaryImage").src = imageFolder + Primary + ".png";
        document.getElementById("secondaryImage").src = imageFolder + Secondary + ".png";
        document.getElementById("meleeImage").src = imageFolder + Melee + ".png";
        document.getElementById("anan").src = imageFolder + capitalizeFirstLetter(randomizedClassName) + ".png";
        if(randomizedClassName == "spy"){
            document.getElementById("watchImage").src = imageFolder + Watch + ".png";
        }
        else{
            document.getElementById("watchImage").src = "";
        }
    }
    if(isEmbed()){
        //document.getElementById('description').setAttribute('content', 'Primary : ' + Primary + '\n' + 'Secondary : ' + Secondary + '\n' + 'Melee : ' + Melee);
        const metaTag = document.querySelector('meta[property="og:description"]');
        if (metaTag) {
        metaTag.setAttribute('content', 'please work');
        }
    }
}

generate();