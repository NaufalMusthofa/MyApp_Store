import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Back, LogoTroli, ShoppingLogo } from '../img/index'
import '../css/Myapp.css';
import AlertTroli from "./AlertTroli";

const DetailKemeja = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const getproduk = location.state?.produk;

    const benefits = ["Slim Fit", "Cuttingan Lengan Tidak Gombrong", "Tinggi & Berat Model : 170cm & 70kg"]
    const Mappingbenefits = benefits.map((Listitem) => 
        <ul key={Listitem}>
            <li>{Listitem}</li>
        </ul>
    )

    return (
        <div className="ContainerContent">
            {/* <h1>INI HALAMAN DETAIL PRODUK KEMEJA DARI DATA ARRAY NYA. JADI KITA MENGAMBIL / GET DATANYA</h1> */}
            <h2>Halaman Detail Produk</h2>
            
            {/* AMBIL DATA DARI LOKASI KEMEJA.JS MENGGUNAKAN location.state?.produk */}
            {getproduk ? ( // JIKA TRUE, MAKA..
                <div className="DetailProduk">
                    <img src={getproduk.image}></img>
                    <p className="category">{getproduk.category}</p>
                    <h3>{getproduk.name}</h3>
                    <p>Rp.{getproduk.price}</p>
                    <p className="diskon">Diskon {getproduk.diskon}%</p>
                    <p>{getproduk.deskripsi}</p>
                    
                    {/* list item benefits */}
                    {Mappingbenefits}

                    {/* ALERT NYA */}
                    <AlertTroli getproduk={getproduk} />
                </div>
            ) : ( // JIKA FALSE, MAKA..
                <p>Error.. Produk Tidak Ditemukan</p>
            )}

            {/* BACK / KEMBALI */}
            <button type="button" className="Back" onClick={() => navigate('/KemejaPages')}>
                <img className="logoBack" src={Back}></img>
            </button>
        </div>
    )
}

export default DetailKemeja;