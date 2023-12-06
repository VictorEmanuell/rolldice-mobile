import {USE_SKILL} from "../constants";

export const useSkillName = (id) => {
    if (![6, 16, 24].includes(id)) {
        return false;
    }

    let name;
    USE_SKILL.forEach((item) => {
       if (item.id === id) return name = item.name;
    });
    return name;
}

export const useSkills = () => {
    let array = [];
    USE_SKILL.forEach(item => {array.push(item.name)})
    return array;
}