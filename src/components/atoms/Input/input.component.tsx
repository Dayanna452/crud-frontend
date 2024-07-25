import { InputProps } from './input.interface'

export const Input = ({
  label,
  value,
  id,
  type,
  placeholder = 'placdeholder',
  ...props
}: InputProps) => {
  return (
    <span className='relative mb-3'>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        className='peer m-0 block h-[58px] w-full rounded-lg border bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-sky-500 focus:shadow-md focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary border-neutral-300 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
        {...props}
      />
      <label
        htmlFor={id}
        className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none'
      >
        {label}
      </label>
    </span>
  )
}
