import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUserInfo } from "../../services/api/User/index";
import { loading } from "../../utils/Loading";

export const pullUser = createAsyncThunk("user/pull", async ({ dispatch }) => {
  loading(dispatch, { active: true, label: "Carregando..." });

  try {
    const { userBasicInfo, characters } = await getUserInfo();
    loading(dispatch, { active: false, label: "", delay: 2000 });

    return { ...userBasicInfo, characters };
  } catch {
    loading(dispatch, { active: false, label: "", delay: 2000 });
  }
});
