"use client";

import React, { useRef } from 'react';
import PatnerCard from '@/components/ui/PatnerCard';
import { patners } from '@/lib/patners';
import { motion, useInView } from 'motion/react';

const PatnershipPage = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className='relative min-h-screen px-8 lg:p-20'>
            <motion.h2
                className='flex justify-center text-4xl font-bold pb-20 text-green-primary text-center'
                initial={{ opacity: 0, y: 30 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Kemitraan Kami
            </motion.h2>

            <motion.div
                ref={gridRef}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-items-center'
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
            >
                {patners.map((patner) => (
                    <motion.div
                        key={patner.id}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: "easeOut" },
                            },
                        }}
                        whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
                    >
                        <PatnerCard {...patner} />
                    </motion.div>
                ))}
            </motion.div>
        </section >
    );
};

export default PatnershipPage;