import React, {useEffect, useState} from 'react';
import {api} from "../../../base/axios";
import {Link} from "react-router-dom";
import { Spinner} from "react-bootstrap";
import "./HomePage.css"

const HomePage = () => {

    const [category, setCategory] = useState([])
    const [loader, setLoader] = useState(true);

    const getCategory = () => {
        setLoader(true)

        api.get("category/").then((res) => {

            setCategory(res.data)
            setLoader(false)
        })
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <div className="container">
            {loader ? (
                    <div className="d-flex spin justify-content-center align-items-center">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <div className="row ">
                        {category.map((item,index) => (
                            <div className=" mt-3 col-6 wrapper"
                                key={index}>
                                <h3 className="mt-2 name-slug">{item.name}</h3>
                                <img className="slug-image" src={item.banner} />
                                <div className="d-flex flex-column slug-content ">
                                    <Link className="home-link mt-3 mb-3"  to={"/" + item.slug}>
                                        <div >Подробнее</div>
                                        <span className="material-icons arrow_right_alt ">
                                                arrow_right_alt
                                            </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
            )}
        </div>
    );
};

export default HomePage;
