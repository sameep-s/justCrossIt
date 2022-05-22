import { createContext, useContext, useState } from "react";
import { loginService, signupService } from "../services/auth-services";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const localEncodedToken = localStorage.getItem('tokenNotes');
    const localUser = localStorage.getItem('userNotes');
    const [encodedToken, setEncodedToken] = useState(localEncodedToken);
    const [user, setUser] = useState(localUser);

    const loginUser = async (email, password) => {
        try {
            const { data: { foundUser, encodedToken }, status } = await loginService(email, password);
            if (status === 201) {
                localStorage.setItem('tokenNotes', encodedToken);
                localStorage.setItem('userToken', foundUser);
                setEncodedToken(encodedToken);
                setUser(foundUser);
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
                localStorage.setItem('userToken', createdUser);
                setEncodedToken(encodedToken);
                setUser(createdUser);
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