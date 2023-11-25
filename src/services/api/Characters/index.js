import { api } from "../index";
import { getIdToken } from "firebase/auth";
import { auth } from "../../firebase";

export async function createCharacter(data) {
  try {
    const token = await getIdToken(auth.currentUser);

    const character = await api
      .post(
        "/characters",
        { ...data },
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

    return character;
  } catch {
    throw "error";
  }
}

export async function updateCharacter(id, data) {
  try {
    const token = await getIdToken(auth.currentUser);

    const character = await api
      .put(
        `/characters/${id}`,
        { ...data },
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

    return character;
  } catch {
    throw "error";
  }
}

export async function deleteCharacter(id) {
  try {
    const token = await getIdToken(auth.currentUser);

    await api
      .delete(
        `/characters/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => res)
      .catch(async (error) => {
        throw error;
      });

    return 'success';
  } catch {
    throw "error";
  }
}
