import { ToastAndroid } from "react-native";
import { api } from "../index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export async function createUser({ name, email, password }, callback) {
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await api
          .post("/user", {
            id: user.uid,
            name,
            email: user.email,
          })
          .then(callback)
          .catch(async () => {
            await user.delete();
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
