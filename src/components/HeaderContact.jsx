import React from 'react'

const HeaderContact = ({image, title, children}) => {
    return(
        <header className="header__contact">
            <div className="header__contact-container">
                <div className="contact__container-bg">
                    <img src={image} alt="Header Background Image" />
                </div>
                <div className="header__content-info">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
        </header>
    )
}

export default HeaderContact