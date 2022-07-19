import React,{Suspense} from 'react';
import {Routes , Route} from 'react-router-dom';

// High Order Component
import Layout from './Layout/layout';
import SchoolLayout from './Layout/school_layout';

// Errors
import {Error404} from './Components/Errors';

// Widgets
import {CircleLoader} from './widget/Preloaders';

// Site Urls
import {home, signin, signup, school, } from './constants/site_urls';


// Lazy Loaded components
const Auth = React.lazy(()=>import('./pages/auth'));
const Dashboard = React.lazy(()=>import('./pages/dashboard'));
const SchoolOverview = React.lazy(()=>import('./pages/school_overview'));
const CreateSchool = React.lazy(()=>import('./pages/new_school'));
const SchoolUsers = React.lazy(()=>import('./pages/school_users'));
const SchoolSettings = React.lazy(()=>import('./pages/school_settings'));

const AppRoutes = () => {
    return (
        <Routes>
                                
            <Route path={signin} element={
                <Suspense fallback={<CircleLoader/>}>
                    <Auth/>
                </Suspense>
            }/>

            <Route path={signup} element={
                <Suspense fallback={<CircleLoader/>}>
                    <Auth/>
                </Suspense>
            }/>

            
            <Route path={home} exact element={<Layout/>}>
                <Route path="" index element={
                    <Suspense fallback={<CircleLoader/>}>
                        <Dashboard/>
                    </Suspense>}
                />
            </Route>
            

            <Route path={school} exact element={<Layout/>}>
                
                <Route path="" element={
                    <Suspense fallback={<CircleLoader/>}>
                        <Error404 />
                    </Suspense>
                } />

                <Route path="new" exact element={
                    <Suspense fallback={<CircleLoader/>}>
                        <CreateSchool/>
                    </Suspense>
                }/>

                <Route path=":id" exact element={<SchoolLayout/>}>
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
            

            <Route path="*" element={
                <Layout>
                <Error404 />
                </Layout>
            } />

        </Routes>
            
        
    );
};

export default AppRoutes;