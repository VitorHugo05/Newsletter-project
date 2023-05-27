"use client";

import { ChangeEvent, ReactNode, createContext, useState } from "react";

interface FormDataContextProps {
  setData: any;
  data: {
    fname: string;
    sname: string;
    birthday: string;
    name: string;
    email: string;
    phoneNumber: string;
    gender: string;
  };
  handleInputFName: (e: any) => void;
  handleInputSName: (e: any) => void;
  handleInputEmail: (e: any) => void;
  handleInputNumber: (e: any) => void;
  handleInputBirthday: (e: any) => void;
  handleInputGender: (e: any) => void;
}

interface formDataProps {
  children: ReactNode;
}
export const FormDataContext = createContext({} as FormDataContextProps);

export function FormData(props: formDataProps) {
  let [data, setData] = useState({
    fname: "",
    sname: "",
    birthday: "",
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });

  function handleInputFName(e: ChangeEvent<HTMLInputElement>) {
    const fname = e.target.value;
    setData({ ...data, fname });
  }

  function handleInputSName(e: ChangeEvent<HTMLInputElement>) {
    const sname = e.target.value;
    setData({ ...data, sname });
  }

  function handleInputEmail(e: ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    console.log(email);
    setData({ ...data, email });
  }

  function handleInputNumber(e: ChangeEvent<HTMLInputElement>) {
    const phoneNumber = e.target.value;
    console.log(phoneNumber);
    setData({ ...data, phoneNumber });
  }

  function handleInputBirthday(e: ChangeEvent<HTMLInputElement>) {
    const birthday = e.target.value;
    setData({ ...data, birthday });
  }

  function handleInputGender(e: ChangeEvent<HTMLSelectElement>) {
    const gender = e.target.value;
    setData({ ...data, gender });
  }

  return (
    <FormDataContext.Provider
      value={{
        setData,
        data,
        handleInputFName,
        handleInputSName,
        handleInputEmail,
        handleInputNumber,
        handleInputBirthday,
        handleInputGender,
      }}
    >
      {props.children}
    </FormDataContext.Provider>
  );
}
