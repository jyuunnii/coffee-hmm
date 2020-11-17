import React, { useState } from 'react';
import { CafeInfo } from '../../../utils/type';
import './index.css';

type CafeListOneCafeProps = {
    cafe: CafeInfo;
}

const CafeListOneCafe = ({cafe}: CafeListOneCafeProps) => {
    const [isImageReady, setIsImageReady] = useState<boolean>(false);
    const onImageLoad = () => {
      setIsImageReady(true);
    };
  
    return(
        <div className="cafe-box">
            <img src={`https://${cafe.mainImageUri}`} alt="" style={{display: isImageReady ? "initial" : "none"}} onLoad={onImageLoad}/>
        </div>
    )
}

export default CafeListOneCafe;