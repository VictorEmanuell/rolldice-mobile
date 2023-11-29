import { ToastAndroid } from "react-native";
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

export async function createUser({ name, email, password }, callback) {
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await api
          .post("/users", {
            id: user.uid,
            name,
            email: user.email,
          })
          .then(callback)
          .catch(async (error) => {
            await user.delete();
            console.log(error);
            ToastAndroid.show("Ocorreu um erro!", ToastAndroid.SHORT);
          });
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          ToastAndroid.show("Usuário já existe!", ToastAndroid.LONG);
        }
      });

    return "success";
  } catch {
    throw "error";
  }
}
