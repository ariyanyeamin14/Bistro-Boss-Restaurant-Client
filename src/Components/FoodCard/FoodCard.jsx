import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const FoodCard = ({item}) => {
    const { name, image, price, recipe, _id } = item
    const {user} = useContext(AuthContext)
    const nagigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = () => {
        if(user && user.email){
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res=> {
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${name} has been saved to cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });

                      refetch()
                }
            })
        }
        else{
            Swal.fire({
                title: "Login Please !",
                text: "Do you want to login?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                    nagigate('/login', { state: { from: location } })
                }
              });
        }
    }
    return (
        <div className="card rounded-none bg-base-200 ">
            <figure >
                <img className='w-full'
                    src={image} />
            </figure>
            <p className='text-white font-semibold bg-[#111827] w-fit px-5 py-3 absolute right-2 top-2'>$ {price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">{name}</h2>
                <p className='text-[#737373] my-6'>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddToCart} className=" px-[30px] py-[20px] uppercase rounded-lg text-xl font-medium bg-[#e3e3e3d3] text-[#BB8506] btn-primary border-b-4 border-b-[#BB8506]">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;