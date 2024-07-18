import { buttonClasses } from './button.component'

export const getClassNames = (att: string | string[]) => {
  if(typeof att==='string') return buttonClasses.base
}
