import React from 'react';

const SchoolInfo = () => {
    return (
        <section className="panel">
                <div className="panel-description">
                    <p>School Information</p>
                </div>

                <div className="panel-content">
                    <div className="flex mv-2 d-sm-block align-center justify-between">
                        <label htmlFor="name" className="mr-1">School Name</label>
                        <input type="text" className="self-center" />
                        <div className="actions mv-1 d-sm-inline flex justify-between">
                            <button className="btn btn-primary mr-1">Save</button>
                            <button className="btn btn-primary-outline">Cancle</button>
                        </div>
                    </div>


                    <div className="flex mv-2 d-sm-block align-center justify-between">
                        <label htmlFor="name" className="mr-1">About</label>
                        <textarea className=""></textarea>
                        <div className="actions mv-1 d-sm-inline flex justify-between">
                            <button className="btn btn-primary mr-1">Save</button>
                            <button className="btn btn-primary-outline">Cancle</button>
                        </div>
                    </div>



                    <div className="flex mv-2 d-sm-block align-center justify-between">
                        <label htmlFor="name" className="mr-1">Contacts</label>
                        <div className="phone-group">
                                    <input type="text" className="" />
                                    <input type="text" className="" />
                                </div>
                        <div className="actions mv-1 d-sm-inline flex justify-between">
                            <button className="btn btn-primary mr-1">Save</button>
                            <button className="btn btn-primary-outline">Cancle</button>
                        </div>
                    </div>


                    <div className="flex mv-2 d-sm-block align-center justify-between">
                        <label htmlFor="name" className="mr-1">website</label>
                        <input type="text" className="self-center" />
                        <div className="actions mv-1 d-sm-inline flex justify-between">
                            <button className="btn btn-primary mr-1">Save</button>
                            <button className="btn btn-primary-outline">Cancle</button>
                        </div>
                    </div>


                    <div className="flex mv-2 d-sm-block align-center justify-between text-muted">
                        <label htmlFor="name" className="mr-1">Date Created</label>
                        <span>some date</span>
                        <div></div>
                    </div>

                    <div className="flex mv-2 d-sm-block align-center justify-between text-muted">
                        <label htmlFor="name" className="mr-1">Status</label>
                        <span>Approved</span>
                        <div></div>
                    </div>


                    
                    <div className="flex mv-2 d-sm-block align-center justify-between text-muted">
                        <label htmlFor="name" className="mr-1">Last sync</label>
                        <span>simce 2019</span>
                        <div></div>
                    </div>

                </div>

            </section>


    );
};

export default SchoolInfo;