import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer__content d-md-flex">
                <div className="footer_left">
                    <div className="span-dots">
                        <span className="item">mirage school</span>
                        <span className="item">
                            <a href="/">
                                About
                            </a>
                        </span>
                        <span className="item">
                            <a 
                                href="/release/mirage_setup.exe" 
                                className="btn btn-primary disabled"
                                download={"Mirage Setup"}
                            >
                                Download App
                            </a>
                        </span>
                    </div>
                </div>
                
                <div className="footer_right">
                    <ul>
                        <li>
                        <a href="/">Term Of Service</a>
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
