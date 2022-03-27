import React, {useEffect, useState} from 'react';
import {api} from "../../../base/axios";

const News = () => {

const [allNews,setAllNews] = useState([])

   const getAllNews = () => {
        api.get('news/').then((res) => {
            console.log(res.data)
            setAllNews(res.data)

        });
    };

    useEffect(() => {
        getAllNews()
    }, [])


    return (
        <div>

        </div>
    );
};

export default News;
