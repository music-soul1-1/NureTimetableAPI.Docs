import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  emoji: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: "homepage.featurelist.first.title", 
      message: "Maximum data"
    }),
    emoji: "📊",
    description: (
      <Translate id="homepage.featurelist.first.description">
        The response models are comprehensive, providing all the data needed. Get even more data than from cist.nure.ua!
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.featurelist.second.title", 
      message: "Fully open-source"
    }),
    emoji: "🔓",
    description: (
      <Translate id="homepage.featurelist.second.description">
        The project is fully open-source and is available on GitHub. 
        You can contribute to the project by creating a pull request. 
        No personal user data is used and analyzed.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepage.featurelist.third.title", 
      message: "Powered by ASP .NET Core"
    }),
    emoji: "⚙️",
    description: (
      <Translate id="homepage.header.third.description">
        The project is powered by ASP .NET Core, which makes the API fast, type-safe, and reliable.
      </Translate>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <p className={styles.featureEmoji} role="img">{emoji}</p>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
