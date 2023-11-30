import { createAsyncThunk } from "@reduxjs/toolkit";

import { getSkills } from "../../services/api/SkillsStatic";

export const pullSkills = createAsyncThunk("skills/pull", async () => {
  const skills = await getSkills();
  
  return skills;
});
