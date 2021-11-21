import React,{useEffect} from 'react';
import { useNavigate } from 'react-router';

const Page404 = () => {
    let navigate = useNavigate();
    
    useEffect(()=>{
        navigate('/signin');
    })
    return (
        <div>
            No Such Page
        </div>
    );
};

export default Page404;