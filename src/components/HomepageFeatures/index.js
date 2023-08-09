import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Navigate',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dash docs was designed from the ground up to be easily accessible and
        used to get your answers to the queries faster.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dash docs lets you focus on what matters. Start your journey
        of becoming the better Flutter Developer by starting from the <code>docs</code> page .
        {/* Dash Website lets you focus on your docs, and we&apos;ll do the chores. Start */}
        {/* ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  {
    title: 'Questions? Ask me anytime',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        If you any queries regarding the docs or you did not understand any
        part of it. You can always reach out to <a href="https://discordapp.com/users/791013208420778034"><b>Cavin </b></a>
        with your queries 😉
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
