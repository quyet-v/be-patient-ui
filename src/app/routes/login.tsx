import React from 'react';
import {LoginForm} from "../../components/forms/login-form.tsx";

export const LoginRoute = () => {
    return <div style={{background: "#f9fafb"}} className={"h-full w-full flex justify-center items-center"}>
            <LoginForm />
    </div>
}