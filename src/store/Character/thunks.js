import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacter } from "../../services/api/Character";
import { updateDefense } from "../../services/api/Defense";
import { updateSkill } from "../../services/api/Skill";

import { loading } from "../../utils/Loading";

export const pullCharacter = createAsyncThunk(
  "character/pull",
  async (characterId, dispatch) => {
    loading(dispatch.dispatch, { active: true, label: "Carregando..." });

    try {
      const character = await getCharacter(characterId);

      loading(dispatch.dispatch, { active: false, delay: 2000 });

      return character;
    } catch {
      loading(dispatch.dispatch, { active: false, delay: 2000 });
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

export const updateCharacterAttack = createAsyncThunk(
  "character/updateAttack",
  async () => {}
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
