import { LocationMarkerIcon } from '@heroicons/react/solid';
import React from 'react';
import summary from '../../images/summary.jpg';

const BusinessSummary = () => {
    return (
        <div style={{ backgroundImage: `url('${summary}')`}} className='bg-no-repeat bg-cover bg-center'>
            <div className='md:px-20 py-12'>
                <p className='text-3xl font-bold text-center md:w-1/2 mx-auto'>Our professional team works to increase productivity and cost effectiveness on the market</p>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-12 mt-16'>
                    <div className='flex flex-col items-center'>
                        <div className='w-12 mb-4 Techfly'></div>
                        <p className='font-bold text-5xl text-yellow-500'>250+</p>
                        <p className='text-2xl pt-2 Techfly'>Trsusted Customers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-12 mb-4 Techfly'></div>
                        <p className='font-bold text-5xl text-yellow-500'>90+</p>
                        <p className='text-2xl pt-2 Techfly'>Store Location</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-12 mb-4 Techfly'></div>
                        <p className='font-bold text-5xl text-yellow-500'>350+</p>
                        <p className='text-2xl pt-2 Techfly'> Reviews </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-12 mb-4 Techfly'></div>
                        <p className='font-bold text-5xl text-yellow-500'>50+</p>
                        <p className='text-2xl pt-2 Techfly'> Awards </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;