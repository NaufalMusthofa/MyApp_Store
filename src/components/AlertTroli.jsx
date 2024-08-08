import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Myapp.css';
import { LogoTroli } from "../img";

const AlertTroli = ({ getproduk }) => {
    const handleTroli = () => {
        alert(`Pesanan anda : ${getproduk.name}\n\nTelah Di Tambahkan Kedalam Keranjang!`)
    }
    return (
        <button type="button" className="troli" onClick={handleTroli}>
            <img src={LogoTroli} className="LogoTroli"></img>
        </button>
    )
}

export default AlertTroli;