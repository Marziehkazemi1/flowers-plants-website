import React from "react";

const Header = ({title,image,children,SmallImage}) => {
    return(
        <header className="container header1">
            <div className="header1__container">
                <div className="header1__container-bg">
                    <img src={image} alt="Header Background Image" />
                </div>
                <div className="header1__content">

                <div className="image__content">
                    <img src={SmallImage} />
                    </div>

                    <div className="info__content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                    </div>
                    
                    
                </div>          
            </div>

           
        </header>
    )
}

export default Header;