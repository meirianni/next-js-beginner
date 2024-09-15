import axios from 'axios';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from "react";

export const getServerSideProps = ({ req, res }) => {
  const token = getCookie('token', { req, res });

  // Redirect to login page if the token doesn't exist
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // Continue rendering the page if token is present
  return {
    props: {}, // pass any required props here
  };
};

const listMenu = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = getCookie('token')
 
    useEffect(() => {
    // API call with promise
    axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
        headers : {
            apiKey : "w05KkI9AWhKxzvPFtXotUva-",
            Authorization : `Bearer ${token}`
        }
    })
      .then((response) => {
        setData(response.data.data);  // Set the fetched data in state
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
//   console.log(data, "dat");
  
    return <>
    <div>
        {data.map((item, index) => (
        <Link href={`/list-menu/${item.id}`}>
          <div key={index}>
            <img style={{width : "200px", height : "200px"}} src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
          </div>   
        </Link>
        ))}
    </div>
    </>
}

export default listMenu