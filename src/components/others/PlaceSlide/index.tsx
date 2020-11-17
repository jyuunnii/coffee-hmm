import React, { useState } from 'react';
import { StyledRowFlex, StyledColumnFlex, StyledSpinnerContainer } from '../../../utils/styled';
import Spinner from '../../common/Spinner';
import './index.css';

const places: string[] =["성수동", "연남동", "한남동", "판교", "잠실"];

const PlaceSlide = () => {
    const [isImageReady, setIsImageReady] = useState<boolean>(false);
    const onImageLoad = () => {
      setIsImageReady(true);
    };
 
    return(
        <StyledRowFlex className="card-container">
        {places.map((place, index) => {
            return(
            <StyledColumnFlex className="card-wrapper" key={place}>
                <div className="card-box">
                    <StyledSpinnerContainer visible={!isImageReady} size={40}>
                        <Spinner size={18}/>
                    </StyledSpinnerContainer>
                    <img src={`/images/icon${index%4+1}.png`} alt="icon" onLoad={onImageLoad}/>
                    <span>#{place}카페</span>
                </div>
            </StyledColumnFlex>)
        })}
        </StyledRowFlex>
    );
}




export default PlaceSlide;