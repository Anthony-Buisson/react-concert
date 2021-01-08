import React, { useEffect, useState } from 'react';
import DotLoader from "./DotLoader";

const ItemList = (props) => {
    const {apiRequest, renderItem, container} = props;
    const [items, setItems] = useState([]);
    const ItemTag = renderItem;//capitalize for React
    const ContainerTag = container;

    async function fetch(){
        const data = await apiRequest();
        setItems(data);
    }
    useEffect(()=>{
        setTimeout(fetch, 3000);
    }, [])

    let content;
    if(items.length > 0){
        content = items.map(i=><ItemTag item={i} />);
    } else {
        content = <DotLoader />
    }
    return (
        <ContainerTag>
            {content}
        </ContainerTag>
    )
};

export default ItemList;
