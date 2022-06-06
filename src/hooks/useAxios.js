/* **************************************
useAxios permite hacer la peticion a la API
**************************************** */
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true
    });

    useEffect(() => {
        setState({
            data: null,
            loading: true
        });

        axios.get(url)
        .then(response => {
            setState({
                loading: false,
                data: response.data
            });
        })
        .catch( error => console.error(error));

    }, [url]);
    
    return state;
}
