import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {AuthLayout} from "../layouts/auth-layout.tsx";
import {Button, TextInput} from "@mantine/core";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router";

type FormFields = {
    email: string,
    password: string,
}

export const LoginForm = () => {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<FormFields>();
    const { isPending, isSuccess,mutate } = useMutation({
        mutationFn: (loginData: FormFields) => {
            return axios.post(`${import.meta.env.VITE_API_URL}/login?useCookies=true&useSessionCookies=true`, loginData)
        },
    })

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        mutate(data, {onSuccess: () => navigate("/")});
    }

    return <AuthLayout title="Log in to your account">
        <form className={"space-y-6"} onSubmit={handleSubmit(onSubmit)}>
            <TextInput {...register("email", {required: "Email is required"})} label="Email" type="email" />
            <TextInput {...register("password", {required: "Password is required"})} label="Password" type="password" />
            <Button loading={isPending} justify={"center"} fullWidth variant="filled" type="submit">Login</Button>
        </form>
    </AuthLayout>
}

