import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {AuthLayout} from "../layouts/auth-layout.tsx";
import {Button, Select, TextInput} from "@mantine/core";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {NavLink} from "react-router";
import useLogin from "../../hooks/use-login.ts";

type FormFields = {
    email: string,
    password: string,
    role: string,
    patientName: string
}

export const RegisterForm = () => {
    const {register, handleSubmit, control} = useForm<FormFields>();
    const { isPending,mutate } = useMutation({
        mutationFn: (registerRequest: FormFields) => {
            return axios.post(`${import.meta.env.VITE_API_URL}/api/user/register`, registerRequest)
        },
    })

    const login = useLogin();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        mutate(data, {onSuccess: () => login.login({email: data.email, password: data.password}, "/")});
    }

    return <AuthLayout title="Register your account" redirect={<NavLink to={"/auth/login"}>Login</NavLink>}>
        <form className={"space-y-6"} onSubmit={handleSubmit(onSubmit)}>
            <TextInput {...register("email", {required: "Email is required"})} label="Email" type="email" />
            <TextInput {...register("password", {required: "Password is required"})} label="Password" type="password" />
            <Controller
                control={control}
                name={"role"}
                render={({ field: { onChange, onBlur, value, ref } }) => {
                    return <Select
                        onChange={onChange}
                        ref={ref}
                        value={value}
                        onBlur={onBlur}
                        label="Role"
                        placeholder="Pick role"
                        data={[{value: "FamilyMember", label: "Family Member"}]}
                    ></Select>
                }}
            />

            <TextInput {...register("patientName", {required: "Patient name is required"})} label="Patient Name" type="text" />
            <Button loading={isPending} justify={"center"} fullWidth variant="filled" type="submit">Register</Button>
        </form>
    </AuthLayout>
}

