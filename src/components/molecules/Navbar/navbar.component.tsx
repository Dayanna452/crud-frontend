import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className='relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4'>
      <div className='flex w-full flex-wrap items-center justify-between px-3'>
        <div>
          <a className='mx-2 my-1 flex items-center lg:mb-0 lg:mt-0' href='#'>
            <Image
              src='../public/logo.png'
              width={500}
              height={500}
              alt='Picture of the author'
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
