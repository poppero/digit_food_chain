import { createContext, useState } from "react";
import react from "react";

export const UserContext = createContext();
export const CurrentUserContext = createContext();
export const AssistantModalContext = createContext();
export const VoiceControlContext = createContext();
export const ChangingComponentsContext = createContext();
export const LoginContext = createContext();


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
    const redirect = ""
    const [assistant, setAssistant] = useState(false)
    const [selectedPage, setSelectedPage] = useState("home")
    const [status, setStatus] = useState("")
    return (

        <UserContext.Provider value={[users, setUsers]}>
            <VoiceControlContext.Provider value={redirect}>
                <LoginContext.Provider value={[status, setStatus]}>
                    <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
                        <AssistantModalContext.Provider value={[assistant, setAssistant]}>
                            <ChangingComponentsContext.Provider value={[selectedPage, setSelectedPage]} >
                                {props.children}
                            </ChangingComponentsContext.Provider>
                        </AssistantModalContext.Provider>
                    </CurrentUserContext.Provider>
                </LoginContext.Provider>
            </VoiceControlContext.Provider>
        </UserContext.Provider>


    )
}