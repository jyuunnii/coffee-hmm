import React from 'react';
import styled from 'styled-components';
import { openSearch } from '../../../utils/function';
import { CafeInfo } from '../../../utils/type';
import './index.css';

const WebButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

type WebSearchBottomPopupProps = {
    cafe: CafeInfo;
    isWebSearchClicked: boolean;
    setWebSearchClicked: (type: boolean) => void;
}

const WebSearchBottomPopup = ({cafe, isWebSearchClicked, setWebSearchClicked}: WebSearchBottomPopupProps) => {
    return(
        <WebButtonsWrapper className="detail-popup" style={{
                    position: "absolute",
                    bottom: isWebSearchClicked? "0px" : "-185px"}}>
            <i className="material-icons detail-popup-close" onClick={()=>setWebSearchClicked(false)}>cancel</i>
            <div className="websearch-button naver" onClick={() => openSearch(cafe.name+" "+cafe.place, "Naver")}><button><img src="/images/naver-icon.png" alt="naver"/></button><span>네이버 검색 결과<br/>바로보기</span></div>
            <div className="websearch-button insta" onClick={() => openSearch(cafe.name,"Instagram")}><button><img src="/images/insta-icon.png" alt="insta"/></button><span>인스타그램 해시태그<br/>바로보기</span></div>       
        </WebButtonsWrapper>
    )
}

export default WebSearchBottomPopup;