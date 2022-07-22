import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { home } from '../constants/site_urls';
import { BoxLoader } from '../widget/Preloaders';

const VeriFyAccount = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [verified, setVerified] = useState(false);

    

    useEffect(()=>{
        const webtitle = "Mirage Education Dashboard";
        // console.log(webtitle)
        document.title = `Verify Account | ${webtitle}`

        determinStatus()
        
        return () => {
            document.title = webtitle
        }

        
    },)


    const determinStatus = ()=>{
        const status = {
            text: "...",
            state: ''
        }

        if (loading) {
            status.text = "Verifying Account..."
            status.state = 'loading'
        }

        if (error) {
            status.text = "Could not verify account"
            status.state = 'danger'
        }


        if (verified) {
            status.text = "Verified Account"
            status.state = 'success'
        }

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
                Your account has been verified<br/>
                <Link to={home}>
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default VeriFyAccount;