import 'firebase/auth';
import 'firebase/database';
import { useState, createContext, useEffect } from 'react';
import { auth } from "./config"

export const AuthContext = createContext()


export const AuthDAO = ({ children }) => {


    // Usuario autenticado actual
    const [authUser, handleAuthUser] = useState("")

    // Obtiene el usuario autenticado cuando el componente termina de montarse
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            handleAuthUser(authUser)
        })
    }, [])

    // Create a authetication account
    const register = (email, password) => auth.createUserWithEmailAndPassword(email, password);

    // Sign in
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
            .then((authUser) => {
                handleAuthUser(authUser.user)
            })
    };

    // Sign out
    function signOut(history) {
        auth.signOut()
            .then(() => {
                handleAuthUser("")
                history.push("/")
            })
    }

    return (
        <AuthContext.Provider
            value={
                {
                    authUser, register, login, signOut
                }
            }>
            {children}
        </AuthContext.Provider>
    )

}