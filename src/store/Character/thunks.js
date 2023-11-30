import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacter } from "../../services/api/Character";
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
