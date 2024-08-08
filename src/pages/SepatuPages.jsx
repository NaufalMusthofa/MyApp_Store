import React from "react";
import '../css/Myapp.css';
import HomeScreen from "../components/HomeScreen";
import { useNavigate } from "react-router-dom";

const SepatuPages = () => {
    const navigate = useNavigate();

    // DATA DATA SEPATU
    const SepatuProduk = [
        {
            id: 1,
            category: "Sepatu Pria",
            name: "Sepatu Sneakers Pria NIKE EBERNON LOW PREM AQ1774102 ORI",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/16/38babc94-7363-48ae-88fd-d951f9831aaf.png",
            price: parseInt(899200).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Sneakears Dept Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 2,
            category: "Sepatu Pria",
            name: "Kanky - Sepatu Sneakers Casual Sport Sekolah Pria Dewasa",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/16/4e2b90ca-8b91-4b99-9cff-bdcf10efd16a.jpg",
            price: parseInt(311400).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Kanky Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 3,
            category: "Sepatu Pria",
            name: "Leedoo Sneakers Pria Sepatu Olahraga Cowok Casual Running",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/7/20/95e04b16-5943-4110-b7e0-7ec55be888e2.png",
            price: parseInt(120900).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Leedoo Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 4,
            category: "Sepatu Pria",
            name: "Techdoo Sepatu Formal Kantor Putih Casual Sepatu Sneakers Pria",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/14/79a6e224-9042-412f-8b3e-f7f9bad0f497.jpg",
            price: parseInt(135500).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Techdoo Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 5,
            category: "Sepatu Pria",
            name: "Aerostreet 40-43 Riku Putih Biru Tua Merah - Sepatu Sneakers Sport",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/12/4/f433eab8-63ba-46f4-b705-ff44d7be66b2.jpg",
            price: parseInt(167200).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Aostreet Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 6,
            category: "Sepatu Pria",
            name: "Sepatu Pria Sneakers Casual Import Tali Premium Kets Original Keren",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/12/22/e9296cda-1dea-472c-89b5-95664ac0a8ec.jpg",
            price: parseInt(228900).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Persada Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
    ]

    const MappingSepatu = SepatuProduk.map((item) =>
        <div className="ContainerProduk" key={item.id} onClick={() => navigate(`/DetailSepatu/${item.id}`, {state: {produk: item}})}>
            <a className="LinkProduk">
                <img src={item.image}></img>
                <h3>{item.name}</h3>
                <p>Rp.{item.price}</p>
                <img src={item.gambarToko} style={{width: 30, height: 30, marginLeft: 0, float: "left"}}></img>
                <p style={{marginLeft: 40, marginTop: 22, color: "#777"}}>{item.namaToko}</p>
                <hr />
            </a>
        </div>
    )

    return (
        <div className="ContainerContent">
            {/* NAVIGASINYA */}
            <HomeScreen />

            {/* header sepatu */}
            <h1 style={{textAlign: "left", color: "#666"}}>SEPATU PRIA</h1>

            {/* PANGGIIL MAPPING SEPATU NYA */}
            {MappingSepatu}
        </div>
    )
}

export default SepatuPages;