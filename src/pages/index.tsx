import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          MeucheJam
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
        Bienvenue dans la MeucheJam ! Une GameJam crée et imaginée par la MeucheTeam ! Le but est de faire une Jam ouverte à tous et à toutes en solo ou en team, en tant que dev ou artiste, tout le monde est convié !!

Si vous êtes streamers, vous pourrez nous envoyer votre POV et on passera vous voir de temps en temps sur la meucheTV ici : https://www.twitch.tv/meucheroume

Et si vous n'êtes pas streamer, pas de souci, vous aurez le droit à tout autant de fun !
    </Layout>
  );
}
