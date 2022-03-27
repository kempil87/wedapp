import React from 'react';
import {Link} from "react-router-dom";
import './OrganizationCard.css'


const OrganizationCard = ({id,name,banner,city,description}) => {


    return (
        <div className="mt-3">
            <div className="organization-card-wrap">
                <div className='col-6'>
                    <h4 className="organization-card-name">
                        {name}
                    </h4>
                    <img className="organization-card-image"  src={banner}/>
                    <div className="organization-card-city mt-2">{city}</div>
                    <div className="des-btn">
                        <div className="organization-card-des mt-1">{description}</div>
                        <Link className="organization-card-link " to={`/organization${id}`}>
                            <div className="mt-2 organization-card-btn">Перейти</div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrganizationCard;
