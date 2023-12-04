import { api } from "../index";
import { getIdToken } from "firebase/auth";
import { auth } from "../../firebase";

export async function updateSkill(characterId, skillId, data) {
  try {
    const token = await getIdToken(auth.currentUser);

    const skill = await api
      .patch(
        `/character_skill/update`,
        { character_id: characterId, skill_id: skillId, ...data },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => res.data)
      .catch(async (error) => {
        throw error;
      });

    return skill;
  } catch {
    throw "error";
  }
}
