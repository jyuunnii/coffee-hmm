import React from 'react';
import { CafeInfo } from '../../../utils/type';
import CafeImageSlide from '../CafeImageSlide';
import './index.css';

type CafeDetailProps = {
    cafe: CafeInfo;
    setIsClicked: (click: boolean) => void;
}

const CafeDetail = ({cafe, setIsClicked}: CafeDetailProps) => {
    return(
        <div>
            <button className="detail-close" onClick={() => setIsClicked(false)}>close</button>
            <CafeImageSlide cafe={cafe}/>
            {cafe.name}
        </div>
    )
}

export default CafeDetail;