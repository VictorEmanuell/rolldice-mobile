import {USE_SKILL} from "../constants";

export const useSkillName = (id) => {
    if (![6, 17, 25].includes(id)) {
        return false;
    }

    let name;
    USE_SKILL.forEach((item) => {
       if (item.id === id) return name = item.name;
    });
    return name;
}

export const useSkillId = (name) => {
    let id;
    USE_SKILL.forEach((item) => {
        if (item.name === name) return id = item.id;
    });
    return id;
}

export const useSkills = () => {
    let array = [];
    USE_SKILL.forEach(item => {array.push(item.name)})
    return array;
}