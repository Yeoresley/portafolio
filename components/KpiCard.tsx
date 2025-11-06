type Props = { label:string; value:string; trend?: 'up'|'down'|'flat' };
export default function KpiCard({label, value, trend='flat'}:Props){
  const icon = trend==='up' ? '▲' : trend==='down' ? '▼' : '■';
  const color = trend==='up' ? 'text-green-600' : trend==='down' ? 'text-red-600' : 'text-slate-500';
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-extrabold">{value} <span className={color} title={trend}>{icon}</span></div>
    </div>
  );
}
