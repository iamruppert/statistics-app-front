import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import Chart from 'react-google-charts';
import { saveAs } from 'file-saver';
import yaml from 'js-yaml';
import xmljs from 'xml-js';

const Pollution = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');

    const options = {
        chart: {
            title: 'Wykres pokazujący ilość wytwarzanych zanieczyszczeń w latach 2005-2020 z podziałem na poszczególne związki chemiczne',
            subtitle: 'dane pokazane w tys.ton',
        },
    };

    const handleYearChange = (event) => {
        const year = event.target.value;
        setSelectedYear(year);

        if (year !== '') {
            const filtered = data.filter((item) => item.yearValue === parseInt(year));
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const config = {
                    method: 'get',
                    url: 'http://localhost:8080/api/v1/auth/airQualityData',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': token,
                    },
                };
                const { data: res } = await axios(config);
                setData(res);
                setFilteredData(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const prepareChartData = () => {
        const chartData = [['Year', 'Sulfur Dioxide', 'Nitrogen Oxides', 'Carbon Dioxide', 'Carbon Monoxide', 'Non Methane Volatile Organic Compounds', 'Anthropogenic Sources', 'Nature', 'Ammonia', 'Particulate Matter']];
        filteredData.forEach((item) => {
            const rowData = [
                item.yearValue.toString(),
                item.sulfurDioxide,
                item.nitrogenOxides,
                item.carbonDioxide,
                item.carbonMonoxide,
                item.nonMethaneVolatileOrganicCompounds,
                item.anthropogenicSources,
                item.nature,
                item.ammonia,
                item.particulateMatter,
            ];
            chartData.push(rowData);
        });
        return chartData;
    };

    const handleExportJSON = () => {
        const jsonData = JSON.stringify(filteredData, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        saveAs(blob, 'pollution_data.json');
    };

    const handleExportXML = () => {
        const xmlData = xmljs.js2xml(filteredData, { compact: true, spaces: 2 });
        const blob = new Blob([xmlData], { type: 'application/xml' });
        saveAs(blob, 'pollution_data.xml');
    };

    const handleExportYAML = () => {
        const yamlData = yaml.dump(filteredData);
        const blob = new Blob([yamlData], { type: 'text/plain' });
        saveAs(blob, 'pollution_data.yaml');
    };

    return (
        <div>
            <select value={selectedYear} onChange={handleYearChange}>
                <option value="">All</option>
                <option value="2005">2005</option>
                <option value="2010">2010</option>
                <option value="2015">2015</option>
                <option value="2020">2020</option>
                {/* Dodaj więcej opcji roku według potrzeb */}
            </select>

            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Rok</th>
                    <th>Dwutlenek Siarki [tys. ton]</th>
                    <th>Tlenki Azotu [tys. ton]</th>
                    <th>Dwutlenek Węgla [tys. ton]</th>
                    <th>Tlenek Węgla [tys. ton]</th>
                    <th>Lotne Związki Organiczne Bez Metanu [tys. ton]</th>
                    <th>Źródła Antropogenne [tys. ton]</th>
                    <th>Natura [tys. ton]</th>
                    <th>Amoniak [tys. ton]</th>
                    <th>Cząstki Stałe [tys. ton]</th>
                    {/* Dodaj więcej nagłówków kolumn według potrzeb */}
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.yearValue}</td>
                        <td>{item.sulfurDioxide}</td>
                        <td>{item.nitrogenOxides}</td>
                        <td>{item.carbonDioxide}</td>
                        <td>{item.carbonMonoxide}</td>
                        <td>{item.nonMethaneVolatileOrganicCompounds}</td>
                        <td>{item.anthropogenicSources}</td>
                        <td>{item.nature}</td>
                        <td>{item.ammonia}</td>
                        <td>{item.particulateMatter}</td>
                        {/* Dodaj więcej komórek danych kolumn według potrzeb */}
                    </tr>
                ))}
                </tbody>
            </table>

            <button onClick={handleExportJSON}>Export to JSON</button>
            <button onClick={handleExportXML}>Export to XML</button>
            <button onClick={handleExportYAML}>Export to YAML</button>

            <Chart
                chartType="Bar"
                width="1500px"
                height="800px"
                data={prepareChartData()}
                options={options}
            />
        </div>
    );
};

export default Pollution;
