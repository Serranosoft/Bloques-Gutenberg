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
    function signOut() {
        auth.signOut()
            .then(() => {
                handleAuthUser("")
            })
    }

    // Reset password
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    // Update password
    function UpdatePassword(oldPassword, newPassword) {
/*         var cred = firebase.auth.EmailAuthProvider.credential(
            auth.currentUser.email,
            oldPassword
        );
        console.log(auth.currentUser.email);

        auth.currentUser.reauthenticateWithCredential(cred).then(function () {
            auth.currentUser.updatePassword(newPassword).then(function(response){
                console.log(response);
                return "ole"
            }).catch(function(error){
                return error
            });
        }).catch(function (error) {
            return error
        }) */
        
        return auth.currentUser.updatePassword(newPassword)
    }

    return (
        <AuthContext.Provider
            value={
                {
                    authUser, register, login, signOut, resetPassword, UpdatePassword
                }
            }>
            {children}
        </AuthContext.Provider>
    )

}