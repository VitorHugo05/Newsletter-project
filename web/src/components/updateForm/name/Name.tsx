import { FormDataContext } from "@/context/dataContext";
import { useContext } from "react";

export default function Name() {
  const { data, handleInputFName, handleInputSName } =
    useContext(FormDataContext);

  return (
    <fieldset className="flex flex-col ">
      <label htmlFor="">Seu nome</label>
      <fieldset className="mt-2 flex flex-row">
        {/* fName */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Primeiro Nome"
          className="mr-4 w-1/2 rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
          value={data.fname}
          onChange={handleInputFName}
        />

        {/* lName */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Segundo Nome"
          className="w-1/2 rounded-lg border border-gray-300/10 bg-gray-500/10 px-10 backdrop-blur-sm transition-colors hover:bg-gray-800"
          value={data.sname}
          onChange={handleInputSName}
        />
      </fieldset>
    </fieldset>
  );
}
