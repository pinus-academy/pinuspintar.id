"use client";

import React  from 'react';
import PatnerCard from '@/components/ui/PatnerCard';
import { patners } from '@/lib/patners';

const PatnershipPage = () => {
    return (
        <section className='relative min-h-screen p-20'>
            <h2 className='flex justify-center text-4xl font-bold pb-20 text-green-primary'>Kemitraan Kami</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 justify-items-center'>
                {patners.map((patner) => (
                    <PatnerCard key={patner.id} {...patner}/>
                ))}
            </div>
        </section >
    );
};

export default PatnershipPage; 