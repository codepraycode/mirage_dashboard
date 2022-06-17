import React,{Suspense} from 'react';
import {Routes , Route} from 'react-router-dom';
import Layout from './Hoc/Layout/layout';
// High Order Component
import Layout2 from './Hoc/Layout/layout2';
import SchoolLayout from './Hoc/Layout/school';

import NavLayout from './Hoc/Layout/navLayout';
// import Dashboard from './Components/Dashboard/dashboard';
import Page404 from './Components/Errors/404';
import CircleLoader from './widget/preloader/circle';

const Overview = React.lazy(() => import('./Components/Overview/overview'));

const Staff = React.lazy(() => import('./Components/Staffs/staff'));
const Settings = React.lazy(() => import('./Components/settings/settings'));
const NewSchool = React.lazy(() => import('./Components/Dashboard/new_school'));




// Lazy Loaded components
const Auth = React.lazy(()=>import('./pages/auth'));
const Dashboard = React.lazy(()=>import('./pages/dashboard'));

const AppRoutes = () => {
    return (
        <Routes>
                                
            <Route path="/signin" element={
                <Suspense fallback={<CircleLoader/>}>
                    <Auth/>
                </Suspense>
            }/>

            <Route path="/signup" element={
                <Suspense fallback={<CircleLoader/>}>
                    <Auth/>
                </Suspense>
            }/>


            <Route path="/" exact element={<Layout2/>}>
                <Route path="" index element={
                    <Suspense fallback={<CircleLoader/>}>
                        <Dashboard/>
                    </Suspense>}
                />
            </Route>


            
            <Route path="/school" exact element={<SchoolLayout/>}>
                <Route path=":id" index element={
                    <Suspense fallback={<CircleLoader/>}>
                        <Dashboard/>
                    </Suspense>}
                />
            </Route>


            
            
            {/* <Route path="/signup" element={
                <Suspense fallback={<CircleLoader/>}>
                    <SignUp/>
                </Suspense>
            }/>

            
            <Route path="/login" element={
                <Suspense fallback={<CircleLoader/>}>
                    <Login/>
                </Suspense>
            }/> */}
            <Route path="/school/new" element={
                <Suspense fallback={<CircleLoader/>}>
                    <Layout>
                        <NewSchool/>
                    </Layout>
                </Suspense>
            }/>
            <Route path="/school/:key" element={
                <Suspense fallback={<CircleLoader/>}>
                    <Layout>
                        <NavLayout>
                            <Overview/>
                        </NavLayout>
                    </Layout>
                </Suspense>
            }/>

            <Route path="/school/:key/staffs" element={
                <Suspense fallback={<CircleLoader/>}>
                    <Layout>
                        <NavLayout>
                        <Staff/>
                        </NavLayout>
                    </Layout>
                </Suspense>
            }/>

            <Route path="/school/:key/settings" element={
                <Suspense fallback={<CircleLoader/>}>
                    <Layout>
                        <NavLayout>
                        <Settings/>
                        </NavLayout>
                    </Layout>
                </Suspense>
            }/>

            

            <Route path="*" element={
                <Layout>
                <Page404 />
                </Layout>
            } />

        </Routes>
            
        
    );
};

export default AppRoutes;