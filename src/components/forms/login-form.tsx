import {SubmitHandler, useForm} from 'react-hook-form';
import {AuthLayout} from "../layouts/auth-layout.tsx";
import {Button, TextInput} from "@mantine/core";
import {NavLink} from "react-router";
import useLogin from "../../hooks/use-login.ts";

type FormFields = {
    email: string,
    password: string,
}

export const LoginForm = () => {
    const {register, handleSubmit} = useForm<FormFields>();
    const { isPending,login } = useLogin();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        login(data, "/");
    }

    return <AuthLayout title="Log in to your account" redirect={<NavLink to={"/auth/register"}>Register</NavLink>}>
        <form className={"space-y-6"} onSubmit={handleSubmit(onSubmit)}>
            <TextInput {...register("email", {required: "Email is required"})} label="Email" type="email" />
            <TextInput {...register("password", {required: "Password is required"})} label="Password" type="password" />
            <Button loading={isPending} justify={"center"} fullWidth variant="filled" type="submit">Login</Button>
        </form>
    </AuthLayout>
}

