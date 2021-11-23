import React,{Suspense} from 'react';
import {Routes , Route} from 'react-router-dom';
import Layout from './Hoc/Layout/layout';
// import NavLayout from './Hoc/Layout/navLayout';
import Dashboard from './Components/Dashboard/dashboard';
import Page404 from './Components/Errors/404';
import CircleLoader from './widget/preloader/circle';
// import Overview from './Components/Overview/overview';
const SignUp = React.lazy(()=>import('./Hoc/Auth/signup'));
const Login = React.lazy(()=>import('./Hoc/Auth/login'));
// const Overview = React.lazy(() => import('./Components/Overview/overview'));
// const Staff = React.lazy(() => import('./Components/Staffs/staff'));
// const Settings = React.lazy(() => import('./Components/settings/settings'));
// const Settings = React.lazy(() => import("./pages/Dashboard"));

const AppRoutes = () => {
    return (
        
            
                <Routes>

                    <Route path="/" exact element={<Layout><Dashboard/></Layout>}/>
                    <Route path="/signup" element={
                        <Suspense fallback={<CircleLoader/>}>
                           <SignUp/>
                        </Suspense>
                    }/>
                    <Route path="/signin" element={
                        <Suspense fallback={<CircleLoader/>}>
                           <Login/>
                        </Suspense>
                    }/>

                    {/* <Route path="/signup" element={
                        <Suspense fallback={<CircleLoader/>}>
                           <SignUp/>
                        </Suspense>
                    }/>

                    <Route path=":slug" element={
                        <Suspense fallback={<CircleLoader/>}>
                            <NavLayout>
                                <Overview/>
                            </NavLayout>
                        </Suspense>
                    }/>

                    <Route path=":slug/access" element={
                            <Suspense fallback={<CircleLoader/>}>
                                <NavLayout>
                                    <Staff/>
                                </NavLayout>
                            </Suspense>
                        }/>

                    <Route path=":slug/settings" element={
                        <Suspense fallback={<CircleLoader/>}>
                            <NavLayout>
                                <Settings/>
                            </NavLayout>
                        </Suspense>
                    }/> */}

                    {/* <Route path="*" element={
                        <Layout>
                        <Page404 />
                        </Layout>
                    } /> */}

                    <Route path="*" element={
                        <Layout>
                        <Page404 />
                        </Layout>
                    } />

                </Routes>
            
        
    );
};

export default AppRoutes;