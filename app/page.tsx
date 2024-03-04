"use client";
import { useForm, SubmitHandler } from "react-hook-form";
export default function Home() {
  type Inputs = {
    name: string;
    cpf: string;
    birthDate: string;
    phone: string;
    motherName: string;
    cep: string;
    state: string;
    city: string;
    address: string;
    district: string;
    number: string;
    complement: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleFromSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="bg-custom-bg-100 text-custom-white-100 flex min-h-screen flex-col items-center justify-between">
      <div className=" bg-white flex justify-center w-[760px] mt-[52px] ">
        {/* Form */}
        <form onSubmit={handleSubmit(handleFromSubmit)}>
          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Nome Completo
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="mateus souza"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              CPF
            </label>
            <input
              {...register("cpf", { required: true })}
              type="text"
              placeholder="898.811.514-73"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Data de Nascimento
            </label>
            <input
              {...register("birthDate", { required: true })}
              type="text"
              placeholder="04/08/2006"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Contato
            </label>
            <input
              {...register("contact", { required: true })}
              type="text"
              placeholder="(67) 98951-8118"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              {" "}
              Nome da Mão
            </label>
            <input
              {...register("motherName", { required: true })}
              type="text"
              placeholder="Josefa Isabela"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          {/* Select State */}
          {/* Select City */}

          {/* Endereço */}

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Endereço
            </label>
            <input
              {...register("address", { required: true })}
              type="text"
              placeholder="Rua Amarilis"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Bairro
            </label>
            <input
              {...register("district", { required: true })}
              type="text"
              placeholder="Residencial Nelson Trad"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Número
            </label>
            <input
              {...register("number", { required: true })}
              type="text"
              placeholder="314"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Complemento
            </label>
            <input
              {...register("complement", { required: true })}
              type="text"
              placeholder="Opcional"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              E-mail
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="caue_ian_araujo@sobraer.com.br"
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          {/* Select Escolaridade */}

          {/* Senhas */}

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Senha
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder=""
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />
          </div>

          <div className="flex flex-col border-slate-600 w-[564px] pt-11">
            <label htmlFor="" className="text-xs font-semibold mb-2">
              Confirmar senha
            </label>
            <input
              {...register("confirmPassword", { required: true })}
              type="password"
              placeholder=""
              maxLength={100}
              minLength={1}
              className="border border-custom-white-200 rounded-lg p-4 gap-[10px] font-normal text-base"
            />

            {/* toggle button */}

            {/* Submit */}
            <button type="submit"> Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
