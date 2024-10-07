import React, { useEffect } from "react";
import useFetch from "../hook/UseFetch";

const Card = () => {

    const url = "https://jsonplaceholder.typicode.com/posts"
    const {data,error}=useFetch(url);
   
    




  return (
    <div className="main">
    {error ? ( 
        <p className="error">{error}</p>

    ) : data.length ? ( 

        data.map((value) => (
            <div className="card" key={value.id}>
                <h1>{value.title}</h1>
                <p>{value.body}</p>
            </div>
        ))
    ) : ( 
        
        <p className="loading">Loading...</p>
    )}
</div>
);
};

export default Card;
