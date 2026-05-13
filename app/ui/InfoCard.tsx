type CardType = {
  title: string;
  description: string;
  logo: string;
  alerts: AlertType[];
  color: string;
};

type AlertType = {
  title: string;
  description: string;
  color: string;
};

export default function InfoCard({ title, description, logo, alerts, color }: CardType) {
  return (
    <>
      <div className="rounded-2xl bg-white p-4 shadow">
        <header className="flex items-center">
          <div
            className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-${color}-400`}
          >
            <span
              className="material-symbols-outlined text-white"
              style={{ fontSize: "2.5rem", lineHeight: "1" }}
            >
              {logo}
            </span>
          </div>
          <h1 className="ms-3 text-2xl font-semibold">{title}</h1>
        </header>
        <div className="mt-5 text-justify">
          {description}

          {alerts.map((alert, index) => (
            <div
              className={`mt-5 rounded-lg border border-${alert.color}-200 bg-${alert.color}-50 p-4`}
              key={index}
            >
              <p className="mb-1 text-sm text-gray-600">{alert.title}:</p>
              <code className={`text-sm text-${alert.color}-900`}>{alert.description}</code>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
