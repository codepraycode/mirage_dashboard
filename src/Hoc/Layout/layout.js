import React,{Component} from 'react'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import QuickLogin from '../Auth/quick_login';
import axios from 'axios';
import {TokenRefreshUrl} from '../../utils';

import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class Layout  extends Component{
    state = {
        tokens:{
            access_token:this.props.cookies.get("access") || null,
            refresh_token:this.props.cookies.get("refresh") || null
        },
        reAuth:false,
        processing:false

    }
    // let [ReAuth,,setReAuth] = useState(false);

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentDidMount(){
        this.ensureCookie();
    }


    ensureCookie = ()=>{
        if(this.state.tokens.refresh_token === null){
            //  No Token in Cookie
            window.location.href="/login";
        }
    }    


    updateTokenCookies = (access,refresh) => {
        const { cookies } = this.props;
        cookies.set("access",access, { path: "/" }); // setting the cookie
        // cookies.set("refresh",refresh, { path: "/" }); // setting the cookie
        this.setState({ 
            ...this.state,
            tokens:{
                access_token:cookies.get("access"),
                refresh_token:cookies.get("refresh")
            },
            processing:false
        });
    };

    ReAuth = (reAuth)=>{
        // console.log("Called To REauthenticate")
        if (reAuth){
            this.FetchTokens();
        }
        
        this.setState({
            reAuth
        })
    }

    reAuthenticate=()=>{
        if(!this.state.processing){
            // let config = {
            //     method:'POST',
            // }
            let data = {
                    "refresh": `${this.state.tokens.refresh_token}`
            }

            axios.post(TokenRefreshUrl,data)
            .then((res)=>{
                // console.log(res.data.access)
                this.updateTokenCookies(res.data.access, this.state.tokens.refresh_token)

                // this.setState({
                //     ...this.state,
                //     processing:false
                // });

            })
            .catch((err)=>{
                window.location.href = '/login'
            })
            this.setState({
                ...this.state,
                processing:true
            })
        }   
    }


    // updateTokens = (access,refresh)=>{
    //     let clone_state = this.state;
    //     clone_state.tokens = {
    //         access_token:access,
    //         refresh_token:refresh
    //     }
    //     SetCookie({
    //         access,
    //         refresh
    //     })

        
    // }

   

    // FetchTokens = ()=>{
    //     let accessToken = localStorage.getItem('access');
    //     let refreshToken = localStorage.getItem('refresh')
    //     // console.log(accessToken,refreshToken);
    //     let tokens ={
    //         access_token:accessToken,
    //         refresh_token:refreshToken
    //     }
    //     // let times = 5
    //     this.setState(
    //         {
    //             ...this.state,
    //             tokens,
    //         }
    //     )
    // }

    render(){
        
        return (
            <div>
                {this.state.reAuth ? <QuickLogin handleReAuth={this.ReAuth} />: null}
                <Header/>
                    {React.cloneElement(this.props.children,{handleReAuth:()=>this.reAuthenticate(),tokens:this.state.tokens})}
                <Footer/>
            </div>
        )
    }
}

export default withCookies(Layout);
