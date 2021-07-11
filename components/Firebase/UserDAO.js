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

    // returns id, key and ratings from a specific template
    function getTemplateRef(id) {
        return db.ref("templates").orderByChild("templateId").equalTo(id).once("value").then((snapshot) => {
            const snap = snapshot.val();
            if (snap !== null) {
                const snapValues = Object.keys(snap).map(key => ({
                    ...snap[key],
                    key
                }))
                return snapValues[0];
            } else {
                return null;
            }
        })
    }

    // push or override a rating from a specific user for a specific template
    function setTemplateRating(id, uid, rate, getTotalRating) {
        getTemplateRef(id).then((template) => {
            if (template !== null) {
                checkIfUserHasRated(id, uid).then((userKey) => {
                    if (!userKey) {
                        db.ref(`templates/${template.key}/rating`).push({ "uid": uid, "rate": rate })
                    } else {
                        db.ref(`templates/${template.key}/rating/${userKey}`).set({ "uid": uid, "rate": rate })
                    }
                    getTemplateTotalRating(id, getTotalRating)
                });
            }
        })
    }

    // returns user key or false if the user has rated or not in a specific template
    function checkIfUserHasRated(id, uid) {
        return db.ref("templates").orderByChild("templateId").equalTo(id).once("value").then((snapshot) => {
            const snap = snapshot.val();
            if (snap !== null) {
                const snapValues = Object.keys(snap).map(key => ({
                    ...snap[key]
                }))
                const snapValue = snapValues[0];
                if(snapValue.hasOwnProperty("rating")) {
                    const users = Object.keys(snapValue.rating).map(key => ({
                        ...snapValue.rating[key],
                        key
                    }));
                    for (let i = 0; i < users.length; i++) {
                        if(users[i].uid === uid) {
                            return users[i].key
                        }
                    }
                } else {
                    return false
                }
            }
        })
    }

    // Obtain average rating for a specific template
    function getTemplateTotalRating(id, getTotalRating) {
        getTemplateRef(id).then((template) => {
            if (template !== null) {
                if (template.hasOwnProperty("rating")) {
                    const snapValues = Object.keys(template.rating).map(key => ({
                        ...template.rating[key]
                    }))
                    let totalRating_aux = 0;
                    for(let i = 0; i < snapValues.length; i++) {
                        totalRating_aux += snapValues[i].rate
                    }
                    getTotalRating(Math.ceil(totalRating_aux / snapValues.length))
                } else {
                    getTotalRating(1)
                }
            } else {
                getTotalRating(0)
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    // Obtan rating chosed for a specific template
    function getUserTemplateRating(id, uid, rateTemplate) {
        getTemplateRef(id).then((response) => {
            const {key, templateId, ...templateUsers} = response;
            if(templateUsers.hasOwnProperty("rating")) {
                const users = Object.keys(templateUsers.rating).map(key => ({
                    ...response.rating[key]
                }));
                for(let i = 0; i < users.length; i++) {
                    if(users[i].uid === uid) {
                        rateTemplate(users[i].rate)
                        break;
                    } else {
                        rateTemplate(1);
                    }
                }
            }
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
                    removeFavorite,
                    getTemplateTotalRating,
                    setTemplateRating,
                    getUserTemplateRating
                }
            }>
            {children}
        </DBContext.Provider>
    )
}