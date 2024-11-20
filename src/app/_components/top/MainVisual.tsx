import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import styles from '../../page.module.css';

const MainVisual = () => {
  return (
    <section className='relative'>
      <h1 className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
        <Image alt='ALBUM' src="/top-logo-new.png" width={391} height={82} />
      </h1>
      <div className='text-white font-sans absolute bottom-10 z-10 left-1/2 flex flex-col items-center bg-black/50 backdrop-blur-sm p-1'>
        <span className='tracking-widest font-thin'>scroll</span>
        <div className={`${styles.is_animation_scrollLine} ${styles.scroll_line} w-[1px] h-[100px] bg-black`}>
        </div>
      </div>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 4500 }}
        loop={true}
        className='min-h-screen [clip-path:polygon(0%_10%,100%_0%,100%_90%,0%_100%)]'
      >
        <SwiperSlide className='relative min-h-screen'>
          <Image src="/mainImg1.webp" alt="Image 1" layout='fill' objectFit='cover' />
        </SwiperSlide>
        <SwiperSlide className='relative min-h-screen'>
          <Image src="/mainImg2.webp" alt="Image 2" layout='fill' objectFit='cover' />
        </SwiperSlide>
        <SwiperSlide className='relative min-h-screen'>
          <Image src="/mainImg3.webp" alt="Image 3" layout='fill' objectFit='cover' />
        </SwiperSlide>
        {/* 追加のスライド */}
      </Swiper>{/**メインビジュアルとなるHERO */}
    </section>
  )
}

export default MainVisual