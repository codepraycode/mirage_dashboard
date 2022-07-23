import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';

// Widgets
import Card from '../widget/card';
import { Loading } from '../widget/Preloaders';

// Utils
import {computer_img} from '../constants/filepaths';
// Context
import StoreContext from '../context';

const Computers = ({slots}) => {

  // console.log(slots)
  return (
    <>
      {
        !slots || slots.length === 0 ?

          <p className="text-center text-muted" style={{ width: '100%' }}>

            <span >
              No Engaged Computer
            </span>

          </p>
        :


        <div className="comp-lists">
          {
            slots.map((slot,i)=>{
              return (
                <Card className="comp" key={i}>

                  <div className="comp_content">
                    <div
                      className="comp_icon"
                      style={{ backgroundImage: `url('${computer_img}')` }}
                    ></div>

                    <div className="comp_details">
                      <p className='lead'>{slot.host_name}</p>
                      <p>{slot.host_model}</p>
                      <p>{slot.host_os}</p>
                    </div>

                  </div>


                  <div className="comp_cta">

                    <a href='/'>
                      View
                    </a>
                  </div>



                </Card>
              )
            })
          }
          

        </div>

      }
      
    </>
  )
}




const SchoolKey = ({value}) => {

  const [copied,setCopied] = useState(false);


  let state = ''

  if (!value){
    state = 'disabled'
  }else if(copied){
    state = 'copied'
  }

  return (
    <div className="box bg-default">

      <div className="p-10 w-40 bg-white flex align-center">

        <div className="text-primary p-10 mr-1 text-center">
          <i className="fas fa-key"></i>
        </div>

        <span> School Key</span>
      </div>

      <p className="w-60 text-right">

        <span >
          {value || '******************'}
        </span>



        <span 
          className={`mx-2 safe copy-icon ${state}`}
          onClick={() => {
            if(!value) return

            setCopied(()=>true)
         }}>
          <i className="fas fa-copy"></i>
        </span>


      </p>

    </div>
  )
}



const Credentials = () => {

  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  // const [slots, setSlots] = useState(null);


  const {currentSchool:school,slots, loadSlots} = useContext(StoreContext);


  const {id} = useParams();




  const fetchSlots = async() => {

    await loadSlots(id)

    setLoading(()=>false)
  }


  useEffect(() => {

    if (loading) {
      fetchSlots()
    }

  // eslint-disable-next-line
  }, [loading])



  // console.log(slots);
  return (
    <>
      
      <p className="mb-1">Credentials</p>

      <SchoolKey value={school?.school_key}/>
      <br/>


      <p className="mb-1">Computers</p>

      {
        loading?
          <Loading />
          :
          <Computers slots={slots}/>
      }
      

    </>
  )
}

export default Credentials