import React from 'react';


function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/AnthonySzymczak" target="_blank"><img src="https://img.icons8.com/nolan/64/github.png"alt="git"/></a>
                <a href="https://www.linkedin.com/in/anthony-szymczak-55b9a641/" target="_blank"><img src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkd"/></a>
                <a href="https://twitter.com/" target="_blank"><img src="https://img.icons8.com/nolan/64/twitter.png" alt="twitter"/></a>
            </div>
                <a href="https://icons8.com/icon/LBjH6ofyuk8R/coding">Coding icon by Icons8</a>
            <p className='footer-info'>
                &copy; Anthony Szymczak  
            </p>

        </div>
    )
}

export default Footer;