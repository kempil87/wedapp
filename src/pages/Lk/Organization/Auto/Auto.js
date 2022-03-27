import React, {useEffect, useState} from 'react';
import {api} from "../../../../base/axios";
import OrganizationCard from "../../../../components/OrganizationCard/OrganizationCard";


const Auto = () => {

    const [organization, setOrganization] = useState([])


    const getAutoOrganizations = () => {

        api.get('organization/auto').then((res) => {
            console.log(res)
            setOrganization(res.data)
        })
    }

    useEffect(() => {
        getAutoOrganizations()
    }, [])

    return (
        <div className="container mt-3">
           В разработке
        </div>
    );
};

export default Auto;
