import React, {useEffect, useState} from 'react';
import {api} from "../../../../base/axios";
import OrganizationCard from "../../../../components/OrganizationCard/OrganizationCard";

const Restaurant = () => {

    const [organization, setOrganization] = useState([])


    const getOrganizations = () => {

            api.get('organization/restaurant').then((res) => {
                console.log(res)
                setOrganization(res.data)
            })
    }

    useEffect(() => {
        getOrganizations()
    }, [])

    return (
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
    );
};

export default Restaurant;
