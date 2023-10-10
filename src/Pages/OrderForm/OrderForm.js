import React, { useContext, useEffect, useState } from 'react';
import DropboxChooser from "react-dropbox-chooser";
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const OrderForm = () => {
    const [person, setPerson] = useState([])
    const { user } = useContext(AuthContext);

    const navigate = useNavigate()

  

    




    const handleFile = (files) => {
        console.log(files)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    useEffect(() => {
        fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/users/${user?.email}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [person])

    const trailNumber = person[0]?.trail
    console.log(trailNumber)

    const onSubmit = (data) => {
        const newTrail = trailNumber - 1;
        const trail = { trail: newTrail }

        const newData = {
            email: person[0]?.email,
            item: data.item,
            file_formate: data.file_formate,
            path: data.path,
            Object_alignment: data.Object_alignment,
            background: data.background,
            DPI: data.DPI,
            margin: data.margin,
            PhotoURL: data.PhotoURL,
            massage: data.massage,
            trailNumber: newTrail,
            status: "pending"

        }
        if (user == null) {
            navigate("/login")
        }
        else {
            fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/user/${person[0]?._id}`, {
                method: "PATCH",

                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(trail)
            })
                .then(res => res.json())
                .then(data => console.log(data))


            fetch(`https://deepetch-photo-server-p7dkgndlk-mithon0.vercel.app/data`, {
                method: "POST",

                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        console.log(data)

        Swal.fire({
            title: 'Your Product added on your dashboard',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'checkOut!'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/deshboard")
            }
        })
       
    }


    return (
        <div className=' bg-blue-950 text-white'>
            <h1 className='mx-10 text-5xl font-bold'>Get A Quote</h1>

            {
                trailNumber > 0 ? <h4 className='text-red-700 flex mx-10 text-xl font-semibold'>Free Trail for new members----trails aviliable "{trailNumber}"</h4> : <h4 className='flex mx-10 text-xl font-semibold'>Choose the editing service you want us to do by ticking the box below</h4>
            }

            <div className=' mx-10 grid md:grid-cols-2 mt-5 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("item")} className='border px-2 py-1 text-black ' name="item" id="">
                        <option value="remove_background">Remove BackGround</option>
                        <option value="Ghost_Mannequin">Ghost Mannequin</option>
                        <option value="Color_Correction">Color Correction</option>
                        <option value="Retuching">Retuching</option>
                    </select>
                    <div className='grid grid-cols-3 mt-3'>
                        <select {...register("file_formate")} className='border text-black mr-1' name="file_formate" id="">
                            <option value="jpeg">File Format*</option>
                            <option value="jpeg">jpeg</option>
                            <option value="PNG">PNG</option>
                            <option value="TIFF">TIFF</option>
                            <option value="PSD">PSD</option>
                        </select>
                        <select {...register("path")} className='border text-black mr-1' name="Path" id="">
                            <option value="yes">Path*</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                        <select {...register("Object_alignment")} className='border text-black mr-1' name="Object_alignment" id="">
                            <option value="center">Object Alignment*</option>
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                            <option value="center">center</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-3 mt-3'>
                        <select {...register("background")} className='border text-black mr-1' name="background" id="">
                            <option value="white">Background*</option>
                            <option value="transparent">Transparent</option>
                            <option value="white">White</option>
                            <option value="colored">colored</option>

                        </select>
                        <select {...register("DPI")} className='border text-black mr-1' name="DPI" id="">
                            <option value="orginal">DPI*</option>
                            <option value="orginal">Keep It Orginal</option>
                            <option value="72">72 DPI</option>
                            <option value="other">other</option>
                        </select>
                        <select {...register("margin")} className='border text-black mr-1' name="margin" id="">
                            <option value="yes">Margin*</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                    </div>
                    <div className=' bg-white mt-5 text-black'>
                        <DropboxChooser
                            appKey={'clwdj3k691t98qc'}
                            success={handleFile}
                            cancel={() => console.log("close")}

                        >
                            <div className="dropbox-button">Upload or chosse file form dropbox</div>
                        </DropboxChooser>

                    </div>
                    <div>
                        <p>If The upload btn is not working Upload photo in you drive and share this link</p>
                        <input required {...register("file")} name='file' className='w-full px-2 text-black' type="file" placeholder='Insert your drive link make sure your link is accessible to everyone*' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="massage"></label>
                        <input required {...register("massage")} name='massage' className='w-full h-16 px-2 text-black' type="text" placeholder='Your Massage*' />
                    </div>
                    <div className='mt-5 mb-10'>
                        <button className='w-full bg-orange-700'>Send</button>
                    </div>
                </form>
                <div>

                </div>
            </div>
        </div>
    );
};

export default OrderForm;