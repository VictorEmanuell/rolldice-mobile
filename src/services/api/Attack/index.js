import {api} from "../index";
import {getIdToken} from "firebase/auth";
import {auth} from "../../firebase";

export async function createAttack({characterId, data}) {
    try {
        const token = await getIdToken(auth.currentUser);

        const attack = await api
            .post(
                `/attacks`,
                {
                    character_id: characterId,
                    ...data
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
            .then((res) => res.data)
            .catch(async (error) => {
                throw error;
            });

        return attack;
    } catch {
        throw "error";
    }
}

export async function updateAttack({characterId, attackId, data}) {
    try {
        const token = await getIdToken(auth.currentUser);

        const attack = await api
            .put(
                `/attacks/${attackId}`,
                {
                    character_id: characterId,
                    ...data
                },
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

        return attack;
    } catch {
        throw "error";
    }
}

export async function deleteAttack({characterId, attackId}) {
    try {
        const token = await getIdToken(auth.currentUser);

        await api
            .delete(`/attacks/${attackId}`, {
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
