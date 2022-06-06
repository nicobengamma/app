import { useState ,useEffect } from "react"


const MercadoLibre = () => {
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=').then(response => {
            return response.json()
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)})
        }, [])



    return (
        <>

        <h1>MercadoLibre</h1>
        </>
    )
}

export default MercadoLibre