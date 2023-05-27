"use client";

import Image from "next/image";
import NavBar from "@/components/navbar/NavBar";

import { api } from "@/lib/api";
import { useContext, useState } from "react";
import { FormDataContext } from "@/context/dataContext";
import Name from "@/components/updateForm/name/Name";
import EmailField from "@/components/updateForm/emailFIeld/EmailField";
import TelNumber from "@/components/updateForm/number/TelNumber";
import Birthday from "@/components/updateForm/birthday/Birthday";
import Gender from "@/components/updateForm/gender/Gender";

export default function Register() {
  const [isFormValid, setFormValid] = useState(true);
  const { data, setData } = useContext(FormDataContext);

  async function handleData(e: any) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const newData = {
      email: data.email,
      name: data.name,
      number: data.phoneNumber,
      gender: data.gender,
    };
    setData({ ...data, name: `${data.fname} ${data.sname}` });
    try {
      const response = await api.put("/auth/update", { token, newData });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className=" min-w-screen relative flex min-h-screen flex-col items-center justify-center space-y-4 bg-gray-900 bg-[url('/bg-stars.svg')]">
      <Image
        src={"/color-sharp2.png"}
        width={560}
        height={300}
        alt=""
        className="absolute bottom-0 right-0"
      />
      <Image
        src={"/color-sharp.png"}
        width={560}
        height={300}
        alt=""
        className="absolute left-0 top-0"
      />
      <NavBar style="bg-transparent" text="Mais Notícias" route="/notices" />
      <div className="h-auto w-[40%] rounded-lg border border-gray-300/10 bg-gray-800/10 px-10 backdrop-blur-3xl">
        <form action="" className="space-y-8 py-8">
          <Name />
          <EmailField />
          <TelNumber />
          <fieldset className="flex flex-row">
            <Birthday />
            <Gender />
          </fieldset>
          <div className="flex flex-row justify-end">
            <button
              className={`text-md h-auto self-center rounded-lg px-10 py-3 font-mono transition-colors hover:bg-green-800 
                ${
                  !isFormValid
                    ? "pointer-events-none bg-red-950 text-black/80 transition-colors !duration-200"
                    : "bg-yellow-500 text-black/80"
                }`}
              onClick={handleData}
            >
              {" "}
              Enviar seus dados
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
