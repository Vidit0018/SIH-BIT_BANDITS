import {apiConnector} from '../apiConnector';
import { setLoading, setToken } from '../../slices/authSlice';
import { endpoints } from '../apis';
import { setUser } from '../../slices/profileSlice';
import toast from 'react-hot-toast';


// login ------------------------------------------------
export function login(email,password,navigate) {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));

        try {
            const response = await apiConnector("POST",endpoints.LOGIN_API,{
                email,password
            });

            console.log("LOGIN API RESPONSE...", response);

            if (!response.data.success){
                throw new Error(response.data.message);
            }

            toast.success("Login successfull");
            // dispatch(setToken(response.data.token));

            const userImage = response.data?.user?.image ? response.data.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

            dispatch(setUser({...response.data.user, image:userImage}));

            // localStorage.setItem("token",JSON.stringify(response.data.token));
            localStorage.setItem("user",JSON.stringify(response.data.user));
            navigate("/")

        } catch (error) {
            console.log("LOGIN API RESPONSE...",error );
            toast.error("Login failed");
        }
        finally{
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}


//singup -------------------------------------------------
export function signUp(DOB, firstName, lastName, email, password, confirmPassword, address, pincode, governmentIdProof, navigate) {
    return async(dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST",endpoints.SIGNUP_API,{
                DOB,firstName,lastName,email,password,confirmPassword,address,pincode,governmentIdProof
            })

            console.log("SIGNUP API Response...",response);

            if(!response.data.success){
                throw new Error(response.data.message);
            }
            toast.success("Signup was successfull");
            navigate("/login");

        } catch (error) {
            console.log("SIGNUP API response...", error);
            toast.error("Signup failed");
            navigate("/signup")
        }
        finally{
            dispatch(setLoading(false));
            toast.dismiss(toastId);
        }
    }
}