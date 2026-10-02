const facts = [
  ["Sample", "mux-mysql"],
  ["CLI", "Keploy 3.8.58"],
  ["Go", "1.27.1"],
  ["Host", "Apple Silicon"],
  ["Result", "2 passed"],
] as const;

export function RunMeta() {
  return (
    <dl className="run-meta">
      {facts.map(([term, detail]) => (
        <div key={term}>
          <dt>{term}</dt>
          <dd>{detail}</dd>
        </div>
      ))}
    </dl>
  );
}
