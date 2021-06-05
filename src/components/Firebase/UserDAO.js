import { db } from "./config"
import { useState, createContext, useContext, useEffect } from 'react';
import { AuthContext } from "./AuthDAO";

export const DBContext = createContext()

export const UserDAO = ({ children }) => {

    const { authUser } = useContext(AuthContext)

    const [userName, handleUserName] = useState("")

    const getUserRef = (uid) => db.ref(`users/${uid}`);

    const createUser = (id, user) => getUserRef(id).set(user)

    function getUserName(id) {
        getUserRef(id).child("nameInput").once("value", snapshot => {
            handleUserName(snapshot.val())
        })
    }

    function setFavorite(id, template) {
        getUserRef(id).child("favorites").push({ "template": template })
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    };

    function getFavorites(id, handleFavorites) {
        getUserRef(id).child("favorites").once("value", snapshot => {
            const snap = snapshot.val();

            if (snap != null) {
                const snapValues = Object.keys(snapshot.val()).map(key => ({
                    ...snap[key].template,
                    key: key
                }))
                handleFavorites(snapValues)
            } else {
                handleFavorites([])
            }

        })
    }

    function removeFavorite(id, handleFavorites, key) {
        getUserRef(id).child("favorites").once("value", snapshot => {
            const snap = snapshot.val();
            const usersList = Object.keys(snap).map(key => ({
                ...snap[key],
                key: key,
            }));
            usersList.forEach((el => {
                if (el.key === key) {
                    getUserRef(id).child(`favorites/${el.key}`).remove()
                        .then(() => {
                            getFavorites(id, handleFavorites)
                        }).catch((error) => {
                            console.log(error);
                        });
                }
            }))

        })
    }

    useEffect(() => {
        if (authUser !== "" && authUser !== null) {
            getUserName(authUser.uid)
        }
        // eslint-disable-next-line
    }, [authUser])

    return (
        <DBContext.Provider
            value={
                {
                    userName,
                    createUser,
                    setFavorite,
                    getFavorites,
                    removeFavorite
                }
            }>
            {children}
        </DBContext.Provider>
    )
}