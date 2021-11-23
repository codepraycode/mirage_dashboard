import { useNavigate } from 'react-router';

const Navigator = (path) => {
    let navigate = useNavigate();

    // useEffect(()=>{
    //     navigate('/signin');
    // })
    console.log(`path to ${path}`)
    navigate(`${path}`)
    return
};

export default Navigator;