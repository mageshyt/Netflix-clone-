// // // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // // import { getAnalytics } from "firebase/analytics";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBYczDQOU-FTzMipU7o2q4bZpE9VrbwhIE",
//   authDomain: "crown-clothing-2-3ed7e.firebaseapp.com",
//   projectId: "crown-clothing-2-3ed7e",
//   storageBucket: "crown-clothing-2-3ed7e.appspot.com",
//   messagingSenderId: "1071728668496",
//   appId: "1:1071728668496:web:098ea2cf69eea7d3ee0655",
//   measurementId: "G-NP83F6F3JL",
// };

// const auth = getAuth();
// // ! login with google
// const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((re) => console.log("successfully signed in with google", re))
//     .catch((err) => {
//       console.log(err);
//     });
// };
// const logout = () => {
//   return signOut(auth);
// };

// // // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // // getAnalytics(app);
// export { app, logout, signInWithGoogle };
