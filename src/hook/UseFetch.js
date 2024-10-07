import {useEffect, useState} from 'react'

const useFetch = (url) => {
  

    const [data, setData]=useState([])
    const [error, setError]=useState(null)
    
    useEffect(()=>{

        const fetchData = async()=>{
            try{
                const response= await fetch(url)
                const json= await response.json()
                setData(json)
                setError(null)
            }
            catch(err){
                console.log("Fetching Error")
                setError("Error: fetching error")

            }

        }
       
        fetchData()

    }, [url])

    return {data, error}

  
 
    
   
  
}

export default useFetch



  



   