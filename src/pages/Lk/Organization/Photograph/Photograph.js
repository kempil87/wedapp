import React, {useEffect, useState} from 'react';
import {api} from "../../../../base/axios";
import OrganizationCard from "../../../../components/OrganizationCard/OrganizationCard";


const Photograph = () => {

    const [organization, setOrganization] = useState([])


    const getPhotographOrganizations = () => {

        api.get('organization/photo').then((res) => {
            console.log(res)
            setOrganization(res.data)
        })
    }

    useEffect(() => {
        getPhotographOrganizations()
    }, [])

    return (
        <div className="container mt-3">
            <div className="row">
                {organization.map((item) => (
                    <div className="wrap col-6">
                        <OrganizationCard
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            banner={item.banner}
                            description={item.description}
                            city={item.city}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photograph;
