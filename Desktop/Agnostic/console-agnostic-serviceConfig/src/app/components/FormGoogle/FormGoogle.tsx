import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { useEffect } from "react";
interface FormData {
  googleId: string;
  accessKey: string;
}
interface FormProps {
  setFormRef: (formRef: any) => void;
}
export const FormGoogleAnalytics: React.FC<FormProps> = ({ setFormRef }) => {
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
          google ID
        </label>
        <input
          {...register("googleId")}
          type="text"
          id="googleId"
          name="googleId"
          className="outline-none w-[555px] h-16 flex-shrink-0 border border-solid border-gray-300 rounded-lg px-4 py-2  focus:ring-orange-500 focus:border-orange-500 hover:border-orange-400 text-[#F66020] font-inter font-medium text-xl"
        />
        <label className="text-black text-opacity-50 font-inter text-base font-normal leading-6 mt-2">
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
          {...register("accessKey")}
          type="text"
          id="accessKey"
          name="accessKey"
          className="outline-none w-[555px] h-16 flex-shrink-0 border border-solid border-gray-300 rounded-lg px-4 py-2  focus:ring-orange-600 focus:border-orange-600 hover:border-orange-400 text-[#F66020] font-inter font-medium text-xl"
        />
        <label className="text-black text-opacity-50 font-inter text-base font-normal leading-6 mt-2">
          Você precisará gerar um token de acesso. Navegue até Pixel {">"}{" "}
          <br /> Gerenciador de Evnetos {">"} Gerenciar Integrações {">"}{" "}
          Começar a <br />
          enviar eventos de servidor
        </label>
      </div>
    </form>
  );
};
