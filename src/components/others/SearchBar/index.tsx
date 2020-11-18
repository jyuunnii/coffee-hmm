import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchValueContext from '../../../context';
import { letterValidation } from '../../../utils/function';
import './index.css';

const SearchBar = () => {
    const location = useHistory();
    const [target, setTarget] = useState<string>("");
    const {setSearchValue} = useContext(SearchValueContext)

    useEffect(() => {
       async function setContext(){
            const targetProcessed = target.replace(/\s+/g, ''); 
            await setSearchValue(targetProcessed);
       }
       setContext();
    }, [setSearchValue, target])


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTarget(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const targetProcessed = target.replace(/\s+/g, ''); 
        if(targetProcessed !== undefined && letterValidation(targetProcessed)){
            location.push("/search");
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    <span className="material-icons-round search-icon">search</span>
                    <input type="text" value={target} onChange={onChange} maxLength={14}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;