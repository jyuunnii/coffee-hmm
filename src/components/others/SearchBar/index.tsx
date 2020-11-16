import React, { useState } from 'react';
import './index.css';

type SearchBarProps = {
    onCreate: (value: string) => void;
}


const SearchBar = ({onCreate}: SearchBarProps) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(searchValue);
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    <span className="material-icons-round search-icon">search</span>
                    <input type="text" value={searchValue} onChange={onChange} maxLength={20}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;