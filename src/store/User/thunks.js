import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUserInfo } from "../../services/api/User/index";

export const pullUser = createAsyncThunk("user/pull", async (token) => {
  const { userBasicInfo, characters } = await getUserInfo(token);

  return { ...userBasicInfo, characters };
});
