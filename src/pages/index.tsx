import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

import MockImage from "../../static/img/docusaurus-social-card.jpg";

const renderDocMockdatas: Array<{
  image: string;
  title: string;
  desc: string;
  link: string;
}> = [
  {
    image: MockImage,
    title: "Java สำหรับคนหล่อ",
    desc: "Lorem ipsum dolor sit amet, ",
    link: "/test/intro",
  },
  {
    image: MockImage,
    title: "Python สำหรับคนสวย",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie.",
    link: "/docs/a/intro",
  },
  {
    image: MockImage,
    title: "Kotlin 101",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie.",
    link: "/docs/intro",
  },
  {
    image: MockImage,
    title: "JavaScript is old",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie.",
    link: "/docs/intro",
  },
  {
    image: MockImage,
    title: "How to find a new jobs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie.",
    link: "/docs/intro",
  },
  {
    image: MockImage,
    title: "Hello world",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie.",
    link: "/docs/intro",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <p className="hero__title">Latest document uploads.</p>
        <DocsCard />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className={styles.headerBar}>
      <div className="container">
        <div className="hero__title">{"mhakheancode."}</div>
        <div className="hero__subtitle">{"Documents for thai developer."}</div>
      </div>
    </div>
  );
}

function DocsCard() {
  return (
    <div className={styles.cardContainer}>
      {renderDocMockdatas.map((item, index) => (
        <div className={styles.cardBody}>
          <img
            src={item.image}
            alt="example"
            style={{ width: "400px", height: "200px", objectFit: "cover" }}
          />
          <div className="hero__subtitle">{item.title}</div>
          <div>{item.desc}</div>
          <Link
            className="hero__subtitle"
            to={item.link}
          >
            อ่านต่อ
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout noFooter={true}>
      <div className={styles.test}>
        <HomePage />
      </div>
    </Layout>
  );
}
