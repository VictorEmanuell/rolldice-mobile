import {useSkillName} from "./UseSkill";
import {attributeKey, attributeName} from "./Attributes";

const colors = {
    green: '#00ef7f',
    red: '#DC3131'
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollDamage(dices = "0d0") {
    let rolled = [];

    let dice = dices.split("d");

    for (let i = 1; i <= Number(dice[0]); i++) {
        rolled.push(getRandomIntInclusive(1, Number(dice[1])))
    }

    let total = 0;
    let expression = "(";

    rolled.forEach((value, index) => {
        total += value;
        if (index === rolled.length - 1) {
            expression += `${value})`
        } else {
            expression += `${value}, `
        }
    });

    return {
        total,
        expression
    }
}

function rollCritical(criticalMultiplier, damageDice) {
    let rolled = [];

    let dice = damageDice.split("d");

    for (let i = 1; i <= criticalMultiplier; i++) {
        rolled.push(rollDamage(damageDice));
    }

    let total = 0;
    let expression = "";

    rolled.forEach((item, index) => {
        total += item.total
        if (index === rolled.length - 1) {
            expression += `${item.expression}`
        } else {
            expression += `${item.expression} + `
        }
    });

    console.log(total, expression);

    return {
        total,
        expression
    };
}

export function rollAttack({character, attackId, type}) {
    const characterAttack = character.attacks.filter(value => value.id === attackId)[0];
    const characterUseSkill = character.skills.filter(value => value.id === characterAttack.use_skill)[0];
    const attackAttribute = character.attributes[attributeKey(characterAttack.damage_attribute)];
    // console.log(character.attributes);
    const skillTotal = () => {
        if (characterUseSkill.modifier) {
            const skillAttribute = character.attributes[attributeKey(characterUseSkill.modifier?.character_attribute)];

            return (skillAttribute + (characterUseSkill.modifier?.trained ?? 2) + characterUseSkill.modifier?.others);
        } else {
            return (character.attributes[attributeKey("DES")]);
        }
    }

    function attackDice(attackType) {
        let diceOne = getRandomIntInclusive(1, 20);
        let diceTwo = getRandomIntInclusive(1, 20);

        if (attackType === 'attack-better') {
            return {
                value: diceOne > diceTwo ? diceOne : diceTwo,
                expression: `(*${diceOne}, ${diceTwo})`
            }
        } else if (attackType === 'attack-worse') {
            return {
                value: diceOne < diceTwo ? diceOne : diceTwo,
                expression: `(*${diceOne}, ${diceTwo})`
            }
        } else {
            return {
                value: diceOne,
                expression: `(${diceOne})`
            }
        }
    }

    const rolledAttackDice = attackDice(type);
    const rolledDamageDice = rolledAttackDice >= characterAttack.critical_value ? rollCritical(characterAttack.critical_multiplier, characterAttack.damage) : rollDamage(characterAttack.damage);
    const rolledDamageExtraDice = rollDamage(characterAttack.extra_dices);

    const attackTotal = (rolledAttackDice.value + skillTotal() + characterAttack.attack_bonus)
    const damageTotal = (rolledDamageDice.total + (attackAttribute ?? 0) + characterAttack.extra_damage + rolledDamageExtraDice.total)

    const totalColor = () => {
        if (rolledAttackDice.value === 20) return colors.green;
        if (rolledAttackDice.value === 1) return colors.red;
    }

    return {
        attack: {
            total: attackTotal,
            totalColor: totalColor(),
            infos: [
                {field: '(Dano)', value: `1d20 > ${rolledAttackDice.expression}`},
                {field: `(Perícia - ${useSkillName(characterAttack.use_skill)})`, value: skillTotal()},
                {field: '(Bônus de ataque)', value: characterAttack.attack_bonus}
            ]
        },
        damage: {
            total: damageTotal,
            infos: [
                {field: '(Dano)', value: `${characterAttack.damage} > ${rolledDamageDice.expression}`},
                {field: `(Atributo - ${attributeName(characterAttack.damage_attribute)})`, value: attackAttribute ?? 0},
                {field: '(Dano extra)', value: characterAttack.extra_damage},
                {
                    field: '(Dados extra)',
                    value: `${characterAttack.extra_dices} > ${rolledDamageExtraDice.expression}`
                },
            ]
        }
    }
}

export function rollAttackWorse({character}) {
}

export function rollAttackBetter({character}) {
}

export function rollSkill({character, skillId}) {
    const rolledSkillDice = getRandomIntInclusive(1, 20);
    const skill = character.skills.filter(value => value.id === skillId)[0];
    const armor = character.armor;

    const penalty = () => {
        if (skill.penalty && armor) {
            return (armor.slot1_penalty + armor.slot2_penalty)
        } else {
            return 0;
        }
    }

    const skillTotal = () => {
        if (skill.modifier) {
            const skillAttribute = character.attributes[attributeKey(skill.modifier.character_attribute)];

            return (skillAttribute + (skill.modifier.trained && 2) + skill.modifier.others - penalty());
        } else {
            return (character.attributes[attributeKey("DES")] - penalty());
        }
    }

    const total = (rolledSkillDice + skillTotal());

    const totalColor = () => {
        if (rolledSkillDice === 20) return colors.green;
        if (rolledSkillDice === 1) return colors.red;
    }

    return {
        title: skill.name,
        total,
        totalColor: totalColor(),
        infos: [
            {field: '(Valor)', value: `1d20 - (${rolledSkillDice})`},
            {field: '(Perícia)', value: skillTotal()},
        ]
    }
}