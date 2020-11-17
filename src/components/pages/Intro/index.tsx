import React from 'react';
import { StyledColumnFlex, StyledMainScale } from '../../../utils/styled';
import PlaceSlide from '../../others/PlaceSlide';
import SearchBar from '../../others/SearchBar';
import './index.css';

const Intro = () => {
    return(
        <StyledMainScale>
            <StyledColumnFlex className="intro">
                <h2>Coffee Hmm</h2>
                <SearchBar/>
                <h4>Recommend...</h4>
                <PlaceSlide/>
            </StyledColumnFlex>
        </StyledMainScale>
    )
}

export default Intro;