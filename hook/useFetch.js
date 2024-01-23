import { useState, useEffect } from 'react';
import axios from 'axios';

const rapidApiKey = 'c9cc6e7562msh41c9bae593c588ep183cf6jsn6e04fb87dd9f';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        params: { limit: '50' },
        headers: {
            'X-RapidAPI-Key':
                'c9cc6e7562msh41c9bae593c588ep183cf6jsn6e04fb87dd9f',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            console.log('API Response: ', response);

            const allowedBodyParts = [
                'upper arms',
                'lower arms',
                'back',
                'chest',
                'upper legs',
                'lower legs',
                'cardio'
            ];
            const filteredData = response.data.filter((item) =>
                allowedBodyParts.includes(item.bodyPart)
            );

            setData(filteredData);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error');
            console.log('Error fetching data: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
