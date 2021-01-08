import React from 'react';
import { BASE_URL } from "../../env";
import axios from "axios";
import NewsListItem from "./NewsListItem";
import ItemList from "../shared/Itemlist";
import { Container } from "../../style/components/news/NewsList.style";
import { Link } from "react-router-dom";

let url = BASE_URL+'/articles';

const NewsList = ( ) => {

    async function fetchData() {
        const { data } = await axios.get(url);
        return data;
    }

    return (
        <div>
            <h2>Actualités</h2>
            <ItemList apiRequest={fetchData} renderItem={NewsListItem} container={Container}/>
            <Link to={'/programmation'}>Voir toutes les actualités</Link>
        </div>
    )
};

export default NewsList;
