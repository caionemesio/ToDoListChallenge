import { InputFormProps } from "../../../interfaces/interfaces";

export default function InputForm({ label, id, placeholder, register, errors }: InputFormProps) {
//componente para cada input da aplicação e tratamento de erro caso o input nao seja preenchido
  return (
    <div className='flex flex-col items-center'>
      <label className='self-start  text-xs  max-md:pl-0 ' htmlFor={id}>{label}</label>
      <input {...register(id, { required: true })}
        className={`rounded-[10px] text-xs opacity-60 pl-4 mt-2  bg-lightGray w-[291px] h-[42px]   focus:outline-none appearance-none !important ${errors[id]?.type === 'required' ? 'border border-deleteButton mb-0' : 'mb-3'}`}
        id={id}
        placeholder={placeholder}
        type='text' />
      {errors[id]?.type === 'required' && <p className="text-deleteButton text-xs self-start ">{id} is required</p>}
    </div>
  )
}