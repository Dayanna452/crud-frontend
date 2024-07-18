import { Footer } from 'app/components/molecules/Footer/footer.component'
import { Navbar } from 'app/components/molecules/Navbar/navbar.component'

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
