import React from 'react';
import { BasicColumnFlex, MainScale } from '../../../utils';
import PlaceSlide from '../../others/PlaceSlide';
import SearchBar from '../../others/SearchBar';
import './index.css';

const Intro = () => {
    return(
        <MainScale>
            <BasicColumnFlex className="intro">
                <h2>Coffee Hmm</h2>
                <SearchBar/>
                <h4>Recommend...</h4>
                <PlaceSlide/>
            </BasicColumnFlex>
        </MainScale>
    )
}

export default Intro;