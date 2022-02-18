import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const auth = getAuth();
// ! login with google
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => console.log("successfully signed in with google", re))
    .catch((err) => {
      console.log(err);
    });
};
const logout = () => {
  return signOut(auth);
};
export { auth, signInWithGoogle, logout };
