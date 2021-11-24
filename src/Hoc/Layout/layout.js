import React,{Component} from 'react'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import QuickLogin from '../Auth/quick_login';

class Layout  extends Component{
    state = {
        reAuth:false
    }
    // let [ReAuth,,setReAuth] = useState(false);

    ReAuth = (reAuth)=>{
        console.log("Called by", reAuth)
        
        this.setState({
            reAuth
        })

    }
    render(){
        return (
            <div>
                {this.state.reAuth ? <QuickLogin handleReAuth={this.ReAuth} />: null}
                <Header/>
                    {React.cloneElement(this.props.children,{handleReAuth:(needAuth)=>this.ReAuth(needAuth)})}
                <Footer/>
            </div>
        )
    }
}

export default Layout
