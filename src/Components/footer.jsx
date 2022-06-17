import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="footer_left">
                    <div className="span-dots">
                        <span className="item brand-sm">
                            Mirage Education
                        </span>

                        <span className="item">
                            <a href="/">
                                About
                            </a>
                        </span>
                        <span className="item">
                            <a href="/" className="btn btn-primary disabled">Download App</a>
                        </span>
                    </div>
                </div>
                
                <div className="right">
                    <ul>
                        <li>
                            <a href="/">Terms Of Service</a>
                        </li>

                        <li>
                            <a href="/">Privacy</a>
                        </li>

                        <li>
                            &copy;
                            2021 codepraycode
                        </li>
                    </ul>
                    
                </div>
            </div>


        </footer>
    )
}

export default Footer;
