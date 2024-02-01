import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../Pollution/styles.module.css';
import Chart from "react-google-charts";

const Industry = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedTable, setSelectedTable] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [dataPieChart, setDataPieChart] = useState([]);
    const [dataBarChart, setDataBarChart] = useState([]);
    const options = {
        title: "Produkcja sprzedana w cenach na 2020r. w mln zł",
        is3D: true,
    };

    const handleYearChange = (event) => {
        const year = event.target.value;
        setSelectedYear(year);

        if (year !== '') {
            const filtered = data.filter((item) => item.year === parseInt(year));
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };

    const handleTableChange = (event) => {
        const table = event.target.value;
        setSelectedTable(table);

        if (table !== "") {
            const filtered = data.filter((item) => item.table === table);
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };

    const fetchData = async () => {
        const token = localStorage.getItem("token");
        try {
            let url = `http://localhost:8080/api/v1/auth/combine`;
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
                    "x-access-token": token,
                },
            };
            const { data: res } = await axios(config);
            setData(res);
            setFilteredData(res);
            prepareChartData(res); // Przygotowanie danych dla wykresów
        } catch (error) {
            console.log(error);
        }
    };

    const prepareChartData = (data) => {

        const pieChartData = [
            ['Table', 'Value']
        ];
        data.forEach((item) => {
            pieChartData.push([item.year.toString(), item.produkcjaSprzedana]);
        });
        setDataPieChart(pieChartData);


        const barChartData = [['Year', 'Produkcja sprzedana', 'Przeciętne zatrudnienie', 'Wydajnosc Pracy', 'Przecietne Wynagrodzenie']];
        data.forEach((item) => {
            barChartData.push([item.year.toString(), item.produkcjaSprzedana, item.przecietneZatrudnienie, item.wydajnoscPracy, item.przecietneWynagrodzenia ]);
        });
        setDataBarChart(barChartData);
    };

    const handleShowData = () => {
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <select value={selectedYear} onChange={handleYearChange}>
                <option value="">All</option>
                <option value="2005">2005</option>
                <option value="2010">2010</option>
                <option value="2015">2015</option>
                <option value="2020">2020</option>
                {/* Add more year options as needed */}
            </select>

            <select value={selectedTable} onChange={handleTableChange}>
                <option value="">Select a table</option>
                <option value="ElectricityData">Electricity Data</option>
                <option value="IndustryData">Industry Data</option>
                <option value="ManufacturingData">Manufacturing Data</option>
                <option value="MiningData">Mining Data</option>
                {/* Add more table options as needed */}
            </select>

            <button onClick={handleShowData}>Show Data</button>

            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Rok</th>
                    <th>Produkcja sprzedana w cenach na 2020r. [mln zł]</th>
                    <th>Przeciętne zatrudnienie  [tys. zł]</th>
                    <th>Wydajność pracy w cenach na 2020r. [tys. zł]</th>
                    <th>Przeciętne miesięczne wynagrodzenia brutto w cenach na 2020r. [zł]</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.year}</td>
                        <td>{item.produkcjaSprzedana}</td>
                        <td>{item.przecietneZatrudnienie}</td>
                        <td>{item.wydajnoscPracy}</td>
                        <td>{item.przecietneWynagrodzenia}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className={styles.chart}>
                <Chart
                    chartType="PieChart"
                    data={dataPieChart}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
            <div className={styles.chart}>
                <Chart
                    chartType="Bar"
                    data={dataBarChart}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>

        </div>
    );
};

export default Industry;