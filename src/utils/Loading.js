import { setLoading } from "../store/Loading/actions";

export function loading(dispatch, { active, label = "", delay = 0 }) {
  // const dispatch = useDispatch();

  setTimeout(() => dispatch(setLoading({active, label})), delay);
}
