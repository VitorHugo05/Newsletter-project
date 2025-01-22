"use client";

import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useFormHandlers } from "@/hooks/formHandlers";
import NavBar from "@/components/nav/navBar";
import { UserLoggedOut } from "@/components/nav/user";
import RegisterForm from "@/components/registerForm";
import Image from "next/image";
import Link from "next/link";
import api from "@/api";

export default function Register() {
    const router = useRouter();
    const { data, setData, emailError, validateForm, validateEmail } = useFormHandlers({
        name: "",
        fPass: "",
        sPass: "",
        email: "",
        birthDate: "",
        username: "",
    });

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailError) return alert("Por favor, corrija o erro de e-mail.");

        const req = {
            name: data.name,
            email: data.email,
            password: data.sPass,
            birthdate: new Date(data.birthDate).toLocaleDateString("pt-BR"),
            username: data.username
        };

        try {
            const res = await api.post("/auth/register", req);
            setCookie("token", res.data.token);
            router.push("/notices");
        } catch (err) {
            console.error("Erro ao registrar:", err);
        }
    };

    return (
        <main className="min-w-screen flex min-h-screen flex-col items-center justify-center bg-gray-900 bg-[url('/bg-stars.svg')]">
            <Image src="/color-sharp2.png" width={560} height={300} alt="" className="absolute bottom-0 right-0" />
            <Image src="/color-sharp.png" width={560} height={300} alt="" className="absolute left-0 top-0" />
            <NavBar
                style="bg-transparent"
                leftContent={<UserLoggedOut />}
                rightContent={
                    <Link href="/notices" className="flex items-center gap-2 text-lg hover:text-gray-200">
                        Ir para as postagens
                    </Link>
                }
            />
            <div className="w-[30%] rounded-lg border border-gray-300/10 bg-gray-800/10 p-10 backdrop-blur-3xl">
                <h1 className="mb-6 text-center font-body text-xl font-bold">Registre-se</h1>
                <RegisterForm
                    data={data}
                    setData={setData}
                    emailError={emailError}
                    isFormValid={validateForm()}
                    register={register}
                />
                <h2 className="text-center">
                    <Link href="/auth/login" className="text-lg hover:border-b hover:border-gray-200 hover:text-gray-200">
                        Já tem uma conta? Logue nela!
                    </Link>
                </h2>
            </div>
        </main>
    );
}
