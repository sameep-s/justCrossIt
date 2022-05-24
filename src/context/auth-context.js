import { createContext, useContext, useState } from "react";
import { useNotes } from ".";
import { getArchives } from "../services/archive-services";
import { loginService, signupService } from "../services/auth-services";
import { getNotesHandler } from "../services/notes-services";
import { getTrashedNotes } from "../services/trash-services";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const { state_note, dispatch_note } = useNotes();
    console.log(state_note);

    const localEncodedToken = localStorage.getItem('tokenNotes');
    const localUser = localStorage.getItem('userNotes');
    const [encodedToken, setEncodedToken] = useState(localEncodedToken);
    const [user, setUser] = useState(localUser);

    const loginUser = async (email, password) => {
        try {
            const { data: { foundUser, encodedToken }, status } = await loginService(email, password);

            if (status === 200) {
                localStorage.setItem('tokenNotes', encodedToken);
                localStorage.setItem('userNotes', JSON.stringify(foundUser));
                setEncodedToken(encodedToken);
                setUser(foundUser);

                getArchives(dispatch_note, encodedToken);
                getNotesHandler(dispatch_note, encodedToken);
                getTrashedNotes(dispatch_note, encodedToken);

            }
        } catch (e) {
            console.error("Error, Can't log in user", e);
        }
    }


    const signupUser = async (email, password, confirmPassword, firstName, lastName, age) => {
        try {
            const { status, data: { encodedToken, createdUser } } = await signupService(email, password, confirmPassword, firstName, lastName, age);

            if (status === 201) {
                localStorage.setItem('tokenNotes', encodedToken);
                localStorage.setItem('userNotes', JSON.stringify(createdUser));
                setEncodedToken(encodedToken);
                setUser(createdUser);
                console.log(`created user`, createdUser);

                getArchives(dispatch_note, encodedToken);
                getNotesHandler(dispatch_note, encodedToken);
                getTrashedNotes(dispatch_note, encodedToken);
            }
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <AuthContext.Provider value={{ user, setUser, encodedToken, setEncodedToken, loginUser, signupUser }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };