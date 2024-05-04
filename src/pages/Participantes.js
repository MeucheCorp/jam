import Stream from "../components/Stream"
import Layout from '@theme/Layout';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export default function Home() {
    const channels = ["meucheroume", "skyyart", "kitano_lol"]
    shuffle(channels)
    return (
        <Layout>
            <main>
                <div class="all_pov">
                    {channels.map((channel) => (<Stream channel={channel} />))}
                </div>
            </main>
        </Layout>
    );
}