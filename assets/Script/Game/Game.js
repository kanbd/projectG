var City = require("City");
var Position = require("Position");
var Item = require("Item");
var Background = require("Background");
var Npc_001 = require("npcs/Npc_001");
var Npc_Item = require("npcs/Npc_Item");
var Enemy = require("Enemy");
var Skill = require("Skill");
var Skill_001 = require("skills/Skill_001");
var Buff = require("Buff");
// var Buff_001 = require("buffs/Buff_001");

class Game {
    cities = {
        city_001: new City("city_001", "Home", new Position(10, 10, "bg_001"), [{id: "city_002", requiredItems: ["key_001"]}]),
        city_002: new City("city_002", "Yard", new Position(120, 10, "bg_001"), [{id: "city_001"},{id: "city_003"}]),
        city_003: new City("city_003", "Street", new Position(120, 120, "bg_001"), [{id: "city_001"},{id: "city_002"}]),
    }
    items = {
        item_001:   new Item("item_001", "Moldy Book", "An old moldy book. You can hardly read the writing. "),
        helmet_001: new Item("helmet_001", "Fool's Crown", "Every normal person knows its meaning. ", 0, [-600, 0, 110, 0, -150, 0, 0, 0, 0]),
        key_001:    new Item("key_001", "Rusky Key", "An old rusky key. "),
        weapon_001: new Item("weapon_001", "Cleaver", "An old rusky cleaver. ", 8, [0, 0, 10, 0, 0, 0, 0, 0, 0]),
        pant_001:   new Item("pant_001", "Gunny Pant", "An old gunny pant. ", 4, [0, 0, 0, 0, 10, 0, 0, 0, 0]),
    }
    backgrounds = {
        bg_001: new Background("bg_001"),
    }
    npcs = {
        npc_001: new Npc_001(),
        npc_002: new Npc_Item('npc_002', {name: 'Old Well', description: 'It has been abandon for years. Looks like something is down there. '}, 'city_003', 'weapon_001', 1),
    }
    enemies = {
        enemy_001: new Enemy([150, 1000, 0, 0, 0, 0, 1000, 0, 0], ['skill_001']),
    }
    skills = {
        skill_melee: new Skill('skill_melee', '普通攻击', '技能没了，那还能怎么办呢', 0, 0, 0, 0, 0, 0, []),
        skill_001: new Skill_001('skill_001'),
        skill_002: new Skill('skill_002', 'fire ball', 'fire ball', 80, 0, 100, 100, 100, 50, ['buff_001']),
    }
    buffs = {
        buff_001: new Buff('buff_001', 'burning', 'Burning. ', 0, 0.1, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0]),
    }
}

module.exports = Game;