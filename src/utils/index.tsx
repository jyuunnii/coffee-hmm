import styled from "styled-components";

export const MainScale = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const BasicColumnFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const BasicRowFlex = styled.div`
    display: flex;
    flex-direction: row;
`;

export const letterValidation = (data: string) => {
    let Korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
 
    if(!Korean.test(data)){
        return false;
    }
    return true;
}