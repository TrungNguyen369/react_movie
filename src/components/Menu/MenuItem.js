import React from "react";
import {randomRGBColor} from '../utils';
import { Link } from 'react-scroll';

function MenuItem(props){
    const {name, Icon, to} = props;
    return(
        <Link 
        className="subMenu"
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
            <Icon className='icon' style={{color: randomRGBColor(1)}}/>
            <span>{name}</span>
        </Link>
    );
}

export default MenuItem;