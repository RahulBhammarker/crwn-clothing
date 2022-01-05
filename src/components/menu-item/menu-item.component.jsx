import React from "react";
import './menu-item.styles.scss';
import {Link} from "react-router-dom";

const MenuItemComponent = ({title, imageUrl, size}) => {
    return (
        <Link to={`/${title.toLowerCase()}`} style={{backgroundImage: `url(${imageUrl})`}}
              className={`${size} menu-item`}>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </Link>
    )
};

export default MenuItemComponent;
