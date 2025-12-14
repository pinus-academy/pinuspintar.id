"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/about/Header';
import { motion, useInView } from 'motion/react';

const AboutUsPage = () => {
  // Refs for scroll animations
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const programRef = useRef(null);
  const kontribusiRef = useRef(null);
  const galleryRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const programInView = useInView(programRef, { once: true, margin: "-100px" });
  const kontribusiInView = useInView(kontribusiRef, { once: true, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <section className=''>
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Header />
      </motion.div>
      <motion.div 
        ref={titleRef}
        className=' bg-[#F9F9F9] py-14 lg:py-20'
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className='text-center font-bold text-3xl text-green-text'>Kolaborasi & Kontribusi</h1>
      </motion.div>

      <div className='py-16 max-w-8xl mx-auto px-6 md:py-28'>
        <motion.div 
          ref={programRef}
          className='flex flex-col lg:flex-row gap-8 justify-center'
          initial="hidden"
          animate={programInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className='flex-1/2'
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <motion.h2 
              className='text-[#566A61] text-3xl font-bold py-4'
              initial={{ opacity: 0, y: 20 }}
              animate={programInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Program Kolaboratif
            </motion.h2>
            <motion.p 
              className='text-justify text-lg text-black leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={programInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Program Kolaborasi adalah inisiatif yang dirancang untuk
              menghubungkan peserta dengan dunia industri secara langsung. Melalui program ini, peserta tidak hanya mendapatkan
              pelatihan coding yang disusun bersama mitra industri, tetapi juga berkesempatan mengikuti berbagai kompetisi inovasi
              seperti hackathon dan ideathon untuk mengasah kreativitas serta kemampuan problem-solving. Selain itu, program ini juga
              membuka peluang pertukaran mentor dengan profesional di bidangnya sehingga peserta dapat memperoleh wawasan dan pengalaman
              nyata dari praktisi industri.
            </motion.p>
          </motion.div>
          <motion.div 
            className='flex-1/2 order-first lg:order-last'
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={'/Frame Kolaboratif.png'} loading='lazy' alt='gambar3' width={630} height={390} className='w-full'/>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          ref={kontribusiRef}
          className='pt-10 flex flex-col lg:flex-row gap-8 justify-center'
          initial="hidden"
          animate={kontribusiInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className='flex-1/2 order-first'
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={'/gambar7.png'} loading='lazy' alt='gambar 7' width={630} height={390} className='w-full' />
            </motion.div>
          </motion.div>
          <motion.div 
            className='flex-1/2'
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <motion.h3 
              className='font-bold text-[#566A61] text-3xl py-4 lg:text-right'
              initial={{ opacity: 0, y: 20 }}
              animate={kontribusiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Kontribusi Pinus Pintar
            </motion.h3>
            <motion.p 
              className='lg:text-justify text-lg text-black leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={kontribusiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              PinusPintar telah memberikan dampak nyata dalam pengembangan
              talenta digital di Indonesia. Saat ini, lebih dari 200 anggota aktif tersebar di berbagai daerah, dengan 80% di antaranya
              berhasil meningkatkan keterampilan digital melalui program-program kami. Program dan komunitas PinusPintar sudah menjangkau
              lebih dari 20 kota di seluruh Indonesia,sehingga semakin banyak anak muda dapat mengakses pelatihan teknologi berkualitas.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div 
          ref={galleryRef}
          className='text-center mb-8 py-20'
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
        >
          <motion.h1 
            className='font-bold text-[32px] text-[#374F44] mb-10 lg:mb-20'
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Galeri Kami
          </motion.h1>
          <motion.div 
            className='flex flex-wrap gap-8 justify-center lg:justify-start'
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              { src: '/galleries/rafi-journey.jpeg', alt: 'rafi journey' },
              { src: '/galleries/dita-journey.jpeg', alt: 'dita journey' },
              { src: '/galleries/wisnu-journey.jpeg', alt: 'wisnu journey' },
              { src: '/galleries/imam-ig.png', alt: 'gambar 8' },
              { src: '/galleries/beasiswa.png', alt: 'gambar 9' }
            ].map((image, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 50 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <Image 
                  src={image.src} 
                  loading='lazy' 
                  alt={image.alt} 
                  width={305} 
                  height={381} 
                  className='w-40 md:w-80' 
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsPage; 