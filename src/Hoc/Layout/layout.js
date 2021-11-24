import React,{Component} from 'react'
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import QuickLogin from '../Auth/quick_login';

class Layout  extends Component{
    state = {
        ReAuth:false
    }
    // let [ReAuth,,setReAuth] = useState(false);

    handleReAuth = (ReAuth)=>{
        console.log("Called by", ReAuth)
        
        this.setState({
            ReAuth
        })

    }
    render(){
        console.log(this.state.ReAuth);
        return (
            <div>
                {this.state.ReAuth ? <QuickLogin authCallback={this.handleReAuth} />: null}
                <Header/>
                    {React.cloneElement(this.props.children,{authCallback:(needAuth)=>this.handleReAuth(needAuth)})}
                <Footer/>
            </div>
        )
    }
}

export default Layout
