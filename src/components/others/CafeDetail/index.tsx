import React from 'react';
import { openSearch } from '../../../utils/function';
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
            <div>
                <button className="detail-button" onClick={() => openSearch(cafe.name,"Instagram")}>인스타에서 검색하기</button>           
                <button className="detail-button" onClick={() => openSearch(cafe.name+" "+cafe.place, "Naver")}>네이버에서 검색하기</button>
                <button className="detail-button">흠 링크 공유하기</button>
            </div>
        </div>
    )
}

export default CafeDetail;