import React,{Component} from 'react'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import QuickLogin from '../Auth/quick_login';

class Layout  extends Component{
    state = {
        tokens:{},
        reAuth:false,

    }
    // let [ReAuth,,setReAuth] = useState(false);

    ReAuth = (reAuth)=>{
        console.log("Called by", reAuth)
        if (reAuth){
            this.FetchTokens();
        }
        
        this.setState({
            reAuth
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
                tokens
            }
        )
    }

    render(){
        return (
            <div>
                {this.state.reAuth ? <QuickLogin handleReAuth={this.ReAuth} />: null}
                <Header/>
                    {React.cloneElement(this.props.children,{handleReAuth:(needAuth)=>this.ReAuth(needAuth),tokens:this.state.tokens})}
                <Footer/>
            </div>
        )
    }
}

export default Layout
