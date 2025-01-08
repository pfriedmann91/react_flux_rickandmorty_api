import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const DetailedView = () => {
    const { type, id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        
     const fetchData = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/${type}/${id}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(`Error fetching ${type} data:`, error);
            }
        };
        fetchData();
    }, [type, id]);

    if (!data) return <p>Loading {type} details...</p>;

    return (
        <div className="container mt-5">
            {type === "character" && (
                <div>
                    <h1>{data.name}</h1>
                    <img src={data.image} alt={data.name} className="img-fluid" />
                    <p>Species: {data.species}</p>
                    <p>Status: {data.status}</p>
                    <p>Gender: {data.gender}</p>
                    <p>Origin: {data.origin.name}</p>
                </div>
            )}
            {type === "location" && (
                <div>
                    <h1>{data.name}</h1>
                    <p>Type: {data.type}</p>
                    <p>Dimension: {data.dimension}</p>
                    <p>Residents: {data.residents.length}</p>
                </div>
            )}
            {type === "episode" && (
                <div>
                    <h1>{data.name}</h1>
                    <p>Episode: {data.episode}</p>
                    <p>Air Date: {data.air_date}</p>
                    <p>Number of Characters: {data.characters.length}</p>
                </div>
            )}
        </div>
    );
};
