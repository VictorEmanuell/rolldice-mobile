import {createSlice} from "@reduxjs/toolkit";
import {characterInitialState} from "./initialState";
import {
    pullCharacter,
    updateCharacterDefense,
    updateCharacterSkill,
    createCharacterAttack,
    updateCharacterAttack,
    deleteCharacterAttack,
} from "./thunks";

export const characterSlice = createSlice({
    name: "character",
    initialState: characterInitialState,
    reducers: {
        resetCharacter: () => characterInitialState,
        setCharacter(state, action) {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.level = action.payload.level;
            state.class = action.payload.class;
            state.strength = action.payload.strength;
            state.dexterity = action.payload.dexterity;
            state.constitution = action.payload.constitution;
            state.intelligence = action.payload.intelligence;
            state.wisdom = action.payload.wisdom;
            state.charisma = action.payload.charisma;
        },
        resetDefense(state, action) {
            state.armor = characterInitialState.armor;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(pullCharacter.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.name = action.payload.name;
                state.class = action.payload.class;
                state.level = action.payload.level;
                state.attributes.strength = action.payload.strength;
                state.attributes.dexterity = action.payload.dexterity;
                state.attributes.constitution = action.payload.constitution;
                state.attributes.intelligence = action.payload.intelligence;
                state.attributes.wisdom = action.payload.wisdom;
                state.attributes.charisma = action.payload.charisma;
                state.armor = action.payload.armor;
                state.attacks = action.payload.attacks;
                state.skills = action.payload.skills;
            })
            .addCase(pullCharacter.pending, (state, action) => {
            })
            .addCase(pullCharacter.rejected, (state, action) => {
            });

        builder
            .addCase(updateCharacterDefense.fulfilled, (state, action) => {
                state.armor = {...state.armor, ...action.payload};
            })
            .addCase(updateCharacterDefense.pending, (state, action) => {
            })
            .addCase(updateCharacterDefense.rejected, (state, action) => {
            });

        builder
            .addCase(updateCharacterSkill.fulfilled, (state, action) => {
                let skillIndex;
                state.skills.forEach((s, i) => {
                    if (s.id === action.payload.skill_id) {
                        skillIndex = i;
                        return;
                    }
                });

                state.skills[skillIndex].modifier = {...action.payload};
            })
            .addCase(updateCharacterSkill.pending, (state, action) => {
            })
            .addCase(updateCharacterSkill.rejected, (state, action) => {
            });

        builder
            .addCase(createCharacterAttack.fulfilled, (state, action) => {
                state.attacks.push(action.payload);
            })
            .addCase(createCharacterAttack.pending, (state, action) => {
            })
            .addCase(createCharacterAttack.rejected, (state, action) => {
            });

        builder
            .addCase(updateCharacterAttack.fulfilled, (state, action) => {
                let attackIndex;
                state.attacks.forEach((a, i) => {
                    if (a.id === action.payload.id) {
                        attackIndex = i;
                        return;
                    }
                });

                state.attacks[attackIndex] = {...action.payload};
            })
            .addCase(updateCharacterAttack.pending, (state, action) => {
            })
            .addCase(updateCharacterAttack.rejected, (state, action) => {
            });

        builder
            .addCase(deleteCharacterAttack.fulfilled, (state, action) => {
                if (action.payload.message === 'success') {
                    let index = state.attacks.findIndex(item => item.id === action.payload.attackId);

                    state.attacks.splice(index, 1);
                }
            })
            .addCase(deleteCharacterAttack.pending, (state, action) => {
            })
            .addCase(deleteCharacterAttack.rejected, (state, action) => {
            });
    },
});
