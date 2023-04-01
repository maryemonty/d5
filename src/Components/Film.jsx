import React, { useState, useEffect } from 'react'

function Film() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const Fetch = async () => {
            const r = await fetch('http://www.omdbapi.com/?apikey=fda21f82&s=harry%20potter');
            const data = await r.json();
            setData(data.Search);
        };
        Fetch()
    }, [])
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center px-1">
                {data ? (
                    data.slice(0, 6).map((HarryPotter) => (
                        <div key={HarryPotter.imdbID} className="col mb-2 px-1">
                            <img className="img-fluid" src={HarryPotter.Poster} alt={HarryPotter.Title} style={{ width: '238px' }} />
                        </div>
                    ))
                ) : (
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>

        </>
    )
}


export default Film