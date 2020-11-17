import React from 'react';
import { StyledRowFlex, StyledColumnFlex } from '../../../utils/styled';
import './index.css';

const places: string[] =["성수동", "연남동", "한남동", "판교", "잠실"];

const PlaceSlide = () => {
 
    return(
        <StyledRowFlex className="card-container">
        {places.map((place, index) => {
            return(<StyledColumnFlex className="card-wrapper" key={place}><div className="card-box"><img src={`/images/icon${index%4+1}.png`} alt=""/><span>#{place}카페</span></div></StyledColumnFlex>)
        })}
        </StyledRowFlex>
    );
}




export default PlaceSlide;