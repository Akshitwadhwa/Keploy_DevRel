const facts = [
  ["Sample", "mux-mysql"],
  ["App", "Go + Mux"],
  ["Database", "MySQL 8"],
  ["Calls", "POST + GET"],
  ["Replay", "MySQL mocked"],
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
