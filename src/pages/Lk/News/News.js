import React, {useEffect, useState} from 'react';
import {api} from "../../../base/axios";
import {NewsCard} from "../../../components/NewsCard/NewsCard";
import {Carousel} from "react-bootstrap";

const News = () => {

    const [allNews, setAllNews] = useState([])

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
        <div className="container">
            <h2>НОВОСТИ</h2>
                {allNews?.map((i) => (
                    <>
                        <NewsCard
                        banner={i.banner}
                        name={i.name}
                        des={i.description}
                        />
                    </>
                ))}
        </div>
    );
};

export default News;
