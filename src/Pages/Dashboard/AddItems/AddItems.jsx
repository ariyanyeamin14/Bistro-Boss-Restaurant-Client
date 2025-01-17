import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa6';
import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        // console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        // console.log(res.data.data.display_url)
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            // console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} has added to menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }
    return (
        <div className='bg-[#ffffff] py-20'>
            <SectionTitle
                subTitle="What's new?"
                title='ADD AN ITEM'
            ></SectionTitle>
            <div className='bg-[#f3f3f3] p-10 my-20 w-[80%] mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl">Recipe Name</span>
                            </div>
                            <input {...register("name")} type="text" placeholder="Recipe Name" className="input input-bordered w-full text-xl" />
                        </label>
                    </div>
                    <div className='flex gap-6'>
                        {/* category */}
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl">Category</span>
                                </div>
                                <select defaultValue='default' {...register("category")}
                                    className="select select-bordered w-full text-xl">
                                    <option disabled value='default'>Select a category</option>
                                    <option value='salad'>Salad</option>
                                    <option value='soup'>Soup</option>
                                    <option value='dessert'>Dessert</option>
                                    <option value='pizza'>Pizza</option>
                                    <option value='drinks'>Drinks</option>
                                </select>
                            </label>
                        </div>
                        {/* price */}
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl">Price</span>
                                </div>
                                <input {...register("price")} type="text" placeholder="Price" className="input input-bordered w-full text-xl" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-xl">Recipe Details</span>
                            </div>
                            <textarea {...register('recipe')} className="textarea textarea-bordered text-xl h-24" placeholder="Recipe Details"></textarea>
                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-xl">Pick a file</span>
                            </div>
                            <input {...register('image')} type="file" className="file-input file-input-bordered w-full max-w-xs text-xl" />
                        </label>
                    </div>
                    <div>
                        <button className='flex bg-[#d1a054] text-xl font-bold text-white px-8 py-4 items-center'>Add Item <FaUtensils className='ml-4'></FaUtensils> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;