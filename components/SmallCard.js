import Image from 'next/image';

const SmallCard = ({ img, city, country, rating }) => {
  return (
    <div className='flex items-center  m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out'>
      {/* Left */}
      <div className='relative h-16 w-16'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
        />
      </div>

      {/* middle */}
      <div className='flex-grow'>
        <h2>{city}</h2>
        <h3 className='text-gray-500'>{country}</h3>
      </div>

      {/* right */}
      <div className='pr-4'>
        {rating}
        <span className='text-gray-400 hidden lg:inline'> / 5</span>
      </div>
    </div>
  );
};

export default SmallCard;
