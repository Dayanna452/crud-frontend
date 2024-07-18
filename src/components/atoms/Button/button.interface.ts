export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  size?: 'small' | 'normal' | 'large'
  variant?: 'primary' | 'secondary' | 'danger'
  pill?: boolean
}

export interface SizesProps {
  small: string
  normal: string
  large: string
}

export interface VariantProps {
  primary: string
  secondary: string
  danger: string
}

export interface ButtonClassesProps {
  base: string
  disabled: string
  pill: string
  size: SizesProps
  variant: VariantProps
}
