import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { useEffect } from "react";

interface FormData {
  facebookId: string;
  conversionApi: string;
}
interface FormProps {
  setFormRef: (formRef: any) => void;
}

export const FormFacebook: React.FC<FormProps> = ({ setFormRef }) => {
  const formMethods = useForm<FormData>();
  const { register, handleSubmit, control } = formMethods;
  const watchedFields = useWatch({ control, defaultValue: {} });

  useEffect(() => {
    setFormRef(formMethods);
  }, [formMethods, setFormRef]);

  useEffect(() => {}, [watchedFields]);

  return (
    <form className="text-black mt-8 gap-2">
      <div className="flex flex-col">
        <label
          htmlFor="facebookId"
          className="text-black text-opacity-80 font-inter text-xl font-normal leading-normal mb-1"
        >
          Pixel ID
        </label>
        <input
          {...register("facebookId")}
          type="text"
          id="facebookId"
          className="outline-none w-[555px] h-16 flex-shrink-0 border border-solid border-gray-300 rounded-lg px-4 py-2  focus:ring-orange-500 focus:border-orange-500 hover:border-orange-400 text-[#F66020] font-inter font-medium text-xl"
        />
        <label className="text-black text-opacity-50 font-inter text-base font-normal leading-6">
          Acesse seu gerenciador de eventos do Facebook. Acessar
        </label>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="conversionApi"
          className="text-black text-opacity-80 font-inter text-xl font-normal leading-normal mt-4 mb-1"
        >
          Chave de Acesso
        </label>
        <input
          {...register("conversionApi")}
          type="text"
          id="conversionApi"
          className="outline-none w-[555px] h-16 flex-shrink-0 border border-solid border-gray-300 rounded-lg px-4 py-2  focus:ring-orange-500 focus:border-orange-500 hover:border-orange-400 text-[#F66020] font-inter font-medium text-xl"
        />
        <label className="text-black text-opacity-50 font-inter text-base font-normal leading-6 mt-2">
          Você precisará gerar um token de acesso. Navegue até Pixel {">"}{" "}
          <br /> Gerenciador de Eventos {">"} Gerenciar Integrações {">"}{" "}
          Começar a <br />
          enviar eventos de servidor
        </label>
      </div>
    </form>
  );
};
