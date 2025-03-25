import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router";

type LoginRequest = {
    email: string;
    password: string;
}

const useLogin = () => {
    const navigate = useNavigate();

    const { isPending,mutate } = useMutation({
        mutationFn: (loginData: LoginRequest) => {
            return axios.post(
                `${import.meta.env.VITE_API_URL}/login?useCookies=true&useSessionCookies=true`,
                loginData,
                {withCredentials: true}
            )
        }
    })

    const login = (loginRequest: LoginRequest, redirect: string) => {
        mutate(loginRequest, {onSuccess: () => navigate(redirect)});
    }

    return {isPending, login}
}





export default useLogin;