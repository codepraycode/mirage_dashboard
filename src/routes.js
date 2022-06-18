import React,{Suspense} from 'react';
import {Routes , Route} from 'react-router-dom';

// High Order Component
import Layout from './Hoc/Layout/layout';
import SchoolLayout from './Hoc/Layout/school';

import Page404 from './Components/Errors/404';
import CircleLoader from './widget/preloader/circle';

const NewSchool = React.lazy(() => import('./Components/Dashboard/new_school'));




// Lazy Loaded components
const Auth = React.lazy(()=>import('./pages/auth'));
const Dashboard = React.lazy(()=>import('./pages/dashboard'));
const SchoolOverview = React.lazy(()=>import('./pages/school_overview'));
const SchoolUsers = React.lazy(()=>import('./pages/school_users'));
const SchoolSettings = React.lazy(()=>import('./pages/school_settings'));

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

            

            <Route path="/" exact element={<Layout/>}>
                
                <Route path="" index element={
                    <Suspense fallback={<CircleLoader/>}>
                        <Dashboard/>
                    </Suspense>}
                />

                <Route path="/school/:id" exact element={<SchoolLayout/>}>
                    <Route path="" index element={
                        <Suspense fallback={<CircleLoader/>}>
                            <SchoolOverview/>
                        </Suspense>}
                    />
                    <Route path="overview" element={
                        <Suspense fallback={<CircleLoader/>}>
                            <SchoolOverview/>
                        </Suspense>}
                    />

                    <Route path="users" element={
                        <Suspense fallback={<CircleLoader/>}>
                            <SchoolUsers/>
                        </Suspense>}
                    />

                    <Route path="settings" element={
                        <Suspense fallback={<CircleLoader/>}>
                            <SchoolSettings/>
                        </Suspense>}
                    />

                </Route>
            </Route>


            <Route path="/school/new" element={
                <Suspense fallback={<CircleLoader/>}>
                    <Layout>
                        <NewSchool/>
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