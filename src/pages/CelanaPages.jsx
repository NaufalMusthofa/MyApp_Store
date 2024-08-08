import React from "react";
import HomeScreen from "../components/HomeScreen";
import { useNavigate } from 'react-router-dom'

const CelanaPages = () => {
    const navigate = useNavigate()

    // DATA DATA CELANA MENGGUNAKAN DUMMY JSON MANUAL / SENDIRI
    const CelanaProduk = [
        {
            id: 1,
            category: "Celana Pria",
            name: "FROYEMUL | Light grey trouser | Celana bahan pria formal slimfit",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/1/23/ee337496-65ed-415f-87d0-219b2a8aef99.png",
            price: parseInt(169000).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Froyemul Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 2,
            category: "Celana Pria",
            name: "Houseofcuff Celana Chino Panjang Pria Slim fit Stretch Jeans Hitam",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/30/672f0b69-ac08-492c-b2f1-5453a938f5a1.jpg",
            price: parseInt(145000).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Houseofcuff Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 3,
            category: "Celana Pria",
            name: "ZUITER - Celana bahan kantor kerja formal slimfit panjang pria",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/4/22/7070283f-395e-4ca0-902e-a23f372e1881.png",
            price: parseInt(235000).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Zuiter Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 4,
            category: "Celana Pria",
            name: "Celana Chino Pendek Pria 1 pcs TerraCotton Short Edenwear",
            image: "https://images.tokopedia.net/img/cache/900/hDjmkQ/2024/5/27/532a7fe4-bc1d-4e47-bdd8-66acbe01a9d5.jpg",
            price: parseInt(159900).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Edenwear Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 5,
            category: "Celana Pria",
            name: "Celana Pria Cargo Panjang Zweckout Label Slim Fit Twill Jumbo Army",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/9/7/38c73b93-72a8-4f12-b7ca-5febb27053f1.png",
            price: parseInt(187900).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Edenwear Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
        {
            id: 6,
            category: "Celana Pria",
            name: "Celana Panjang Pria Chino Extender Smith Berlin Slim Fit Stretch",
            image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/11/13/6bfda912-5250-43bb-9bb1-ba54f68fd509.jpg",
            price: parseInt(203800).toLocaleString(),
            deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            diskon: Math.floor(Math.random() * 100),
            namaToko: "Edenwear Official",
            gambarToko: "https://cdn-icons-png.flaticon.com/128/1040/1040254.png"
        },
    ];

    // MAPPING ARRAY CELANA NYA
    const MappingCelana = CelanaProduk.map((item) =>
        <div className="ContainerProduk" key={item.id} onClick={() => navigate(`/DetailCelana/${item.id}`, {state: {produk: item}})}>
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
            {/* NAVIGASI NYA */}
            <HomeScreen />

            {/* ISINYA */}
            <h1 style={{textAlign: "left", color: "#666"}}>CELANA PRIA</h1>

            {/* PANGGIL DATANYA */}
            {MappingCelana};
        </div>
    )
}

export default CelanaPages;