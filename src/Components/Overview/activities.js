import React, { Component } from 'react';

class Activities extends Component {
  elements = [];
  renderNoActivity = ()=>{
    return (
      <div className="no-activity text-center">
        <i className="fad fa-clipboard-list"></i>
        <p className="text-muted">
          No Activity Records
        </p>
        </div>
    )
  }

  renderActivity = ()=>{
    let template = this.elements.map((item,i)=>{
      return (
        <div className="activity" key={i}>
                    
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
      )
    })

    return template;
  }

    render() {
        return (
            <div className="activities">
                      {
                        this.elements.length === 0 ?
                        this.renderNoActivity()
                        :
                        this.renderActivity()
                      }
                  
            </div>
        );
    }
}

export default Activities;