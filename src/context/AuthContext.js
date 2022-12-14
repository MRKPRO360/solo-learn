import React, { useEffect, useState } from "react";
import app from "../firebase";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useContext } from "react";
const AuthContext = React.createContext();

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);

export const useAuth = function () {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    // do clean up
    return unsubscribe;
  }, []);

  // signup
  const signup = async function (email, password, username, url) {
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: url,
    });

    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  // login
  const login = async function (email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = async function () {
    return await signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = async function () {
    return await signInWithPopup(auth, githubProvider);
  };

  // update profile

  const updateInfo = async function (name, url) {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });

    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  // password reset email

  const passwordReset = async function (email) {
    return await sendPasswordResetEmail(auth, email);
  };

  // logout
  const logout = async function () {
    return await signOut(auth);
  };

  const value = {
    currentUser,
    signup,
    login,
    googleLogin,
    githubLogin,
    updateInfo,
    passwordReset,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
