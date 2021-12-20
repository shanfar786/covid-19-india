import React,{ useState }  from "react";


function SearchBar(){
    const { onSearch } = props;
const {searchText, setSearchText}=  useState("");


const handleInput =(e)=>{
    const text = e.target.value;
    setSearchText(text);
};
const handleInputPressed =(e)=>{
    if (e.key === "enter"){
        onSearch(searchText);
    }

};


    return(
        <div>
            <div className="control">
                <input className="input" onChange={handleInput} onKeyPress={handleInputPressed} type="text" placeholder="state" />
            </div>
        </div>
    )
}
export default SearchBar;