import { InputFormProps } from "../../../interfaces/interfaces";

export default function InputForm({ label, id, placeholder, register, errors }: InputFormProps) {
  console.log(errors)
  return (
    <div className='flex flex-col items-center'>
      <label className='self-start pl-7 text-xs  ' htmlFor={id}>{label}</label>
      <input {...register(id, { required: true })}
        className={`rounded-[10px] text-xs opacity-60 pl-4 mt-2  bg-lightGray w-[291px] h-[42px] focus:outline-none ${errors[id]?.type === 'required' ? 'border border-deleteButton mb-0' : 'mb-3'}`}
        id={id}
        placeholder={placeholder}
        type='text' />
      {errors[id]?.type === 'required' && <p className="text-deleteButton text-xs self-start pl-7">{id} is required</p>}
    </div>
  )
}