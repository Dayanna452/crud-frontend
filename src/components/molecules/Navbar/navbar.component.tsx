import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='relative flex w-full flex-wrap items-center justify-center bg-neutral-400 py-2 shadow-dark-mild lg:py-4'>
      <div className='flex w-full flex-wrap items-center justify-center px-3'>
        <div>
          <Link
            href='/'
            className='mx-2 my-1 flex items-center lg:mb-0 lg:mt-0'
          >
            <Image
              src='/home-icon.svg'
              width={40}
              height={40}
              alt='Picture of the author'
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
