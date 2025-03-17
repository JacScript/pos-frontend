import React, { useState } from "react";
import backimg from "../assets/images/restaurant-img.jpg";
import logo from "../assets/images/logo.png";
import { useMutation } from "@tanstack/react-query";
import { login } from "../https/index";
import { enqueueSnackbar } from "notistack";
import { useHistory} from "react-router-dom"
import { useDispatch} from "react-redux";
import { setUser } from "../redux/slices/userSlice";
const Auth = () => {
   const dispatch = useDispatch()
   const history = useHistory();
   const [formData , setFormData ] = useState({
    phoneNumber : '',
    password : ''
   });

  
   const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate(formData); 
   }

   const loginMutation = useMutation({
    mutationFn: (reqData) => login(reqData),
    onSuccess: (res) => {
      const {data } = res;
      console.log(data);
      const {_id, username, phoneNumber, role, status,img } = data.data;
      dispatch(setUser({_id, username, phoneNumber, role, status,img }))
      enqueueSnackbar(data.message, { variant: "success" });
      history.push("/")
    },
    onError: (error) => {
       const { response } = error;
       enqueueSnackbar(response.data.message, { variant: "error" });
    },
   })


  return (
    <section
      className="min-w-screen min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backimg})` }} // ✅ Correctly apply background image
    >
      {/* Dark Overlay to Reduce Brightness */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <form>
        <div className="h-[350px] w-[400px] bg-black bg-opacity-75 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <div className="flex flex-col justify-center items-center mb-1">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-full border border-white" />

            <h1 className="text-white text-2xl font-semibold mb-2">LOG IN</h1>
          </div>

          <div className="flex flex-col w-full">
            <div>
              <label className="text-[#f5f5f5] mb-9">Enter your number:</label>
              <input
                // value={}
                onChange={handleChange}
                required
                name="phoneNumber"
                type="number"
                placeholder="Enter your number"
                className="p-2 mb-3 rounded-md outline-none  w-full border border-gray-300 focus:border-white"
              />
            </div>
            <div>
              <label className="text-[#f5f5f5] mb-1">Enter your password:</label>
              <input
              onChange={handleChange}
              required
              name="password"
                type="password"
                placeholder="Enter your password"
                className="p-2 rounded-md outline-none border w-full border-gray-300 focus:border-white"
              />
            </div>
            <button 
             onClick={handleSubmit}
            className="bg-[#f6b100] text-white p-2 uppercase font-extrabold rounded-md mt-5">
              Log In
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};


export default Auth;
