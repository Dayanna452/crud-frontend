import { cls } from 'app/utils/constans'
import { ButtonProps, ButtonClassesProps } from './button.interface'

export const buttonClasses: ButtonClassesProps = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-4 py-2',
    large: 'px-8 py-3 text-lg'
  },
  variant: {
    primary:
      'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white'
  }
}

export const Button = ({
  size,
  pill,
  onClick,
  variant,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cls(`
      ${buttonClasses.base}
      ${buttonClasses.size[size || 'normal']}
      ${buttonClasses.variant[variant || 'primary']}
      ${pill && buttonClasses.pill}
      ${disabled && buttonClasses.disabled}
      ${className}
  `)}
      {...props}
    >
      {props.children}
    </button>
  )
}
