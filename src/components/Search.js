import React from "react";

const Search = ({data, setFilteredData}) => {
    const onChange = (evt) => {
        const value = evt.target.value || '';
        setFilteredData(
            data.filter(d => d.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        )
    }

    return (
        <div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control"
                   aria-label="search brewery"
                   onChange={(event) => onChange(event)}
                   aria-describedby="inputGroup-sizing-sm" />
            <span className="input-group-text">Search brewery</span>
        </div>
    )
}

export default Search;
