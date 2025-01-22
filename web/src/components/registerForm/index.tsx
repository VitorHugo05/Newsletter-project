import React, { FormEvent } from "react";
import FormField from "../formField";

export default function RegisterForm({ data, setData, emailError, setEmailError, isFormValid, register }: any) {
    const handleChange = (field: string) => (value: string) => {
        setData((prev: any) => ({ ...prev, [field]: value }));
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={register}>
            <FormField
                label="Digite seu nome"
                type="text"
                value={data.name}
                onChange={handleChange("name")}
                placeholder="Nome"
            />
            <FormField
                label="Digite seu username"
                type="text"
                value={data.username}
                onChange={handleChange("username")}
                placeholder="Username"
            />
            <FormField
                label="Data de Nascimento"
                type="date"
                value={data.birthDate}
                onChange={handleChange("birthDate")}
            />
            <FormField
                label="Digite seu email"
                type="email"
                value={data.email}
                onChange={handleChange("email")}
                placeholder="Email"
                error={emailError}
            />
            <FormField
                label="Digite sua senha"
                type="password"
                value={data.fPass}
                onChange={handleChange("fPass")}
                placeholder="Senha"
            />
            <FormField
                label="Digite novamente sua senha"
                type="password"
                value={data.sPass}
                onChange={handleChange("sPass")}
                placeholder="Senha"
            />
            <button
                type="submit"
                className={`text-md h-auto self-end rounded-lg px-10 py-3 font-mono transition-colors duration-300 ease-in-out mb-3 ${
                    isFormValid ? "bg-green-600 hover:bg-green-700 text-white" : "bg-yellow-500 text-black/80 pointer-events-none"
                } shadow-lg`}
            >
                Registre-se
            </button>
        </form>
    );
}