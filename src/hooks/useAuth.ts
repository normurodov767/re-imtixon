"use client";
import { baseUrl } from '@/utils/url';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import  {  useState } from 'react'

function useAuth() {
    const [error, setError] = useState<string>("")// this to set error
    const [loading, setLoading] = useState<boolean>(false) // this to set loading 
    const router = useRouter()//this is to push user when status is perfect




    ///////////////////////////////////////
    async function login(phone: string, password: string) {
        try {
          setLoading(true);
          const res = await axios.post(baseUrl + "auth/login/", {
            phone,
            password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (res.status === 200) {
            localStorage.setItem("token", res.data.access);
            router.push("/dashboard");
          }
      
          console.log(res);
        } catch (error: any) {
          alert('Account is not verified');
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
      
    ///////////////////////////////////////
    async function Register( password:string,name:string, phone:string,address:string,){
        try {
            let res = await axios.post(baseUrl + "auth/register-library/",{
                user:{
                    password,
                    phone, 
                    name,
                    
                },
                library:{
                    address
                },
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.status);
            console.log('Response data:', res.data);
            if (res.status === 201) {
                router.push("/dashboard")
                localStorage.setItem ("token",res.data.token)
            }
            console.log(res);
        } catch (error:any) {
                console.log(error ,"moya mama");
                
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    ///////////////////////////////////////

    function logOut(){
        // logOut function realized in navbar
    }



  return {login,logOut,error,loading,Register};
}

export default useAuth