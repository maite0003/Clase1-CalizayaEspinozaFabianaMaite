import React from 'react'
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getFetch } from '../helpers/getFetch'

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    const { greeting } = props

    const {idCategoria} = useParams()

    console.log(idCategoria)


    useEffect( ()=> {
        if (idCategoria){
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
            getFetch
            .then(resp=>setProductos(resp))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[idCategoria])

    return (
        <div>
            <p>{greeting}</p>

            {loading ?
            <h1>Cargando...</h1>
            :
            <ItemList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer
