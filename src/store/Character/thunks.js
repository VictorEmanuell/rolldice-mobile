import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacter } from "../../services/api/Character";
import { updateDefense } from "../../services/api/Defense";
import { updateSkill } from "../../services/api/Skill";

import { loading } from "../../utils/Loading";
import {
  createAttack,
  deleteAttack,
  updateAttack,
} from "../../services/api/Attack";

export const pullCharacter = createAsyncThunk(
  "character/pull",
  async ({characterId, dispatch}) => {
    loading(dispatch, { active: true, label: "Carregando..." });
    
    try {
      const character = await getCharacter(characterId);
      
      loading(dispatch, { active: false, delay: 2000 });

      return character;
    } catch {
      loading(dispatch, { active: false, delay: 2000 });
    }
  }
);

export const updateCharacter = createAsyncThunk(
  "character/update",
  async () => {}
);

export const updateCharacterDefense = createAsyncThunk(
  "character/updateDefense",
  async ({ characterId, data, dispatch }) => {
    loading(dispatch, { active: true, label: "Salvando..." });

    try {
      const character = await updateDefense(characterId, data);
      loading(dispatch, { active: false, delay: 2000 });

      return character;
    } catch {
      loading(dispatch, { active: false, delay: 2000 });
    }
  }
);

export const createCharacterAttack = createAsyncThunk(
  "character/createAttack",
  async ({ characterId, data, dispatch }) => {
    loading(dispatch, { active: true, label: "Enviando dados..." });

    try {
      const attack = await createAttack({ characterId, data });
      loading(dispatch, { active: false, label: "", delay: 2000 });

      return attack;
    } catch {
      loading(dispatch, { active: false, label: "", delay: 2000 });
    }
  }
);

export const updateCharacterAttack = createAsyncThunk(
  "character/updateAttack",
  async ({ characterId, attackId, data, dispatch }) => {
    loading(dispatch, { active: true, label: "Salvando..." });

    try {
      const attack = await updateAttack({ characterId, attackId, data });
      loading(dispatch, { active: false, label: "", delay: 2000 });

      return attack;
    } catch {
      loading(dispatch, { active: false, label: "", delay: 2000 });
    }
  }
);

export const deleteCharacterAttack = createAsyncThunk(
  "character/deleteAttack",
  async ({ characterId, attackId, dispatch }) => {
    loading(dispatch, { active: true, label: "Excluindo..." });

    try {
      const attack = await deleteAttack({ characterId, attackId });
      loading(dispatch, { active: false, label: "", delay: 2000 });

      return { message: attack, attackId };
    } catch {
      loading(dispatch, { active: false, label: "", delay: 2000 });
    }
  }
);

export const updateCharacterSkill = createAsyncThunk(
  "character/updateSkill",
  async ({ characterId, skillId, data, dispatch }) => {
    loading(dispatch, { active: true, label: "Salvando..." });

    try {
      const character = await updateSkill(characterId, skillId, data);
      loading(dispatch, { active: false, delay: 2000 });

      return character;
    } catch {
      loading(dispatch, { active: false, delay: 2000 });
    }
  }
);
