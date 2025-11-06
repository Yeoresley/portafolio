import KpiCard from '../../../components/KpiCard';

export default function Cases(){
  return (
    <section className="container py-14">
      <h1 className="text-3xl font-bold">Casos de éxito</h1>
      <p className="mt-2 text-slate-600">Resultados reales con KPIs medibles.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard label="Reducción de tiempo de cierre" value="-35%" trend="up" />
        <KpiCard label="Aumento de cumplimiento SCI" value="+22 pp" trend="up" />
        <KpiCard label="Incidencias detectadas" value="-41%" trend="up" />
        <KpiCard label="Tiempo a reporte" value="-60%" trend="up" />
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="card"><h3 className="text-lg font-semibold">PREVAR en organización multi‑entidad</h3><p className="mt-2 text-sm text-slate-700">Consolidación de Anexo 2 y riesgos por unidad. Auditorías más rápidas y trazables.</p></div>
        <div className="card"><h3 className="text-lg font-semibold">REMPIEC en finanzas</h3><p className="mt-2 text-sm text-slate-700">Validaciones automáticas que evitan re‑trabajo y aceleran cierres.</p></div>
      </div>
    </section>
  );
}
