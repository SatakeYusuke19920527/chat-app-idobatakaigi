import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { auth } from '../plugins/firebase';
import { login, logout, selectUser } from '../features/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { UserType } from '../types/UserType';

export const useLoginCheck = (): boolean => {
  const user: UserType = useAppSelector(selectUser);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      console.log("🚀 ~ file: useLoginCheck.ts ~ line 14 ~ unSub ~ authUser", authUser)

      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch, navigate]);
  return user.uid !== "" ? true : false
};