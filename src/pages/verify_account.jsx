import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VerifyUserRequest } from '../constants/requests';
import { signin, home } from '../constants/site_urls';
import StoreContext from '../context';
import { BoxLoader } from '../widget/Preloaders';

const VeriFyAccount = () => {
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [verified, setVerified] = useState(false);


    const { logoutUser } = useContext(StoreContext)

    


    const handleVerification = async()=>{
        // console.log(location);
        if (loading){
            const { search } = location;

            const token = search.substring(search.indexOf('=') + 1,)

            const res = await VerifyUserRequest(null, token)

            const { ok, data } = res

            if (ok) {
                setVerified(() => true)
                setError(() => null)
            } else {
                setError(() => data?.message||"Could not validate account")
            }
        }
        
        setLoading(()=>false)


    }
    

    useEffect(()=>{
        const webtitle = "Mirage Education Dashboard";
        // console.log(webtitle)
        document.title = `Verify Account | ${webtitle}`

        handleVerification()
        
        return () => {
            document.title = webtitle
        }

        
    },)


    const determinStatus = ()=>{
        const status = {
            text: "...",
            state: ''
        }

        if (error !== null) {
            status.text = error //"Could not verify account"
            status.state = 'danger'
        }


        if (verified) {
            status.text = "Verified Account"
            status.state = 'success'
        }


        if (loading) {
            status.text = "Verifying Account..."
            status.state = 'loading'
        }

        return status

    }
    
    const status = determinStatus()

    return (
        <div className="bare_page">
            <div className="brand">
                <span>Mirage Education Dashboard</span>
            </div>

            <h3>Account Verification</h3>

            
            <BoxLoader 
                {...status}
            />

            <div className='text-center'>
                {
                    
                    verified ?
                    <>
                        Your account has been verified
                        <br />
                        <Link to={signin} onClick={
                            ()=>{
                                logoutUser()
                            }
                        }>
                            Go Home
                        </Link>
                    </>
                    
                    :
                    
                    error ?
                    <>
                        <Link to={home} onClick={(e)=>{
                            e.preventDefault();
                            setLoading(()=>true)
                        }}>
                            Try Again
                        </Link>
                    </>
                    :
                    null
                    
                }

                
                
            </div>
        </div>
    )
}

export default VeriFyAccount;