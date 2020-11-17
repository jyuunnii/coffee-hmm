import React, { useEffect, useState } from 'react';
import { slidePosition } from '../../../utils/function';
import { CafeInfo } from '../../../utils/type';
import { getAllCafesByName } from '../../api';
import CafeListOneCafe from '../CafeListOneCafe';
import './index.css';

type CafeListProps = {
    searchValue: string;
}

const CafeList = ({searchValue}: CafeListProps) => {
    const [cafes, setCafes] = useState<CafeInfo[]>([])
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchData(){
            await getAllCafesByName(searchValue).then(data => {
                setCafes(data);
            });
        }
        if(searchValue !== ""){
            fetchData();
        }
    }, [searchValue])

    const moveUp = (current: number) => {
        if(current > 0){
            setCurrentIndex(current - 1);
        }
    }

    const moveDown = (current: number) => {
        if(current < cafes.length-1){
            setCurrentIndex(current + 1);
        }
    }

    const slideImageSize = (index: number, current: number) => {
        if(index === current){
            return true;
        }else{
            return false;
        }
    }

    return(
        <div>
            <div>카페 검색 결과 <span>{cafes?.length}</span></div>
            <div className="search-result">
            {cafes?.map((cafe, index) => {
                return(
                <div key={cafe.id}  className="cafe" style={{
                    top: currentIndex === index? slidePosition(index, currentIndex): slidePosition(index, currentIndex)
                }}>
                      <CafeListOneCafe cafe={cafe} isBig={slideImageSize(index, currentIndex)}/>
                </div>)
            })}
            </div>
            <button className="guest-prev-button" onClick={()=>moveUp(currentIndex)}>위로</button>
            <button className="guest-next-button" type="submit" onClick={()=>moveDown(currentIndex)}>아래로</button>
        </div>
       
    )
}

export default CafeList;