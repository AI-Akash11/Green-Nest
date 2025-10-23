import React, { use, useEffect, useState } from "react";
import { PlantContext } from "./PlantContext";
import { AuthContext } from "./AuthContext";

const PlantProvider = ({ children }) => {
    const [plants, setPlants] = useState([]);
    const {setLoading} = use(AuthContext)

    useEffect(()=>{
        fetch('/plantData.json')
        .then((res)=> res.json())
        .then((data)=> {
            setPlants(data);
            setLoading(false);
        })
        .catch(error =>{
            console.log(error);
            setLoading(false);
        })
    },[]);

    const plantInfo = {
        plants
    }

  return <PlantContext value={plantInfo}>{children}</PlantContext>
};

export default PlantProvider;
