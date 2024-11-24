import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUp } from "../../services/operations/authAPI";
import { FaUser, FaLock, FaAddressCard } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsCalendarDate } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";

function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    DOB: "",
    address: "",
    pincode: "",
    governmentIdProof: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword, DOB, address, pincode, governmentIdProof } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Add your password validation logic here

    const signupData = { ...formData };

    // Dispatch signup data or actions here
    console.log(signupData);

    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      DOB: "",
      address: "",
      pincode: "",
      governmentIdProof: ""
    });
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        {/* Name Fields */}
        <div className="flex gap-x-4">
          {/* First Name */}
          <label style={{ position: "relative" }}>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <FaUser style={{ color: "grey", position: "absolute", top: "calc(49%)", left: "2.85%", fontSize: "20px" }} />
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", paddingLeft: "35px"
              }}
              className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] text-richblack-5"
            />
          </label>
          {/* Last Name */}
          <label style={{ position: "relative" }}>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <FaUser style={{ color: "grey", position: "absolute", top: "calc(49%)", left: "2.85%", fontSize: "20px" }} />
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", paddingLeft: "35px"
              }}
              className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] text-richblack-5"
            />
          </label>
        </div>

        {/* Email address */}
        <label className="w-full" style={{position:"relative"}}>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <SiGmail style={{color:"grey",position:"absolute",top:"calc(53%)",left:"1.85%",fontSize:"20px"}}/>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",paddingLeft:"35px"
            }}
            className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] text-richblack-5"
          />
        </label>

        {/* DOB */}
        <label style={{ position: "relative" }}>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Date of Birth <sup className="text-pink-200">*</sup>
          </p>
          <BsCalendarDate style={{ color: "grey", position: "absolute", top: "calc(53%)", left: "1.85%", fontSize: "20px" }} />
          <input
            required
            type="date"
            name="DOB"
            value={DOB}
            onChange={handleOnChange}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", paddingLeft: "35px"
            }}
            className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] text-richblack-5"
          />
        </label>

        {/* Address */}
        <label style={{ position: "relative" }}>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Address <sup className="text-pink-200">*</sup>
          </p>
          <FaAddressCard style={{ color: "grey", position: "absolute", top: "calc(53%)", left: "1.85%", fontSize: "20px" }} />
          <input
            required
            type="text"
            name="address"
            value={address}
            onChange={handleOnChange}
            placeholder="Enter address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", paddingLeft: "35px"
            }}
            className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] text-richblack-5"
          />
        </label>

        {/* Pincode */}
        <label style={{ position: "relative" }}>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Pincode <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="pincode"
            value={pincode}
            onChange={handleOnChange}
            placeholder="Enter pincode"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", paddingLeft: "35px"
            }}
            className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] text-richblack-5"
          />
        </label>

        {/* Government ID Proof */}
        <label style={{ position: "relative" }}>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Government ID Proof <sup className="text-pink-200">*</sup>
          </p>
          <FiFileText style={{ color: "grey", position: "absolute", top: "calc(53%)", left: "1.85%", fontSize: "20px" }} />
          <input
            required
            type="text"
            name="governmentIdProof"
            value={governmentIdProof}
            onChange={handleOnChange}
            placeholder="Enter Government ID Proof (Aadhaar ID)"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", paddingLeft: "35px"
            }}
            className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] text-richblack-5"
          />
        </label>


        {/* Password fields  */}
        <div className="flex gap-x-4">
          <label className="relative" style={{position:"relative"}}>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <FaLock style={{color:"grey",position:"absolute",top:"calc(52%)",left:"4.85%",fontSize:"20px"}}/>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                paddingLeft:"35px"
              }}
              className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative" style={{position:"relative"}}>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <FaLock style={{color:"grey",position:"absolute",top:"calc(52%)",left:"4.85%",fontSize:"20px"}}/>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",paddingLeft:"35px"
              }}
              className="w-full rounded-[0.5rem] bg-blue-50 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-green-200 hover:bg-green-300 py-[8px] px-[12px] font-medium text-richblack-900 transition-all duration-200 ease-linear"
        >
          Create Account
        </button>

        <div className="flex items-center gap-2">
            <div className="h-[1px] bg-black w-full"></div>
            <div>OR</div>
            <div className="h-[1px] bg-black w-full"></div>
        </div>

        <button type="button" className="login-with-google-btn" >
            Sign in with Google
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
