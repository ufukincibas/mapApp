import { useEffect, useState , useCallback } from "react";
import axios from 'axios';

export default function useFetch(url){
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    const Fetch = useCallback(async () => {
        try {
            const {data : response} = await axios.get(url) //data yı response adıyla al url e istek at
            setData(response) //response u dataya gönder
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
            
        }
    }, [url])

    useEffect(() => {
        Fetch();
    } , [Fetch])

    return {data, loading , error}
}