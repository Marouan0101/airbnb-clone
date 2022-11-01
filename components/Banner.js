import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d0c6e.appspot.com/o/images%2Flocations%2Fforest%20animated.webp?alt=media&token=0697baf4-47d3-4341-874c-28a553d742e1'
        layout='fill'
        objectFit='cover'
      />

      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>

        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
