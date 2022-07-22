import React, { useEffect } from 'react'

const VeriFyAccount = () => {

    useEffect(()=>{
        const webtitle = "Mirage Education Dashboard";
        // console.log(webtitle)
        document.title = `Verify Account | ${webtitle}`

        return () => {
            document.title = webtitle
        }
    },)
  return (
    <div>
        VeriFy Account Page
    </div>
  )
}

export default VeriFyAccount;