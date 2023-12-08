import {useSkillName} from "./UseSkill";
import {attributeKey, attributeName} from "./Attributes";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollDamage(dices = "0d0") {
    let rolled = [];

    let dice = dices.split("d");

    for (let i = 0; i < Number(dice[0]); i++) {
        rolled.push(getRandomIntInclusive(1, Number(dice[1])))
    }

    let total = 0;

    rolled.forEach(value => total += value);

    let expression = "";

    rolled.forEach((value, index) => {
        if (index === rolled.length - 1) {
            expression += `${value}`
        } else {
            expression += `${value}, `
        }
    })

    return {
        total,
        expression
    }
}

export function rollAttackDefault({character, attackId}) {
    const characterAttack = character.attacks.filter(value => value.id === attackId)[0];
    const characterUseSkill = character.skills.filter(value => value.id === characterAttack.use_skill)[0];
    const attackAttribute = character.attributes[attributeKey(characterAttack.damage_attribute)];
    // console.log(character.attributes);
    const skillTotal = () => {
        if (characterUseSkill.modifier) {
            const skillAttribute = character.attributes[attributeKey(characterUseSkill.modifier.character_attribute)];

            return (skillAttribute + (characterUseSkill.modifier.trained ?? 2) + characterUseSkill.modifier.others);
        } else {
            return (character.attributes[attributeKey("DES")]);
        }
    }

    const rolledAttackDice = getRandomIntInclusive(1, 20);
    const rolledDamageDice = rollDamage(characterAttack.damage);
    const rolledDamageExtraDice = rollDamage(characterAttack.extra_dices);

    const attackTotal = (rolledAttackDice + skillTotal() + characterAttack.attack_bonus)
    const damageTotal = (rolledDamageDice.total + (attackAttribute ?? 0) + characterAttack.extra_damage + rolledDamageExtraDice.total)

    return {
        attack: {
            total: attackTotal,
            infos: [
                {field: '(Dano)', value: `1d20 - (${rolledAttackDice})`},
                {field: `(Perícia - ${useSkillName(characterAttack.use_skill)})`, value: skillTotal()},
                {field: '(Bônus de ataque)', value: characterAttack.attack_bonus}
            ]
        },
        damage: {
            total: damageTotal,
            infos: [
                {field: '(Dano)', value: `${characterAttack.damage} - (${rolledDamageDice.expression})`},
                {field: `(Atributo - ${attributeName(characterAttack.damage_attribute)})`, value: attackAttribute ?? 0},
                {field: '(Dano extra)', value: characterAttack.extra_damage},
                {
                    field: '(Dados extra)',
                    value: `${characterAttack.extra_dices} - (${rolledDamageExtraDice.expression})`
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
    const rolledSkillDice = getRandomIntInclusive(1,20);
    const skill = character.skills.filter(value => value.id === skillId)[0];

    const skillTotal = () => {
        if (skill.modifier) {
            const skillAttribute = character.attributes[attributeKey(skill.modifier.character_attribute)];

            return (skillAttribute + (skill.modifier.trained ?? 2) + skill.modifier.others);
        } else {
            return (character.attributes[attributeKey("DES")]);
        }
    }

    const total = (rolledSkillDice + skillTotal());

    return {
        title: skill.name,
        total,
        infos: [
            {field: '(Valor)', value: `1d20 - (${rolledSkillDice})`},
            {field: '(Perícia)', value: skillTotal()},
        ]
    }
}