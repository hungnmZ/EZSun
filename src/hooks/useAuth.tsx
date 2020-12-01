import { useEffect } from 'react';
import { useAppState } from '../store/appState';
import { firebase, getSnapshotFromUserAuth} from '../firebase/config';
import { AppActionType } from '../reducers/appReducer';

export default function useAuth() {
  const { state, dispatch } = useAppState();
  const { auth, isInitializing } = state;

  useEffect(() => {
    async function onAuthStateChanged(user: firebase.User | null) {
      const userSnapshot = await getSnapshotFromUserAuth(user, {});
      if (!userSnapshot) {
        dispatch({ type: AppActionType.AUTH_CHANGE, auth: null });
        return null;
      } else if (userSnapshot.data()) {
        dispatch({
          type: AppActionType.AUTH_CHANGE,
          auth: { id: userSnapshot.id, ...userSnapshot.data() },
        });
      }
    }
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    return () => {
      subscriber();
    };
  }, []);

  return { auth, isInitializing };
}
