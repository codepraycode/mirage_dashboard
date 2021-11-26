import React,{Component} from 'react'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import QuickLogin from '../Auth/quick_login';
import axios from 'axios';
import {TokenRefreshUrl,SetCookie} from '../../utils';
class Layout  extends Component{
    state = {
        tokens:{
            access_token:null,
            refresh_token:null
        },
        reAuth:false,
        processing:false

    }
    // let [ReAuth,,setReAuth] = useState(false);

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
                this.updateTokens(res.data.access, this.state.tokens.refresh_token)

                this.setState({
                    ...this.state,
                    processing:false
                });

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


    updateTokens = (access,refresh)=>{
        let clone_state = this.state;
        clone_state.tokens = {
            access_token:access,
            refresh_token:refresh
        }
        SetCookie({
            access,
            refresh
        })

        
    }

    componentDidMount(){
        this.FetchTokens();
    }

    FetchTokens = ()=>{
        let accessToken = localStorage.getItem('access');
        let refreshToken = localStorage.getItem('refresh')
        // console.log(accessToken,refreshToken);
        let tokens ={
            access_token:accessToken,
            refresh_token:refreshToken
        }
        // let times = 5
        this.setState(
            {
                ...this.state,
                tokens,
            }
        )
    }

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

export default Layout
