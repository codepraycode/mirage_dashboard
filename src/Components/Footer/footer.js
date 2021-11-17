import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer_right"></div>
            <div className="footer_left">
                <ul className="flex align-center justify-evenly">
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
        </footer>
    )
}

export default Footer;
