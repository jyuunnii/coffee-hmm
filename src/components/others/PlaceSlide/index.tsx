import React from 'react';
import { BasicColumnFlex, BasicRowFlex } from '../../../utils/styled';
import './index.css';

const places: string[] =["성수동", "연남동", "한남동", "판교", "잠실"];

const PlaceSlide = () => {
 
    return(
        <BasicRowFlex className="card-container">
        {places.map((place, index) => {
            return(<BasicColumnFlex className="card-wrapper" key={place}><div className="card-box"><img src={`/images/icon${index%4+1}.png`} alt=""/><span>#{place}카페</span></div></BasicColumnFlex>)
        })}
        </BasicRowFlex>
    );
}




export default PlaceSlide;