import React from 'react';


function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/AnthonySzymczak" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
                <a href="https://www.linkedin.com/in/anthony-szymczak-55b9a641/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
                <a href="https://twitter.com/" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Anthony Szymczak  | | <a href="https://github.com/AnthonySzymczak/AnthonySzymczak" className="link">list of technologies</a>  |  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;