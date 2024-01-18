import { IoIosPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {useForm} from "react-hook-form";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState,
        reset
    }=useForm()
    const {errors}=formState;

    //
    const{refetch} = useQuery({
        queryKey:["GETDATA"],
    })

    const useApiCall = useMutation({
        mutationKey:["POST_CATEGORY_MANAGECATEGORY"],
        mutationFn:(payload)=>{
            return axios.post("http://localhost:8089/category/save",payload)
        },onSuccess: () => {
            reset();
            refetch();
        }
    })

    const onSubmit=(value ) => {
        useApiCall.mutate(value)
    }

    return(<>
            <div className={"register-main "}>
                <div className={"wrapper bg-amber-800"}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Register</h1>
                        <div className={"input-box"}>
                            <input type={"text"} placeholder={"Name"} {...register('username', { required: 'Name is required' })} />
                            <IoIosPerson  className={"icon"}/>
                        </div>
                        <div className={"input-box"}>
                            <input type={"email"} placeholder={"Email"} {...register("email")}/>
                            <MdEmail className={"icon"}/>
                        </div>
                        <div className={"input-box"}>
                            <input type={"password"} placeholder={"Password"} {...register("password")}/>
                            {/*<FaLock className={"icon"}/>*/}
                        </div>
                        <div className={"input-box"}>
                            <input type={"password"} placeholder={"Confirm Password"} required/>
                            {/*<FaLock className={"icon"}/>*/}
                        </div>
                        <button type={"submit"}> Register</button>
                        <div className={"register-link"}>
                            <p>Already have an account? <a href={"/LoginForm"}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
    </>)
}
export default RegisterForm