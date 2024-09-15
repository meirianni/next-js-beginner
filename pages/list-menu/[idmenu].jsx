import { useRouter } from 'next/router';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from "react";

const idmenu = () => {

    const router = useRouter();
    const { idmenu } = router.query;

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = getCookie('token')
 
    useEffect(() => {
    // API call with promise
    axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods}`, {
        headers : {
            apiKey : "w05KkI9AWhKxzvPFtXotUva-",
            Authorization : `Bearer ${token}`
        }
    })
      .then((response) => {
        console.log(response, "response");
        
        setData(response.data.data);  // Set the fetched data in state
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);
//   console.log(data, "data");
  
//   const menuDetail = data.filter(a => a.id == idmenu)
//   console.log(menuDetail, "menuDetail");
  
  
    

    return (
        <>
        <div>
            menu id : {idmenu}
        </div>
        </>
    )

}
export default idmenu