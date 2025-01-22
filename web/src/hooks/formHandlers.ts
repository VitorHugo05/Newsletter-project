import { useState } from "react";
import api from "@/api";

export function useFormHandlers(initialState: any) {
    const [data, setData] = useState(initialState);
    const [emailError, setEmailError] = useState<string>("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = () => {
        const isEmailValid = emailRegex.test(data.email);
        const arePasswordsValid = data.fPass === data.sPass && data.fPass !== "";
        const isPasswordLengthValid = data.fPass.length >= 8;
        const isFormComplete = Object.values(data).every((field) => field !== "");

        return isFormComplete && isEmailValid && arePasswordsValid && isPasswordLengthValid;
    };

    const validateEmail = async (email: string) => {
        try {
            const response = await api.get("/users");
            const existingUser = response.data.find((user: { email: string }) => user.email === email);
            setEmailError(existingUser ? "Este e-mail já está cadastrado." : "");
        } catch (error) {
            console.error("Erro ao verificar e-mail:", error);
            setEmailError("Erro ao verificar o e-mail.");
        }
    };

    return { data, setData, emailError, validateForm, validateEmail };
}
