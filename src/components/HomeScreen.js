import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Myapp.css';

// DISINI ADALAH DEFAULT UNTUK BERPINDAH NAVIGASINYA
const HomeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="Header">
         {/* ? = itu maksudnya ketika true maka active(class nya) menjadi ada warna nya pada saat klik maka menjadi aktif warnanya 
            : = itu maksudnya ketika false maka jalankan sctring kosong atau/tidak ada yg dijalankan
         */}
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
        </div>
    )
}

export default HomeScreen;