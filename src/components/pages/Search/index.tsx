import React from 'react';
import SearchValueContext from '../../../context';

const Search = () => {
    return( 
    <SearchValueContext.Consumer>
    {context => {
        return(
            <div>{context.searchValue}</div>
        )
    }}
    </SearchValueContext.Consumer>
    )
}

export default Search;