import Stream from "../components/Stream"
import Layout from '@theme/Layout';

export default function Home() {
    return (
        <Layout>
            <main>
                <div class="all_pov">
                    <Stream channel="meucheroume" />
                    <Stream channel="sardoche" />
                    <Stream channel="zerator" />
                    <Stream channel="nisqy" />
                    <Stream channel="a" />
                    <Stream channel="b" />
                    <Stream channel="c" />
                    <Stream channel="d" />
                    <Stream channel="e" />
                    <Stream channel="f" />
                    <Stream channel="g" />
                    <Stream channel="h" />
                </div>
            </main>
        </Layout>
    );
}