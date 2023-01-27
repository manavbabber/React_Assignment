import {useEffect, useState} from 'react';
import axios from 'axios';

export const useQuery = (page) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [hasMore, sethasMore] = useState(true);

    useEffect( () => {

        let req = setTimeout(
        () => { axios({
            method: 'GET',
            url: `https://api.github.com/repos/facebook/react/issues?page=${page}`,
        }).then((req) => {
            if(req && req.data && req.data.length > 0){
                setData( prevData => [ ...new Set([...prevData, ...req.data])])
                sethasMore(true);
            }else{
                sethasMore(false);
            }
            setLoading(false);
            setError(false);

        }).catch( (e) => {
            setError(true);
        } ) },
        500)
        setLoading(true);
        return () => {
            clearTimeout(req)
        }
    }, [page])

    return [loading, error, data, hasMore]
}