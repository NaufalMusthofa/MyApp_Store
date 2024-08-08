import React from "react";
import HomeScreen from "../components/HomeScreen";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/Myapp.css'
import { Back } from "../img";
import AlertTroli from "./AlertTroli";

const DetailCelana = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const getproduk = location.state?.produk;

    const benefits = ["Slim Fit", "Bahan semi wool", "Model Celana Panjang diatas mata kaki"]
    const Mappingbenefits = benefits.map((Listitem) => 
        <ul key={Listitem}>
            <li>{Listitem}</li>
        </ul>
    )

    return (
        <div className="ContainerContent">
            <h2>Halaman Detail Produk</h2>

            {/* panggil datanya */}
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

            {/* BACK / KEMBALI */}
            <button type="button" className="Back" onClick={() => navigate('/CelanaPages')}>
                <img className="logoBack" src={Back}></img>
            </button>
        </div>
    )
}

export default DetailCelana;