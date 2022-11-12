import Head from 'next/head';
import { useState } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import getLocations from '../firebase/getLocations';
import SmallCard from '../components/SmallCard';
import getLocationCategories from '../firebase/getLocationCategories';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [locationCategories, setLocationCategories] = useState([]);

  // pulls locations from collection
  getLocations.then((data) => {
    setLocations(data);
  });

  // pulls location categories from collection
  getLocationCategories.then((data) => {
    setLocationCategories(data);
  });

  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Most Popular</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {locations?.map(({ image, id, city, country, rating }) => (
              <SmallCard
                key={id}
                img={image}
                city={city}
                country={country}
                rating={rating}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {locationCategories?.map(({ image, title, id }) => (
              <MediumCard key={id} img={image} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://firebasestorage.googleapis.com/v0/b/airbnb-clone-d0c6e.appspot.com/o/images%2Flocations%2Foutdoor%20animated.webp?alt=media&token=cb4fca5a-c6c2-48c9-9944-c3f70a75cd2a'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
