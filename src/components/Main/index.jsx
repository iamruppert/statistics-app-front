import styles from "./styles.module.css";
import {useState} from "react";
import axios from "axios";
import Pollution from "../Pollution/Pollution.jsx";
import Industry from "../Industry/Industry.jsx";

const Main = () => {
    const [dane, setDane] = useState([]);
    const [pollution, setPollution] = useState([]);
    const [showPollution, setShowPollution] = useState(false);
    const [showIndustry, setShowIndustry] = useState(false);
    const [industry, setIndustry] = useState(false);
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedTable, setSelectedTable] = useState('');

    const handleLogout = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const config = {
                    method: "post",
                    url: "http://localhost:8080/api/v1/auth/logout",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                };
                await fetch(config.url, {
                    method: config.method,
                    headers: config.headers,
                });
            } catch (error) {
                console.error("Błąd podczas wylogowywania:", error);
            }
        }
        localStorage.removeItem("token");
        window.location.reload();
    };



    const handleShowPollution = async () => {
        setShowPollution(true);
        const token = localStorage.getItem("token");
        try {
            let url = 'http://localhost:8080/api/v1/auth/airQualityData';
            if (selectedYear !== '') {
                url += `/filterByYear?year=${selectedYear}`;
            }
            const config = {
                method: 'get',
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`,
                },
            };
            const { data: res } = await axios(config);
            setPollution(res);
        } catch (error) {
            console.log(error);
        }
    };
    const handleShowIndustry = async () => {
        setShowIndustry(true);
        const token = localStorage.getItem("token");
        try {
            let url = "http://localhost:8080/api/v1/auth/combine";
            if (selectedTable !== "") {
                url += `/${selectedTable}`;
            }
            if (selectedYear !== "") {
                url += `/filterByYear?year=${selectedYear}`;
            }
            const config = {
                method: "get",
                url: url,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            };
            const { data: res } = await axios(config);
            setIndustry(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handleGoHome = () => {
        window.location.href = "/";
    };


    const handleDeleteAccount = async () => {
        const token = localStorage.getItem("token");
        try {
            const config = {
                method: "delete",
                url: "http://localhost:8080/api/v1/auth/user/deleteAccount",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            };
            await axios(config);
            handleLogout();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>ZESTAWIENIE DANYCH DOTYCZĄCYCH STANU ŚRODOWISKA</h1>
                <button className={styles.white_btn} onClick={handleGoHome}>
                    Home
                </button>
                <button className={styles.white_btn} onClick={handleShowPollution}>
                    Pollution
                </button>
                <button className={styles.white_btn} onClick={handleShowIndustry}>
                    Industry
                </button>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
                <button className={styles.red_btn} onClick={handleDeleteAccount}>
                    Delete Account
                </button>


            </nav>
            {showPollution ? <Pollution pol={pollution} /> : null}
            {showIndustry ? <Industry ind={industry} /> : null}
        </div>
    );
};

export default Main;
