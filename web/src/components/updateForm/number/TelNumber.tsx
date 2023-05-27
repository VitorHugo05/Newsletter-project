import { FormDataContext } from "@/context/dataContext";
import { useContext } from "react";
import InputMask from "react-input-mask";

export default function TelNumber() {
  const { data, handleInputNumber } = useContext(FormDataContext);

  return (
    <fieldset className="flex flex-col ">
      <label htmlFor="">Número de Whatsapp</label>
      <InputMask
        type="tel"
        mask="(99) 99999-9999"
        placeholder="(99) 9999-9999"
        pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
        className="mt-2 rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
        onChange={handleInputNumber}
        value={data.phoneNumber}
      />
    </fieldset>
  );
}
