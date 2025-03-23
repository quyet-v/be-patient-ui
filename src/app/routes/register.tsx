import React from 'react';
import {RegisterForm} from "../../components/forms/register-form.tsx";

export const RegisterRoute = () => {
    return <div style={{background: "#f9fafb"}} className={"h-full w-full flex justify-center items-center"}>
            <RegisterForm />
    </div>
}