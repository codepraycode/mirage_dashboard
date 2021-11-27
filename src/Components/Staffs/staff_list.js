import React from 'react';
import {Link } from 'react-router-dom';
import {placeholderLogo} from '../../utils';

const StaffList = (props) => {
    // const [staffs,setStaffs] = useState([])
    const staffs = [];

    const renderStaffs = ()=>{
        let template = null;
        
        if (!staffs.length === 0){
            template = (<div className="group__items">
                
                <div className="left">
                    <div className="list__item--logo" style={{background:`url('${placeholderLogo}') center center no-repeat`}}>
                        {/* <img src={school.logo} alt={"img"}/> */}
                    </div>
                    <div className="list__item--property">
                        <h3 className="item-lead">Mr Sanidu</h3>
                        <div className="item-meta d-xs-none text-muted">
                            <span><i>info@gmail.com</i></span>
                        </div>
                    </div>
                </div>
                        
                <div className="item">
                    <span className="item text-grey d-xs-none">
                        Role
                    </span>
                </div>
                
                <div className="right">
                    <span className="item text-success">
                            <i className="fas fa-star"></i>
                    </span>
                </div>
            </div>)
        }
        else{
            template =( 
                <>
                {
                    props.add ? 
                    <div className="text-center text-muted">
                        <p>No Staffs Record</p>
                    </div>
                    :
                    null
                }
                </>
                
            )
        }

        return template;
    }

    

    const renderHeader = ()=>{
        let template = null;
        const AddStaff = (<button className="btn btn-primary disabled">
                        Add Staff
                    </button>)
        const seeAll = (
            <Link to="staffs">
                        see all
            </Link>
        )
        if(staffs.length ===0){
            if(props.add){
                template = (
                    <>
                    <p className="mb-1">Staffs</p>
                    {AddStaff}
                    </>
                )
            }
        }else{
            template = (
            <>
            <p className="mb-1">Staffs</p>
             {
                    props.see ? 
                   seeAll
                :
                    null
                }
                

                {
                    props.add ? 
                    AddStaff
                :
                    null
                }
            </>
            )
        }
        return(
            template
            
        )
    }
    
    

    return (
       <div className="groupings">
            <div className="group-lead flex align-center justify-between">
                
                {renderHeader()}
               

            </div>

            {renderStaffs()}
            
        </div>
    );
};

export default StaffList;