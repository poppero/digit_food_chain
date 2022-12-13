import { createContext, useState } from "react";
import react from "react";

export const UserContext = createContext();
export const CurrentUserContext = createContext();


export const UserProvider = props => {
    const [users, setUsers] = useState([
        {
            id: 0,
            name: "Petar",
            lastname: "Ralevski",
            email: "petar@gmail.com",
            password: "12345"
        },
        {
            id: 1,
            name: "Ivana",
            lastname: "Petrovska",
            email: "ivana@gmail.com",
            password: "12345"
        },
        {
            id: 3,
            name: "Marija",
            lastname: "Nikolovska",
            email: "marija@gmail.com",
            password: "12345"
        }
    ])
    const [currentUser, setCurrentUser] = useState({
        id: 0,
        name: "Petar",
        lastname: "Ralevski",
        email: "petar@gmail.com",
        password: "12345"
    })
    return (

        <UserContext.Provider value={[users, setUsers]}>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
                {props.children}
            </CurrentUserContext.Provider>
        </UserContext.Provider>


    )
}