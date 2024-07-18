export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder?: string
  type: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}