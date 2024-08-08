import React from "react";
import HomeScreen from "../components/HomeScreen";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/Myapp.css'

// DAN DISINI ADALAH DEFAULT ATAU ADMIN ASLINYA
const Home = () => {
    const navigate = useNavigate();
    const location = useLocation()

    return (
        <div className="Header">
            <div className="ContainerContent">
                <a 
                    className={location.pathname === '/' ? "active" : ""}
                    onClick={() => navigate('/')}
                >
                    Home
                </a>
                <a 
                    className={location.pathname === '/KemejaPages' ? "active" : ""}
                    onClick={() => navigate('/KemejaPages')}
                >
                    Kemeja</a>
                <a 
                    className={location.pathname === '/CelanaPages' ? "active" : ""}
                    onClick={() => navigate('/CelanaPages')}
                >
                    Celana
                </a>
                <a
                    className={location.pathname === '/SepatuPages' ? "active" : ""}
                    onClick={() => navigate('/SepatuPages')}
                >
                    Sepatu
                </a>
                <hr />

                {/* <h1>INI ADALAH HALAMAN HOME</h1> */}
                <h1 style={{textAlign: "center", color: "#444", marginTop: 40}}>ADMIN SEDANG MENCARI REFERENSI UNTUK HALAMAN INI</h1>
                <h2 style={{textAlign: "center", color: "#555", marginTop: 40}}>APLIKASI INI DIBUAT MENGGUNAKAN FULL REACT JAVASCRIPT + CSS</h2>

                {/* footer */}
                <a className="myig" href="https://instagram.com/naufal_musthofa">
                    <p style={{fontStyle: "italic", textAlign: "center", marginTop: 250, color: "#666"}}>COPYRIGHT BY. MUHAMMAD NAUFAL MUSTHOFA</p>
                </a>
            </div>

        </div>
    )
}

export default Home;