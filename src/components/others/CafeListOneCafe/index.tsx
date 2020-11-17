import React, { useState } from 'react';
import { BIG_CAFE_IMAGE_SIZE, SMALL_CAFE_IMAGE_SIZE } from '../../../utils/constant';
import { StyledSpinnerContainer } from '../../../utils/styled';
import { CafeInfo } from '../../../utils/type';
import Spinner from '../../common/Spinner';
import './index.css';

type CafeListOneCafeProps = {
    cafe: CafeInfo;
    isBig: boolean;
}

const CafeListOneCafe = ({cafe, isBig}: CafeListOneCafeProps) => {
    const [isImageReady, setIsImageReady] = useState<boolean>(false);
    const onImageLoad = () => {
      setIsImageReady(true);
    };
  
    return(
        <div>
             <div className="cafe-box">
                <img src={`https://${cafe.mainImageUri}`} alt="cafe" 
                style={{display: isImageReady ? "initial" : "none", 
                        width: isBig? `${BIG_CAFE_IMAGE_SIZE}px` : `${SMALL_CAFE_IMAGE_SIZE}px`,
                        height: isBig? `${BIG_CAFE_IMAGE_SIZE}px`: `${SMALL_CAFE_IMAGE_SIZE}px`}} 
                onLoad={onImageLoad}/>
                <StyledSpinnerContainer visible={!isImageReady} size={360}>
                    <Spinner size={24}/>
                </StyledSpinnerContainer>
            </div>
        </div>
       
    )
}

export default CafeListOneCafe;