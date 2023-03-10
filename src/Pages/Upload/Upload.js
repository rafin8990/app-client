import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Upload = () => {
    const updatedData = useLoaderData();
    const { _id } = updatedData;
    const navigate = useNavigate()



    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleUpdate = (data) => {
        const formData = new FormData();
        const picture = data.picture[0]
        formData.append('image', picture);

        fetch('https://api.imgbb.com/1/upload?key=7c227f1c1d671f9f92b7fe7ea0d3fa47', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(updateData => {
                if (updateData.success) {

                    const pictureurl ={picture: updateData.data.url}

                    fetch(`https://app-server-six.vercel.app/update/${_id}`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(pictureurl)
                    })
                        .then(res => res.json())
                        .then(inwordData => {
                            if (inwordData.acknowledged) {
                                alert('Your Inword Image was Submitted Successfully')
                                navigate(`/allapplication`)
                            }
                        })

                }


            })
    }

    return (
        <div className='md:h-[600px] flex justify-center items-center'>
            <form onSubmit={handleSubmit(handleUpdate)} className='md:w-1/3  p-10 border rounded-lg shadow-lg' >
                <div className="my-2 w-full">

                    <p className='my-2'>Enter Your Picture (INWARDS):</p>
                    <input {...register("picture")} accept="image/*" className='p-5 border border-gray-500 rounded-lg w-full' placeholder='' type="file" />
                    {errors.picture && <p className="text-red-600">{errors.picture?.message}</p>}

                </div>
                <div>
                    <button className='border border-violet-500 text-white bg-violet-500 px-4 py-2 rounded-lg w-full my-5' type="submit">Upload Picture</button>
                </div>

            </form>
        </div>
    );
};

export default Upload;