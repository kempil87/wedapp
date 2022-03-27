import React from 'react';
import "./NewsCard.css"
import {Accordion} from "react-bootstrap";

 export const NewsCard = ({banner,name,des}) => {
    return (
        <div>



            <div className="news-card">
                <div className="card-name mt-3">{name.toUpperCase()}</div>
                <div className="img-container">
                    <img className="card-img" src={banner}/>
                </div>
                <div className="accordion mt-3">
                    <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="accordion-title">Читать полностью</Accordion.Header>
                            <Accordion.Body>
                                {des}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

;
