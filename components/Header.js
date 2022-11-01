import Image from 'next/image';
import logo from '../images/logo.png';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src={logo}
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle - Search */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:pl-5 md:pr-2 md:shadow-sm md:space-x-1'>
        <input
          className='bg-transparent flex-grow outline-none text-gray-600'
          type='text'
          placeholder='Search'
        />
        <MagnifyingGlassIcon className='hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex' />
      </div>

      {/* Right */}
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden cursor-pointer md:inline'>Become a host </p>
        <GlobeAltIcon className='h-6 cursor-pointer' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <Bars3Icon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
};

export default Header;
