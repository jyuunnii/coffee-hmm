import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BasicColumnFlex, MainScale } from '../../../utils';
import PlaceSlide from '../../others/PlaceSlide';
import SearchBar from '../../others/SearchBar';
import './index.css';

const Intro = () => {
    const location = useHistory();
    const [target, setTarget] = useState<string>("");
    const onCreate = (data: string) => {
        const dataRemovedSpace = data.replace(/\s+/g, ''); 
        setTarget(dataRemovedSpace);
        if(target !== ""){
            location.push("/search");
        }
    }

    return(
        <MainScale>
            <BasicColumnFlex className="intro">
                <h2>Coffee Hmm</h2>
                <SearchBar onCreate={onCreate}/>
                <h4>Recommend...</h4>
                <PlaceSlide/>
            </BasicColumnFlex>
        </MainScale>
    )
}

export default Intro;