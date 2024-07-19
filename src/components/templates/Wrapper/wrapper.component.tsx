import { Footer } from 'app/components/molecules/Footer/footer.component'
import { Navbar } from 'app/components/molecules/Navbar/navbar.component'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return (
    <div {...props}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
