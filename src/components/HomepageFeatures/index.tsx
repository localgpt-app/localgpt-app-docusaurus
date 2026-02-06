import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Local Device Focused',
    description: (
      <>
        All your data stays on your machine. No cloud dependencies, no data
        leaving your system. Complete privacy and control over your AI
        conversations and memory.
      </>
    ),
  },
  {
    title: 'Persistent Memory System',
    description: (
      <>
        Markdown-based memory with SQLite FTS5 full-text search. Your AI
        remembers context across sessions with daily logs, curated knowledge,
        and automatic indexing.
      </>
    ),
  },
  {
    title: 'Multi-Provider Support',
    description: (
      <>
        Connect to OpenAI, Anthropic Claude, or local Ollama models. Switch
        providers seamlessly while keeping your memory and conversation
        history intact.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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
