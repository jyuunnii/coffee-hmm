import React, { useEffect, useState } from 'react';
import { CafeInfo } from '../../../utils/type';
import { getAllCafesByName } from '../../api';
import CafeListOneCafe from '../CafeListOneCafe';
import './index.css';

type CafeListProps = {
    searchValue: string;
}

const CafeList = ({searchValue}: CafeListProps) => {
    const [cafes, setCafes] = useState<CafeInfo[]>()
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
    return(
        <div>
            <div>카페 검색 결과 <span>{cafes?.length}</span></div>
            <div className="search-result">
            {cafes?.map(cafe => {
                return(<CafeListOneCafe cafe={cafe} key={cafe.id}/>)
            })}
            </div>
        </div>
       
    )
}

export default CafeList;