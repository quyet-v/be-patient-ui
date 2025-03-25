import React from 'react';
import {Container} from "@mantine/core";
import {NavLink} from "react-router";

interface Props {
    children: React.ReactNode,
    title: string,
    redirect: React.ReactNode,
}

export const AuthLayout: React.FC<Props> = ({children, title, redirect}) => {
    return <div>
        <div className={"flex justify-center items-center flex-col mb-4"}>
            <NavLink to={"/"} className={"flex justify-center items-center flex-col space-y-6"}>
                <img width="100" height="100" src="/be-patient-logo.png" alt="bePatient Logo"/>
            </NavLink>
            <h2 className={"text-3xl font-bold"}>{title}</h2>
        </div>

        <Container className={"p-4 bg-white rounded space-y-3"} style={{boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"}}>
            {children}
            <div className={"flex justify-end"}>
                {redirect}
            </div>
        </Container>
    </div>
}