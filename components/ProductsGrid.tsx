type Product = { name: string; tag: string; desc: string; bullets: string[] };
const products: Product[] = [
  { name:'PREVAR 1.5', tag:'Control Interno', desc:'Gestión integral del SCI: autocontrol, riesgos, comité y reportes.', bullets:['Anexo 2 por unidad y consolidado','Plan de prevención y mapa de riesgos','+20 reportes con exportación PDF/Excel']},
  { name:'REMPIEC 4.3', tag:'ETL Contable', desc:'Validaciones contables y análisis financiero; conciliaciones.', bullets:['Cuadres e indicadores','Flujo ETL auditable']},
  { name:'COINV', tag:'Inventarios', desc:'Consolidación de inventarios con Versat Sarasola.', bullets:['KPIs y existencias','Alertas de rotación']},
  { name:'COPA', tag:'CxC / CxP', desc:'Consolidación de cuentas por cobrar y pagar.', bullets:['Saldos y antigüedad','Alertas de mora']},
  { name:'Gestor de IPV 2.0', tag:'Gastro Retail', desc:'Inventario a precio de venta con fichas técnicas.', bullets:['Catálogos y recetarios','Reportes operativos']},
  { name:'Carfich 2.0', tag:'Fichas de costo', desc:'Cartas tecnológicas y fichas de costos (Res. 148/2023 MFP).', bullets:['Metodología oficial','Trazabilidad de cambios']},
  { name:'Gesani 1.5', tag:'Agro / Centros de costo', desc:'Control de animales por brigadas/centros de costo.', bullets:['Productividad y mermas','Reportes de campo']},
];
export default function ProductsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p.name} className="rounded-3xl border border-slate-200 p-6 hover:shadow-lg transition bg-white">
          <div className="text-xs font-semibold text-sky-700 uppercase">{p.tag}</div>
          <div className="mt-1 text-lg font-bold">{p.name}</div>
          <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
          <ul className="mt-4 space-y-2 text-sm list-disc list-inside text-slate-700">
            {p.bullets.map((b,i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
