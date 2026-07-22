'use client';

type ComparisonItem = {
  label: string;
  value: number;
};

export function ChartBarComparison({
  title,
  description,
  data,
  unit = 'ms',
  footer,
  accent,
}: {
  title: string;
  description?: string;
  data: ComparisonItem[];
  unit?: string;
  footer?: string;
  accent?: string;
}) {
  const comparisonMax = Math.max(...data.map((item) => item.value), 1);

  return (
    <section
      aria-label={title}
      className="not-prose my-8 w-full overflow-hidden border border-fd-border bg-fd-card text-fd-card-foreground shadow-sm"
    >
      <header className="space-y-1.5 px-6 pt-6">
        <h3 className="text-lg font-medium">{title}</h3>
        {description ? <p className="text-sm text-fd-muted-foreground">{description}</p> : null}
      </header>

      <div className="space-y-4 px-6 py-7">
        {data.map((item) => (
          <div key={item.label} className="grid grid-cols-[minmax(0,1fr)_5.75rem] items-center gap-3">
            <div
              className="relative h-10 overflow-hidden bg-fd-muted/70"
              role="img"
              aria-label={`${item.label}: ${item.value} ${unit}`}
            >
              <span aria-hidden="true" className="absolute inset-y-0 left-1/4 border-l border-fd-border/80" />
              <span aria-hidden="true" className="absolute inset-y-0 left-1/2 border-l border-fd-border/80" />
              <span aria-hidden="true" className="absolute inset-y-0 left-3/4 border-l border-fd-border/80" />
              <div
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 min-w-1 ${item.label === accent ? 'bg-stone-400 dark:bg-stone-600' : 'bg-stone-200 dark:bg-stone-800'}`}
                style={{ width: `${(item.value / comparisonMax) * 100}%` }}
              />
              <span className="absolute inset-y-0 left-3 right-2 flex items-center truncate text-sm text-stone-700 dark:text-stone-300">
                {item.label}
              </span>
            </div>
            <span className="font-jetbrains-mono text-right text-sm text-stone-600 tabular-nums dark:text-stone-400">
              {item.value.toFixed(3)} {unit}
            </span>
          </div>
        ))}
      </div>

      {footer ? (
        <footer className="border-t border-fd-border px-6 py-4 text-sm text-fd-muted-foreground">
          {footer}
        </footer>
      ) : null}
    </section>
  );
}
