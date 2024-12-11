import React, { useEffect, useState } from "react";
import Header from "./HeaderMain";
import Trap_lista from "./Trap_lista";
import axios from "axios";

export default function Trap() {
    const [cds, setcds] = useState([]);

    const Getcds = async () => {

        let resolve = await axios.get('/lista_cd.json');

        // console.log (resolve)
        // return;

        // let resolve = await axios.get('http://10.24.89.45:3000/listacd');
        let data = resolve.data;
        setcds(data);
    }

    useEffect(() => {
        Getcds();
    }, [])

    return (
        <>

        <Header></Header>
        
        <Trap_lista discos={cds}></Trap_lista>
          

        </>
    )
}