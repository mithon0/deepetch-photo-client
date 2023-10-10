import React from 'react';
import DashboardNav from '../../Shared/DeshboardNav/DashboardNav';
import { Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div>
            <h1 className='p-2 text-center bg-orange-400 text-xl text-white f2'>WellCome To dashboard</h1>
            <div className='grid grid-cols-4'>
                <div>
                    <DashboardNav/>
                </div>
                <div className='col-span-3'>
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Deshboard;