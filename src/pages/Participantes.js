import Stream from "../components/Stream"
import Name from "../components/Name"
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
                shuffle(jsonData.streamers)
                shuffle(jsonData.non_streamers)
                setData(jsonData)
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
                    {data && data.streamers.map(({ channel, name }) => (<Stream channel={channel} name={name} />))}
                </div>
                <div class="non_streamers">
                    {data && data.non_streamers.map((name) => (<Name name={name} />))}
                </div>
            </main>
        </Layout>
    )
};