import Stream from "../components/Stream"
import Layout from '@theme/Layout';
import React, { useState, useEffect } from 'react';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


export default () => {
    const [data, setData] = useState(null);

    useEffect(async () => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://meuchejam-backend.onrender.com');
                const jsonData = await response.json();
                console.log("finished fetching data:")
                shuffle(jsonData)
                setData(jsonData)
                console.log(jsonData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <Layout>
            <main>
                <div class="all_pov">
                    {data && data.map((channel) => (<Stream channel={channel} />))}
                </div>
            </main>
        </Layout>
    )
};