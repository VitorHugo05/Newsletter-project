import { FormDataContext } from "@/context/dataContext";
import { useContext } from "react";

export default function Gender() {
  const { data, handleInputGender } = useContext(FormDataContext);

  return (
    <div className="flex w-1/2 flex-col">
      <label htmlFor="">Genero</label>
      <select
        name=""
        id=""
        placeholder="porfavor selecione um"
        className='hover:bg-gray-800" mt-2 rounded-lg border border-gray-300/10 bg-gray-500/10 px-6 backdrop-blur-sm transition-colors'
        value={data.gender}
        onChange={handleInputGender}
      >
        <option value="">Outro</option>
        <option value="masc">Masculino</option>
        <option value="fem">Femenino</option>
      </select>
    </div>
  );
}
