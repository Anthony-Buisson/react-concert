import React from 'react';
import { BASE_URL } from "../../env";
import axios from "axios";
import ConcertListItem from "./ConcertListItem";
import ItemList from "../shared/Itemlist";
import { Container } from "../../style/components/concert/ConcertList.style";
import { Link } from "react-router-dom";

let url = BASE_URL+'/concerts';

const ConcertList = ( ) => {

    async function fetchData() {
        const { data } = await axios.get(url);
        return data;
    }

    return (
        <div>
            <h2>Prochainement dans nos salles</h2>
            <ItemList apiRequest={fetchData} renderItem={ConcertListItem} container={Container}/>
            <Link to={'/programmation'}>Voir toute la programmation</Link>
        </div>
    )
};

export default ConcertList;
