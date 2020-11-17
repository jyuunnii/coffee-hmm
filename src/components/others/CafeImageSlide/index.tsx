import React, { useState } from 'react';
import { moveDownOrRight, moveUpOrLeft, onImageLoad, slidePosition } from '../../../utils/function';
import { StyledRowFlex, StyledSpinnerContainer } from '../../../utils/styled';
import { CafeInfo } from '../../../utils/type';
import Spinner from '../../common/Spinner';
import './index.css';

type CafeImageSlideProps = {
    cafe: CafeInfo;
}


const MID = 0;
const LEFT = -320;
const RIGHT = 320;

const CafeImageSlide = ({cafe}: CafeImageSlideProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isImageReady, setIsImageReady] = useState<boolean>(false);

    return(
        <div>
            <StyledRowFlex className="slide-box">
            {cafe.imageUris.map((image, index) => {
                return(
                    <div key={cafe.id}  className="cafe-slide" style={{
                        left: currentIndex === index? slidePosition(index, currentIndex, MID, LEFT, RIGHT): slidePosition(index, currentIndex, MID, LEFT, RIGHT)
                    }}>
                        <img src={`https://${image}`} alt="img" onLoad={() => onImageLoad(setIsImageReady)}/>
                        <StyledSpinnerContainer visible={!isImageReady} size={360}>
                            <Spinner size={24}/>
                        </StyledSpinnerContainer>
                    </div>
                )
            })
            }
            </StyledRowFlex>
            <button onClick={()=>moveUpOrLeft(currentIndex, setCurrentIndex)}>prev</button>
            <button onClick={()=>moveDownOrRight(currentIndex, setCurrentIndex, cafe.imageUris.length-1)}>next</button>
        </div>
      
    )
}

export default CafeImageSlide;