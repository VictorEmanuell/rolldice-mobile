import { api } from "../index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export async function getUserInfo(token) {
  try {
    const userBasicInfo = await api
      .get("/user/info", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => res.data)
      .catch(async (error) => {
        throw error;
      });

    const characters = await api
      .get("/characters", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => res.data)
      .catch(async (error) => {
        throw error;
      });

    return {
      userBasicInfo,
      characters,
    };
  } catch {
    throw "error";
  }
}
