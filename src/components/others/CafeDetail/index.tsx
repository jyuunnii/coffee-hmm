import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { copyLink, openSearch } from '../../../utils/function';
import { CafeInfo } from '../../../utils/type';
import CafeImageSlide from '../CafeImageSlide';
import './index.css';

type CafeDetailProps = {
    index: number;
    cafe: CafeInfo;
    setIsClicked: (click: boolean) => void;
}

const CafeDetail = ({index, cafe, setIsClicked}: CafeDetailProps) => {
    const currentCopyLink = `https://coffee-hmm.inhibitor.io/cafe/${cafe.id}`;
    return(
        <div className="detail">
            <button className="detail-close" onClick={() => setIsClicked(false)}>close</button>
            <CafeImageSlide cafe={cafe}/>

            <div className="detail-info">
                <img src={`/images/icon${index%4+1}.png`} alt="icon"/>
                <span>{cafe.name}, {cafe.place}</span>
                <span>open 9:00 ~ 19:00</span>
            </div>
            <div>
                <button className="detail-button" onClick={() => openSearch(cafe.name,"Instagram")}>인스타 검색 바로가기</button>           
                <button className="detail-button" onClick={() => openSearch(cafe.name+" "+cafe.place, "Naver")}>네이버 검색 바로가기</button>
                <CopyToClipboard text={currentCopyLink}>
                    <button className="detail-button" onClick={() => copyLink(cafe.name)}>흠 링크 공유하기</button>
                </CopyToClipboard>
            </div>
    
        </div>
    )
}

export default CafeDetail;