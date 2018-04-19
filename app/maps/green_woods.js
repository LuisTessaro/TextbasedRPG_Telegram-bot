const possibleMonsters = [
    {
        name: 'Slime',
        hp: 20,
        sp: 0,
        autoAttackDmg: 5,
        flee: 0,
        accuracy: 10,
        iniciative_bonus: 0,
        occurrence: 50,
        exp: 500
    },
    {
        name: 'Wolf',
        hp: 50,
        sp: 0,
        autoAttackDmg: 10,
        flee: 2,
        accuracy: 10,
        iniciative_bonus: 0,
        occurrence: 40,
        exp: 500
    },
    {
        name: 'Dark Fairy',
        hp: 50,
        sp: 0,
        autoAttackDmg: 10,
        flee: 2,
        accuracy: 10,
        iniciative_bonus: 0,
        occurrence: 40,
        exp: 500
    },
    {
        name: 'BOSS: Treant',
        hp: 150,
        sp: 0,
        autoAttackDmg: 20,
        flee: 5,
        accuracy: 10,
        iniciative_bonus: 0,
        occurrence: 1,
        exp: 500
    },
    {
        name: 'Treasure',
        hp: 1,
        sp: 0,
        autoAttackDmg: 0,
        flee: 0,
        accuracy: 0,
        iniciative_bonus: 0,
        occurrence: 1,
        exp: 1000
    }
];

function green_woods() { }

green_woods.prototype.getMonsters = function (player, bot) {
    return possibleMonsters;
};

module.exports = function () {
    return green_woods;
};