import React, {useEffect, useState} from 'react';
import {api} from "../../../base/axios";
import {Link, useParams} from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./OrganizationIn.css"
import {Button} from "react-bootstrap";

const OrganizationIn = () => {
    const {id} = useParams()
    const [orgInfo, setOrgInfo] = useState(null)

    const getOrganization = () => {
        api.get(`organization/${id}`).then((res) => {
            console.log(34534, res.data)
            setOrgInfo(res.data)
        })
    }

    useEffect(() => {
        getOrganization()
    }, [])

    return (
        <div className="container orgInfo-content mt-3">
            {orgInfo && (
                <>
                    <div className="orgInfo-banName  d-flex justify-content-around">
                        <img className="orgInfo-banner-img" src={orgInfo?.banner}/>
                        <div className="d-flex flex-column">
                            <h3 className="orgInfo-sub">{orgInfo?.category}</h3>
                            <h3 className="orgInfo-name">{orgInfo?.name}</h3>
                            <h3 className="orgInfo-rate">Рейтинг {orgInfo?.rating}</h3>
                            <h3 className="orgInfo-city">{orgInfo?.city}</h3>
                        </div>
                        <div className="btns d-flex flex-column">
                            <button className="phone-btn d-flex flex-column ">
                                Позвонить
                                <a className="phone-link" href={`tel:${orgInfo?.phone}`}>
                                    {orgInfo?.phone}
                                </a>
                            </button>
                            <Button className="favorite-btn mt-2">В Избранное</Button>
                        </div>
                    </div>
                    <div className="category-wrap mt-3">
                        <h3>Категории</h3>
                        {orgInfo?.service.map((i) =>(
                            <div className="d-flex justify-content-between">
                                <h5 className="service-left">
                                    {i.category}
                                </h5>
                                <h5 className="service-right">
                                    от {i.price} ₽
                                </h5>
                            </div>
                        ))}
                    </div>
                    <div className="orgInfo-des mt-3">
                        <h3>О нас</h3>
                        <h6>
                            {orgInfo.description}
                        </h6>
                    </div>
                    <div className="social d-flex">
                        <div className="d-flex flex-column">
                           <h3> Мы в соцсетях</h3>
                            {orgInfo?.social.map((i) =>(
                                <a className="social-link" href={i.url}>
                                    {i.tag.toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>

                    <h3 className="mt-4">Наша Галлерея</h3>
                    <div className="image-gallery container mt-2">
                        {orgInfo?.images.length > 0 && (
                            <ImageGallery

                                items={orgInfo?.images.map((i) => ({original:i.image,thumbnail:i.image}))}
                            />
                        )}
                    </div>
                </>
                )}
        </div>
    );
};

export default OrganizationIn;
