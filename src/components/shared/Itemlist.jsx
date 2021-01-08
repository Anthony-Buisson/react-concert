import React, { useEffect, useState } from 'react';
import DotLoader from "./DotLoader";
import ErrorMessage from "./ErrorMessage";

const ItemList = (props) => {
    const {apiRequest, renderItem, container} = props;
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(true);
    const ItemTag = renderItem;//capitalize for React
    const ContainerTag = container;

    async function fetch(){
        try {
            setIsLoading(true);
            const data = await apiRequest();
            setItems(data);
            setIsError(false);
        } catch(e){
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(()=>{
        fetch();
    }, [])

    let content;
    if(isLoading){
        content = <DotLoader />
    }
    else if (isError) {
        content = <ErrorMessage message={'Erreur de récupération des données'} retry={fetch}/>
    } else if(items.length > 0){
        content = items.map(i=><ItemTag item={i} />);
    }
    return (
        <ContainerTag>
            {content}
        </ContainerTag>
    )
};

export default ItemList;
