import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
    const {userInfo}=useContext(AuthContext)
    // console.log(userInfo)
    return (
        <div>
            {
                userInfo.map(user=><>
                <div className='mx-auto'>
                    <FaUser className='text-center mx-auto text-7xl border rounded-full'></FaUser>
                    <h1 className='text-center text-2xl font-bold'>{user.name}</h1>
                    <h1 className='text-center font-bold'>{user.email}</h1>
                    <h1 className='text-center font-bold'>date of birth {user.date_of_birth}</h1>
                    <h1 className='text-center font-bold'>Gender: {user.gender}</h1>
                    <div className='flex justify-center'>
                    <button className='p-2 bg-red-600 hover:bg-blue-800 active:bg-black text-white '>Edit Your Profile</button>
                    </div>
                </div>
                </>)
            }
        </div>
    );
};

export default Profile;