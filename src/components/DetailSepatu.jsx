import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Myapp.css';
import AlertTroli from "./AlertTroli";
import { Back } from "../img";

const DetailSepatu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const getproduk = location.state?.produk;

    const benefits = ["Upper Knitting memudahkan kaki untuk bernapas dan tidak berkeringat", "Outsole Pure Eva Boost yang Nyaman dan Lembut", "Eco Friendly ( Ramah lingkungan )"]
    const Mappingbenefits = benefits.map((Listitem) => 
        <ul key={Listitem}>
            <li>{Listitem}</li>
        </ul>
    )

    return (
        <div className="ContainerContent">
            <h2>Halaman Detail Produk</h2>
            {getproduk ? (
                <div className="DetailProduk">
                    <img src={getproduk.image}></img>
                    <p className="category">{getproduk.category}</p>
                    <h3>{getproduk.name}</h3>
                    <p>Rp.{getproduk.price}</p>
                    <p className="diskon">Diskon {getproduk.diskon}%</p>
                    <p>{getproduk.deskripsi}</p>

                    {/* benefits */}
                    {Mappingbenefits}

                    {/* alert troli */}
                    <AlertTroli getproduk={getproduk} />
                </div>
            ) : (
                <p>ERROR.. PRODUK TIDAK DITEMUKAN</p>
            )};

            {/* back */}
            <button type="button" className="Back">
                <img src={Back} className="logoBack" onClick={() => navigate('/SepatuPages')}></img>
            </button>
        </div>
    )
}

export default DetailSepatu;