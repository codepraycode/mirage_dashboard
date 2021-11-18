import React, { Component } from 'react';

class Activities extends Component {
    render() {
        return (
            <div className="activities">
                  <div className="activity">
                    
                    <div className="activity-icon bg-primary">
                      <i className="fas fa-comment-alt"></i>
                    </div>

                    <div className="activity-detail">
                      <div className="mb-1 span-dots text-muted">
                        <img src="/asset/logo.svg" alt="prof" className="mr-2" width={40}/>
                        <span className="item text-primary">Comr Busayp</span>
                        <span className="item text-primary">2 min ago</span>
                        <span className="item">
                        <a  href="/">View</a>
                        </span>
                      </div>
                      <p>Have commented on the task of "<a href="/">Responsive design</a>".</p>
                    </div>
                  </div> 


                  <div className="activity">
                    
                    <div className="activity-icon bg-primary">
                      <i className="fas fa-upload    "></i>
                    </div>

                    <div className="activity-detail">
                      <div className="mb-1 span-dots text-muted">
                          
                        <img src="/asset/logo.svg" alt="prof" className="mr-2" width={40}/>
                        <span className="item text-primary">Comr Busayp</span>
                        <span className="item text-primary">2 min ago</span>
                        <span className="item">
                        <a  href="/">View</a>
                        </span>

                        <div className="item"></div>
                      </div>

                      <p>Backed up "<a href="/">Data</a>".</p>
                    </div>
                  </div>                  
                  
                </div>
        );
    }
}

export default Activities;