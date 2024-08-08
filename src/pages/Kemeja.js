import React from "react";
import { useNavigate } from 'react-router-dom'
import HomeScreen from "../components/HomeScreen";
import '../css/Myapp.css'
import Home from "./Home";

const Kemeja = () => {
    const navigate = useNavigate()

    // SEMUA DATA DATA KEMEJA NYA DENGAN MEMBUAT DUMMY JSON SENDIRI
    const kemejaProduk = [
        {
            id: 1,
            category: "Kemeja Pria",
            name: "Baju Kemeja Pria Hawai Pantai Size Jumbo Terbaru / Kemeja Cowok Bali",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/18/b814e47c-5e05-4756-b13a-fd868cd7d12b.jpg",
            price: parseInt(185200).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100) + 1,
            namaToko: "MSMO Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png",
            benefits: ["Slim Fit", "Cuttingan Lengan Tidak Gombrong", "Tinggi & Berat Model : 170cm & 70kg"]
        },
        {
            id: 2,
            category: "Kemeja Pria",
            name: "Kemeja Hawai Bali Pria Wanita Motif Keren Jumbo",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/27/758a37bb-6f70-46c5-992f-a8540d2d8796.jpg",
            price: parseFloat(245700).toLocaleString(),
            imageToko: "https://cdn-icons-png.flaticon.com/128/12865/12865974.png",
            namaToko: "Alrayan Official",
            diskon: Math.floor(Math.random() * 100) + 1,
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 3,
            category: "Kemeja Pria",
            name: "MSMO MEN Flanel Shirt LS / Kemeja Flanel Pria / Kemeja Pria",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/28/08dedf09-a38c-4b43-b9de-6b5bf0ecf3bb.jpg",
            price: parseFloat(150800).toLocaleString(),
            imageToko: "https://cdn-icons-png.flaticon.com/128/12865/12865974.png",
            namaToko: "Cloths Official",
            diskon: Math.floor(Math.random() * 100) + 1,
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 4,
            category: "Kemeja Pria",
            name: "Baju Kemeja Polos Putih Pria Lengan Pendek Simple | Baju Katun Cowok",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/5/1/a04fd3f7-f76c-4c29-816f-709e8e8d1b4a.jpg",
            price: parseFloat(85900).toLocaleString(),
            imageToko: "https://cdn-icons-png.flaticon.com/128/12865/12865974.png",
            namaToko: "Java Seven Store",
            diskon: Math.floor(Math.random() * 100) + 1,
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 5,
            category: "Kemeja Pria",
            name: "Alrayyan Store - Kemeja Hawaii Rayon Motif Bunga Dasar Hitam Lengan Pendek",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/5/27/18de105c-e978-49fa-809d-1aa7f215f83a.jpg",
            price: parseFloat(185300).toLocaleString(),
            imageToko: "https://cdn-icons-png.flaticon.com/128/12865/12865974.png",
            namaToko: "Garaf Official",
            diskon: Math.floor(Math.random() * 100) + 1,
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 6,
            category: "Kemeja Pria",
            name: "Hem Alrayyan Kemeja Hawai Rayon Motif Black Star Lengan Panjang Unisex",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/12/4b5acbd0-f263-4a36-af07-5452c5ba48c4.jpg",
            price: parseFloat(285400).toLocaleString(),
            imageToko: "https://cdn-icons-png.flaticon.com/128/12865/12865974.png",
            namaToko: "Platini Official",
            diskon: Math.floor(Math.random() * 100) + 1,
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
    ];

    // MAPPING DATA KEMEJA NYA DENGAN KITA MENGGUNAKAN FUNGSI DARI JSX
    const MappingKemeja = kemejaProduk.map((item) => 
        <div className="ContainerProduk" key={item.id} onClick={() => navigate(`/DetailKemeja/${item.id}`, {state : {produk: item}})}>
            <a className="LinkProduk">
                <img src={item.image} alt={item.name}></img>
                <h3>{item.name}</h3>
                <p>Rp.{item.price}</p>
                <img src={item.gambarToko} style={{width: 30, height: 30, marginLeft: 0, float: "left"}}></img>
                <p style={{marginLeft: 40, marginTop: 22, color: "#777"}}>{item.namaToko}</p>
                <hr />
            </a>
        </div>
    );

    return (
        <div className="ContainerContent">
            {/* NAVIGASI */}
            <HomeScreen />
            {/* CONTENT NYA */}
            <h1 style={{textAlign: "left", color: "#666"}}>KEMEJA PRIA</h1>

            {/* CONTENT ARRAY KEMEJA NYA */}
            {MappingKemeja};
        </div>
    )
}

export default Kemeja