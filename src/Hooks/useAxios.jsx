import axios from "axios";


const instance = axios.create({
    baseURL: 'https://assingment-11-server-three.vercel.app',
    withCredentials:true
  });

const useAxios = () => {
    return instance
};

export default useAxios;