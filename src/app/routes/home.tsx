import React from 'react';
import {Button} from "@mantine/core";
import {useNavigate} from "react-router";

export const HomeRoute = () => {
    const navigate = useNavigate();

    return <div className={"w-full h-full flex justify-center items-center flex-col space-y-6"}>
        <div className={"flex justify-center items-center flex-col space-y-6"}>
            <h1 className={"text-5xl font-bold"}>bePatient</h1>
            <img width={"200"} height={"200"} src="/public/be-patient-logo.png"
                 alt="bePatient Logo"/>
            <p>bePatient keeps families informed with real-time surgery updates, managed by hospital staff.</p>
        </div>
        <div className={"space-x-6"}>
            <Button onClick={() => {navigate("/auth/login")}}>Get started</Button>
            <Button color={"gray"}>GitHub Repo</Button>
        </div>
    </div>
}