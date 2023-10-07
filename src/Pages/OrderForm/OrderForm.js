import React from 'react';
import DropboxChooser from "react-dropbox-chooser";
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
const OrderForm = () => {
        const {trail} = useParams()
        console.log(trail)
    const handleFile=(files)=>{
        console.log(files)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) =>{
        console.log(data)
      }
    return (
        <div className=' bg-blue-950 text-white'>
            <h1 className='mx-10 text-5xl font-bold'>Get A Quote</h1>
            <h4 className='flex mx-10 text-xl font-semibold'>Choose the editing service you want us to do by ticking the box below<span>{
            trail =="trail-2"?
            "{Its trail}":"{One Photo 5$}"
            }</span></h4>
            <div className=' mx-10 grid grid-cols-2 mt-5 '>
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
                        <select {...register("path")}  className='border text-black mr-1' name="Path" id="">
                            <option value="">Path*</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                        <select {...register("Object_alignment")}  className='border text-black mr-1' name="Object_alignment" id="">
                            <option value="">Object Alignment*</option>
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                            <option value="center">center</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-3 mt-3'>
                        <select {...register("background")} className='border text-black mr-1' name="background" id="">
                            <option value="jpeg">Background*</option>
                            <option value="transparent">Transparent</option>
                            <option value="white">White</option>
                            <option value="colored">colored</option>

                        </select>
                        <select {...register("DPI")} className='border text-black mr-1' name="DPI" id="">
                            <option value="">DPI*</option>
                            <option value="orginal">Keep It Orginal</option>
                            <option value="72">72 DPI</option>
                            <option value="other">other</option>
                        </select>
                        <select {...register("margin")} className='border text-black mr-1' name="margin" id="">
                            <option value="">Margin*</option>
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
                    <p>If The upload btn is not working</p>
                       <input {...register("PhotoURL")} name='PhotoURL' className='w-full px-2 text-black' type="url" placeholder='Insert your drive link make sure your link is accessible to everyone*' />
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