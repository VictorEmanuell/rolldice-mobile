import { api } from "../../api";

export async function getSkills() {
  try {
    const skills = await api
      .get(`/skills`)
      .then((res) => res.data)
      .catch(async (error) => {
        throw error;
      });

    return skills;
  } catch {
    throw "error";
  }
}
