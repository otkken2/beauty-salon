'use client';
import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import MainVisual from './_components/top/MainVisual';
import SlideHeading from './_components/SlideHeading';

const words: string[] = ['N', 'E', 'W', 'S', 'H', 'O', 'G', 'E']

const Home = () => {

  return (
    <main className=''>
      <MainVisual />
      <section className='bg-red-300 pt-12 pb-[30px] h-[200vh]'>
        <div>
          <SlideHeading words={words} />
        </div>
      </section>
    </main>
  );
};

export default Home;