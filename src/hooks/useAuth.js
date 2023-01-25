// help from: https://codesandbox.io/s/react-router-v6-auth-demo-4jzltb?file=/src/hooks/useAuth.js
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from './useLocalStorage';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("user", null);
    console.log("user in useAuth: ", user);
    // let's us re-direct the user
    const navigate = useNavigate();
// 📌📌📌 PICK UP HERE
    const login = async (data) => {
        console.log("data in useAuth: ",data);
        setUser(data);
        console.log("USER:",user)

        axios
            .post('/login',user)
            .then((res) => {
                console.log('user logged in post request made');
            })

        // onLogin, user redirects to today
        //POST req to /login with data 
        
        navigate("/dashboard/today")
    }

    const logout = () => {
        setUser(null);
        console.log('logout from useAuth!')
        // onLogout, user redirects to /login
        navigate('/', {replace: true})
    }

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        })
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}