import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Navbar/Navbar';
import formpic from '../../assets/form.png'
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    


    const handleApplication = (data) => {
        const formData = new FormData();
        const date =new Date()
        const imageUrl=data.files[0]
        formData.append('image', imageUrl);
        const url=`https://api.imgbb.com/1/upload?key=7c227f1c1d671f9f92b7fe7ea0d3fa47`

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const application = {
                        name: data.name, 
                        mobile: data.mobile,
                        application: data.application,
                        image: imageData.data.url,
                        time: date
                    }
                    fetch('https://app-server-six.vercel.app/application', {
                        method:"POST",
                        headers:{
                            "content-type":"application/json"
                        },
                        body:JSON.stringify(application)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.acknowledged){
                            alert('Application Successfully Submitted')
                            navigate('/welcome')
                        }
                    })


                }

            })

    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className='my-20 text-center font-bold text-4xl text-emerald-900'>Submit Your Application from here </h1>
            </div>
            <div className='md:flex'>
                <div>
                    <img src={formpic} alt="" />
                </div>
                <div className=' mt-15 flex justify-center items-center'>
                    <form onSubmit={handleSubmit(handleApplication)} className=' w-[500px] p-10'>
                        <div className=" my-2 w-full">
                            <p>
                                <span className="">Name</span>
                            </p>
                            <input {...register("name", { required: "Name is required" })} type="text" placeholder="Enter Your Name" className=" p-3 border border-gray-500 rounded-lg w-full " />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>
                        <div className="my-2 w-full">
                            <p>
                                <span className="">Mobile Number</span>
                            </p>
                            <input {...register("mobile", { required: "Mobile Number is required" })} type='text' placeholder="Enter Mobile No " className="  p-3 border border-gray-500 rounded-lg w-full " />
                            {errors.mobile && <p className="text-red-600">{errors.mobile?.message}</p>}
                        </div>
                        <div className="my-2 w-full">
                            <p className='my-2'>Application Details:</p>
                            <textarea {...register("application", { required: "Application details is required" })} placeholder="Write Your Application" className='p-10 border border-gray-500 rounded-lg w-full'></textarea>
                            {errors.application && <p className="text-red-600">{errors.application?.message}</p>}
                        </div>
                        <div className="my-2 w-full">
                            <p className='my-2'>Enter Your Picture (OUTWARDS):</p>
                            <input type="file" {...register("files", { required: "Image Upload is required" })} accept="image/*" className='p-5 border border-gray-500 rounded-lg w-full'/>
                            {errors.files && <p className="text-red-600">{errors.files?.message}</p>}

                        </div>
                        <div>
                            <button className='border border-violet-500 text-white bg-violet-500 px-4 py-2 rounded-lg w-full my-5' type="submit"> Submit Application</button>
                        </div>

                    </form>
                </div>
            </div>


        </div>
    );
};

export default Home;
