import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { copyLink, openSearch } from '../../../utils/function';
import { CafeInfo } from '../../../utils/type';
import CafeImageSlide from '../CafeImageSlide';
import './index.css';

type CafeDetailProps = {
    cafe: CafeInfo;
    setIsClicked: (click: boolean) => void;
}

const CafeDetail = ({cafe, setIsClicked}: CafeDetailProps) => {
    const currentCopyLink = `https://coffee-hmm.inhibitor.io/cafe/${cafe.id}`;
    return(
        <div>
            <button className="detail-close" onClick={() => setIsClicked(false)}>close</button>
            <CafeImageSlide cafe={cafe}/>
            <div>
                <button className="detail-button" onClick={() => openSearch(cafe.name,"Instagram")}>인스타에서 검색하기</button>           
                <button className="detail-button" onClick={() => openSearch(cafe.name+" "+cafe.place, "Naver")}>네이버에서 검색하기</button>
                <CopyToClipboard text={currentCopyLink}>
                    <button className="detail-button" onClick={() => copyLink(cafe.name)}>흠 링크 공유하기</button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default CafeDetail;