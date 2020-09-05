import React, { useState } from 'react';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; 
const key = 'TP959a2kbRzA2l2ge8CRMoGStCNf1vFk';

const NytApp = () => {
    const [search, setSearch] =useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [results, setResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const fetchResults =() => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;

        url = startDate ? url + `&begin_date=${startDate}` : url;
        url = endDate ? url + `&end_date=${endDate}` : url;

        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data.response.docs))
        .catch(err => console.log(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={e => handleSubmit(e) }>
                    <span>Enter a single search term (required) : </span>
                    <input type="text" name="search"  onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" pattern="[0-9]{8}" 
                    onChange={e => setStartDate(e.target.value) } />
                    <br />
                    <span>Enter an end date: </span>
                    <input type="date" name="endDate" pattern="[0-9]{8}" 
                    onChange={e => setEndDate(e.target.value) } />
                    <br />
                    <button className="submit">Submit search</button>
                </form>
            </div>
        </div>
    )
}

export default NytApp;