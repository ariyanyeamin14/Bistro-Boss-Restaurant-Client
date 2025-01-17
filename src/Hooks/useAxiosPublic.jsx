import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-peach-beta.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;