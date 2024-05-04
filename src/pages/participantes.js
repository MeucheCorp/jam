import Stream from "../components/Stream"
import Layout from '@theme/Layout';

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export default function Home() {
    const channels = ["meucheroume", "sardoche", "zerator", "nisqy", "a", "b", "c", "d", "e", "f", "g", "h"]
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