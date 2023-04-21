// Datos desde array
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [dataFromObject, setDataFromObject] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    
    useEffect (() => {
        
        setLoading(true);
        fetch(url).then((response) => {
            return response.json();
        }).then((json) => {
            const characters = json.results;
            setData(characters);
            setDataFromObject(json);
            setLoading(false);
        }).catch((error) => {
            setError(error);
        });
        
    },[url])
    
    return [data, dataFromObject, loading, error];

};

export default useFetch;