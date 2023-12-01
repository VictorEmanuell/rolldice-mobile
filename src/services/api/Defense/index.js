import { api } from "../index";
import { getIdToken } from "firebase/auth";
import { auth } from "../../firebase";

// export async function getDefense(id) {
//   try {
//     const token = await getIdToken(auth.currentUser);

//     const defense = await api
//       .get(`/defenses/${id}`, {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       })
//       .then((res) => res.data)
//       .catch(async (error) => {
//         throw error;
//       });

//     if (!defense) return "empty";

//     return defense;
//   } catch {
//     throw "error";
//   }
// }

export async function updateDefense(characterId, data) {
  try {
    const token = await getIdToken(auth.currentUser);
    
    const defense = await api
      .patch(
        `/defenses/${characterId}`,
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

    return defense;
  } catch {
    throw "error";
  }
}

export async function deleteDefense(id) {
  try {
    const token = await getIdToken(auth.currentUser);

    await api
      .delete(`/defenses/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => res)
      .catch(async (error) => {
        console.log(error);
        // throw error;
      });

    return "success";
  } catch {
    throw "error";
  }
}
