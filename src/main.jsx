import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const iconPaths = {
  representacion: ["M4 19V8l8-4 8 4v11", "M8 19v-7h8v7", "M10 9h4"],
  informacion: ["M4 5h16v14H4z", "M8 9h8", "M8 13h8", "M8 17h5"],
  asesoramiento: ["M6 5h12a2 2 0 0 1 2 2v8H9l-5 4V7a2 2 0 0 1 2-2z", "M9 10h6", "M9 13h4"],
  capacitacion: ["M4 6h16v10H4z", "M8 20h8", "M12 16v4", "m9 11 2 2 4-5"],
  red: ["M6 12a3 3 0 1 0 0-.1", "M18 7a3 3 0 1 0 0-.1", "M18 17a3 3 0 1 0 0-.1", "m8.7 10.8 6.6-2.6", "m8.7 13.2 6.6 2.6"],
  visibilidad: ["M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z", "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  directorio: ["M5 4h14v16H5z", "M9 8h6", "M9 12h6", "M9 16h4"],
  eventos: ["M6 4v3", "M18 4v3", "M4 8h16v12H4z", "M8 12h3", "M13 12h3", "M8 16h3"],
  precios: ["M4 19h16", "M7 16V9", "M12 16V5", "M17 16v-4", "m15 7 2-2 2 2"],
  normativa: ["M7 4h10l2 4v12H5V4h2z", "M9 12h6", "M9 16h6", "M9 8h5"],
  logistica: ["M3 7h11v9H3z", "M14 10h4l3 3v3h-7z", "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  whatsapp: ["M5 20l1.2-4A8 8 0 1 1 9 18.2L5 20z", "M9 9c1 3 3 5 6 6l1-2-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2L9 9z"],
  mapa: ["m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6z", "M9 4v14", "M15 6v14"],
  socio: ["M12 3 4 7v6c0 5 3.5 7 8 8 4.5-1 8-3 8-8V7l-8-4z", "m8.5 12 2.2 2.2L15.8 9"],
  comercio: ["M5 9h14l-1-4H6L5 9z", "M6 9v10h12V9", "M9 19v-6h6v6"]
};

function Icon({ name, className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

const benefits = [
  ["representacion", "Representacion sectorial", "Defensa de intereses comunes ante organismos publicos, proveedores y actores de la cadena."],
  ["informacion", "Informacion de mercado", "Boletines, alertas e informes para comprar, vender y decidir mejor."],
  ["asesoramiento", "Asesoramiento", "Consultas legales, laborales, impositivas, municipales, tecnicas y de seguridad e higiene."],
  ["capacitacion", "Capacitacion", "Talleres para duenos, vendedores, administracion, encargados y personal de deposito."],
  ["red", "Red de negocios", "Eventos, rondas, comites y contacto con empresas del ecosistema."],
  ["visibilidad", "Visibilidad", "Presencia en directorio de socios, campanas institucionales y difusion sectorial."],
  ["socio", "Beneficios comerciales", "Convenios con proveedores, servicios profesionales, software, seguros, logistica y capacitacion."],
  ["eventos", "Agenda comun", "Espacios de trabajo para resolver problemas compartidos del rubro."]
];

const problems = [
  ["precios", "Cambios de precios dificiles de anticipar.", "La informacion temprana ayuda a cuidar margen y stock."],
  ["informacion", "Falta de informacion regional confiable.", "Una lectura territorial permite decidir con contexto."],
  ["logistica", "Problemas de stock, logistica y costos.", "La red ayuda a identificar cuellos de botella comunes."],
  ["normativa", "Dudas sobre normativa, habilitaciones y tramites.", "El consultorio ordena consultas y prioridades."],
  ["capacitacion", "Necesidad de capacitar equipos.", "Formatos cortos para mostrador, deposito y administracion."],
  ["visibilidad", "Baja visibilidad conjunta del sector.", "Una camara activa comunica mejor el peso regional."]
];

const services = [
  ["Consultoria ACIMCO", "Piloto demo", "Espacio mensual de consultas para socios.", "Legal, laboral, impositivo, municipal, seguridad e higiene."],
  ["Boletin sectorial", "Disponible demo", "Resumen mensual de precios, normativa, oportunidades, proveedores y alertas comerciales.", "Informacion breve, accionable y pensada para pymes."],
  ["Indice ACIMCO de Materiales", "Propuesta", "Reporte mensual de variacion por familia de materiales.", "Cemento, hierro, pinturas, sanitarios, aberturas y logistica."],
  ["Escuela ACIMCO", "Piloto", "Capacitaciones cortas para profesionalizar la operacion.", "Ventas, deposito, administracion, seguridad y herramientas digitales."],
  ["Directorio de socios", "Demo web", "Mapa y buscador de empresas asociadas.", "Visibilidad por rubro, localidad y tipo de empresa."],
  ["Comites por rubro", "Propuesta", "Mesas de trabajo para corralones, distribuidores, industrias, proveedores y logistica.", "Agenda concreta por desafio compartido."],
  ["Club de beneficios", "En desarrollo", "Convenios para generar ahorro y mejores condiciones para socios.", "Servicios profesionales, seguros, tecnologia, capacitacion y logistica."],
  ["Observatorio normativo", "Propuesta", "Seguimiento de normativa municipal, provincial, habilitaciones, cargas y descargas.", "Alertas para operar con menos incertidumbre."]
];

const members = [
  { name: "Anacleto", city: "La Plata", category: "Sanitarios", type: "Comercio", sale: "Minorista", detail: "Ceramicos y sanitarios", logo: "WhatsApp Image 2026-05-26 at 17.52.52 (1).jpeg" },
  { name: "Ctibor", city: "La Plata", category: "Proveedor", type: "Industria", sale: "Mayorista", detail: "Tecnologia en ladrillos", logo: "WhatsApp Image 2026-05-26 at 17.52.53 (4).jpeg" },
  { name: "El Emporio", city: "Gonnet", category: "Corralon", type: "Comercio", sale: "Mayorista", detail: "Mejoras para el hogar", logo: "WhatsApp Image 2026-05-26 at 17.52.52 (6).jpeg" },
  { name: "El Mirador", city: "Los Hornos", category: "Corralon", type: "Comercio", sale: "Minorista", detail: "Materiales de construccion", logo: "WhatsApp Image 2026-05-26 at 17.52.52 (7).jpeg" },
  { name: "Gallardo", city: "Berisso", category: "Corralon", type: "Comercio", sale: "Minorista", detail: "Materiales para la construccion", logo: "WhatsApp Image 2026-05-26 at 17.52.52 (9).jpeg" },
  { name: "Sanicentro", city: "La Plata", category: "Sanitarios", type: "Comercio", sale: "Minorista", detail: "Sanitarios", logo: "WhatsApp Image 2026-05-26 at 17.52.52.jpeg" },
  { name: "La Estacion", city: "La Plata", category: "Corralon", type: "Comercio", sale: "Minorista", detail: "Materiales de construccion", logo: "WhatsApp Image 2026-05-26 at 17.52.53 (2).jpeg" },
  { name: "Cerymat", city: "City Bell", category: "Sanitarios", type: "Comercio", sale: "Minorista", detail: "Ceramicos y materiales", logo: "WhatsApp Image 2026-05-26 at 17.52.53 (3).jpeg" },
  { name: "Madeco", city: "La Plata", category: "Corralon", type: "Comercio", sale: "Minorista", detail: "Materiales para la construccion", logo: "WhatsApp Image 2026-05-26 at 17.52.53 (6).jpeg" },
  { name: "Guanzetti", city: "La Plata", category: "Corralon", type: "Comercio", sale: "Minorista", detail: "Materiales de construccion", logo: "WhatsApp Image 2026-05-26 at 17.52.53.jpeg" }
];

const brandLogo = (file) => `/Marcas/${encodeURIComponent(file)}`;

const courses = [
  ["Venta consultiva en mostrador", "2 hs", "vendedores y encargados"],
  ["Gestion de stock y deposito", "3 hs", "encargados, administracion y deposito"],
  ["WhatsApp Business para comercios de materiales", "2 hs", "duenos, vendedores y administracion"],
  ["Seguridad e higiene en depositos", "3 hs", "empresas con deposito y logistica"],
  ["Facturacion, cobranzas y gestion administrativa", "2 hs", "administracion y duenos"],
  ["Marketing digital para corralones y proveedores", "2 hs", "comercios, industrias y proveedores"]
];

const objections = [
  ["No tengo tiempo para participar.", "La camara debe acercarte valor aunque no puedas asistir a todo: boletines, alertas, consultas, beneficios y visibilidad."],
  ["No veo que gano pagando una cuota.", "La afiliacion debe traducirse en informacion, asesoramiento, red, visibilidad, ahorro por convenios y representacion sectorial."],
  ["Ya tengo mis proveedores.", "La red no reemplaza tus proveedores; amplia contactos, informacion y capacidad de negociacion."],
  ["Esto es para empresas grandes.", "La propuesta esta pensada especialmente para pymes del rubro que necesitan respaldo y herramientas concretas."],
  ["Las camaras no resuelven problemas concretos.", "La web demo muestra un modelo de camara orientado a servicios: consultorio, informes, capacitaciones, directorio, comites y beneficios."]
];

function SectionHeader({ kicker, title, children }) {
  return <div className="mx-auto mb-8 max-w-4xl text-center md:text-left"><p className="eyebrow">{kicker}</p><h2>{title}</h2>{children && <p className="mt-4 text-lg text-slate-600">{children}</p>}</div>;
}

function Card({ icon, title, children }) {
  return <article className="card group"><Icon name={icon} className="mb-4 h-9 w-9 text-acimco-sky transition group-hover:text-acimco-green" /><h3>{title}</h3><p>{children}</p></article>;
}

function HeroVisual() {
  return (
    <div className="hero-art" aria-label="Ilustracion institucional ACIMCO">
      <img src="/hero-regional.svg" alt="Red regional de materiales de construccion" />
    </div>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];
  return (
    <section className="section bg-acimco-soft" id="servicios">
      <SectionHeader kicker="Servicios recurrentes" title="Servicios pensados para el dia a dia de las empresas" />
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[340px_1fr]">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {services.map((item, index) => <button className={`tab ${active === index ? "active" : ""}`} key={item[0]} onClick={() => setActive(index)}>{item[0]}</button>)}
        </div>
        <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft">
          <span className={`status ${service[1].toLowerCase().replaceAll(" ", "-")}`}>{service[1]}</span>
          <h3 className="mt-4 text-3xl">{service[0]}</h3>
          <p className="mt-4 text-lg text-slate-600">{service[2]}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-acimco-pale p-5"><strong>Incluye</strong><span>{service[3]}</span></div>
            <div className="rounded-lg bg-acimco-soft p-5"><strong>Resultado buscado</strong><span>Menos incertidumbre, mas informacion y una red activa para resolver temas concretos.</span></div>
          </div>
        </article>
      </div>
    </section>
  );
}

function AcimcoVerifica() {
  return (
    <section className="section guarantee-section" id="verifica">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="guarantee-seal">
          <img src="/Sello%20de%20aprovacion/sello.png" alt="Sello ACIMCO Verifica" />
        </div>
        <article className="guarantee-copy">
          <p className="eyebrow">Nuevo servicio para socios</p>
          <h2>ACIMCO Verifica</h2>
          <p className="lead-text">Una iniciativa destinada a fortalecer la confianza entre comercios y consumidores, identificando a los negocios adheridos que forman parte de una red institucional activa, responsable y comprometida con el desarrollo local.</p>
          <div className="guarantee-points">
            <div><strong>Respaldo institucional</strong><span>El sello distingue a los comercios vinculados a ACIMCO y refuerza su pertenencia a una red sectorial.</span></div>
            <div><strong>Mayor visibilidad</strong><span>Ayuda a que el cliente reconozca negocios adheridos con presencia institucional y compromiso local.</span></div>
            <div><strong>Senal de confianza</strong><span>Ofrece una referencia clara de seriedad, respaldo y participacion dentro de la camara.</span></div>
          </div>
          <blockquote>Donde está el sello, hay comercio un local con respaldo y garantia institucional.</blockquote>
        </article>
      </div>
    </section>
  );
}

function Directory() {
  const [filters, setFilters] = useState({ localidad: "", rubro: "", tipo: "", venta: "" });
  const options = (key) => [...new Set(members.map((m) => m[key]))].sort();
  const visibleMembers = useMemo(() => members.slice(0, 8), []);
  const filtered = useMemo(() => visibleMembers.filter((m) => (!filters.localidad || m.city === filters.localidad) && (!filters.rubro || m.category === filters.rubro) && (!filters.tipo || m.type === filters.tipo) && (!filters.venta || m.sale === filters.venta)), [filters, visibleMembers]);
  const set = (key, value) => setFilters((current) => ({ ...current, [key]: value }));
  return (
    <section className="section" id="socios">
      <SectionHeader kicker="Directorio de socios" title="Una red visible genera mas oportunidades">Diez marcas destacadas para mostrar una red sectorial concreta. Localidades y rubros se presentan como datos demo editables.</SectionHeader>
      <div className="mx-auto mb-6 grid max-w-7xl gap-3 md:grid-cols-4">
        <Select label="Localidad" value={filters.localidad} onChange={(v) => set("localidad", v)} values={options("city")} />
        <Select label="Rubro" value={filters.rubro} onChange={(v) => set("rubro", v)} values={options("category")} />
        <Select label="Tipo" value={filters.tipo} onChange={(v) => set("tipo", v)} values={options("type")} />
        <Select label="Venta" value={filters.venta} onChange={(v) => set("venta", v)} values={options("sale")} />
      </div>
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((m) => (
          <article className="member-card" key={m.name}>
            <div className="member-logo">
              <img src={brandLogo(m.logo)} alt={`Logo ${m.name}`} loading="lazy" />
            </div>
            <div className="member-content">
              <h3>{m.name}</h3>
              <p>{m.city} · {m.detail}</p>
              <div className="member-tags"><span>{m.category}</span><span>{m.type}</span><span>{m.sale}</span></div>
            </div>
          </article>
        ))}
      </div>
      <div className="cta-strip mx-auto mt-7 max-w-7xl"><h3>Tu empresa tambien puede aparecer en el directorio de socios.</h3><a className="btn-primary" href="#afiliarme">Solicitar afiliacion</a></div>
    </section>
  );
}

function Select({ label, value, onChange, values }) {
  return <label className="field">{label}<select value={value} onChange={(e) => onChange(e.target.value)}><option value="">Todos</option>{values.map((item) => <option key={item}>{item}</option>)}</select></label>;
}

function Reports() {
  const data = [["Cemento", 8], ["Hierro", 5], ["Pinturas", 3], ["Sanitarios", 4], ["Aberturas", 6], ["Logistica", 7]];
  return (
    <section className="section bg-acimco-soft" id="informes">
      <SectionHeader kicker="Informes e inteligencia sectorial" title="Informacion para comprar, vender y decidir mejor">Datos simulados para demostracion.</SectionHeader>
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1fr]">
        <article className="report-card"><div className="report-top"><strong>Pulso de Materiales Gran La Plata</strong><small>Demo · Mayo 2026</small></div>{data.map(([name, value]) => <div className="bar" key={name}><span style={{ width: `${value * 10}%` }} /><b>{name}</b><em>+{value}%</em></div>)}</article>
        <div className="grid gap-4 md:grid-cols-2">{["Alertas de precios", "Tendencias de demanda", "Novedades normativas", "Oportunidades comerciales", "Agenda de proveedores", "Relevamiento de stock"].map((item) => <article className="mini-card" key={item}><Icon name={item.includes("precio") ? "precios" : item.includes("normativas") ? "normativa" : "informacion"} /><h3>{item}</h3><p>Contenido demo para mostrar una camara activa y util.</p></article>)}</div>
      </div>
    </section>
  );
}

function AffiliateForm() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section bg-acimco-soft" id="afiliarme">
      <SectionHeader kicker="Afiliacion" title="Asociarse tiene que ser simple" />
      <div className="mx-auto max-w-7xl">
        <div className="steps">{["Completas el formulario.", "Coordinamos una llamada.", "Identificamos la categoria de socio.", "Activamos beneficios y visibilidad.", "Tu empresa empieza a participar de la red."].map((step, index) => <span key={step}><b>{index + 1}</b>{step}</span>)}</div>
        <div className="categories">{["Socio comercio", "Socio industria", "Socio proveedor", "Socio adherente", "Socio institucional"].map((cat) => <span key={cat}>{cat}<small>Consultar categoria</small></span>)}</div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <form className="form-card" onSubmit={(event) => { event.preventDefault(); if (event.currentTarget.checkValidity()) setSent(true); }}>
            {["Nombre y apellido", "Empresa", "Rubro", "Localidad", "Telefono / WhatsApp"].map((label) => <label className="field" key={label}>{label}<input required /></label>)}
            <label className="field">Email<input type="email" required /></label>
            <label className="field md:col-span-2">Mensaje<textarea rows="4" defaultValue="Quiero recibir informacion para asociarme a ACIMCO." /></label>
            <label className="check md:col-span-2"><input type="checkbox" required /> Quiero recibir informacion para asociarme</label>
            <button className="btn-primary md:col-span-2" type="submit">Enviar solicitud</button>
          </form>
          <aside className="grid gap-4">
            <img className="asset-card" src="/credencial-socio.svg" alt="Credencial Socio ACIMCO" />
            <img className="asset-card" src="/sticker-asociada.svg" alt="Sticker Empresa asociada ACIMCO" />
          </aside>
        </div>
      </div>
      {sent && <div className="modal" role="dialog" aria-modal="true"><div><button onClick={() => setSent(false)} aria-label="Cerrar">x</button><h2>Solicitud recibida</h2><p>Un representante de ACIMCO se comunicara para coordinar una reunion.</p><button className="btn-primary" onClick={() => setSent(false)}>Entendido</button></div></div>}
    </section>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top"><img src="/SVG/logo.svg" alt="ACIMCO" /><span><small>Red regional de materiales de construccion</small></span></a>
        <nav><a href="#beneficios">Beneficios</a><a href="#servicios">Servicios</a><a href="#socios">Socios</a><a href="#informes">Informes</a><a href="#capacitaciones">Capacitaciones</a><a href="#afiliarme">Afiliacion</a></nav>
        <div className="hidden gap-2 xl:flex"><a className="btn-ghost" href="#beneficios">Ver beneficios</a><a className="btn-primary" href="#afiliarme">Quiero asociarme</a></div>
      </header>
      <main id="top">
        <section className="hero">
          <div>
            <p className="eyebrow">La Plata · Berisso · Ensenada</p>
            <h1>Suma tu empresa a la red regional de materiales de construccion</h1>
            <p className="lead">ACIMCO representa, informa y conecta a comercios, industrias y proveedores del sector en La Plata, Berisso y Ensenada.</p>
            <div className="mt-7 flex flex-wrap gap-3"><a className="btn-primary btn-large" href="#afiliarme">Solicitar afiliacion</a><a className="btn-ghost btn-large" href="#beneficios">Conocer beneficios</a></div>
            <div className="metrics">{["+80 anos de trayectoria", "Red sectorial regional", "Comercios, industrias y proveedores", "La Plata · Berisso · Ensenada"].map((m) => <span key={m}>{m}</span>)}</div>
          </div>
          <HeroVisual />
        </section>
        <section className="section">
          <SectionHeader kicker="Problemas que resuelve ACIMCO" title="El sector necesita mas informacion, mas red y mas representacion" />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">{problems.map((p) => <Card key={p[1]} icon={p[0]} title={p[1]}>{p[2]} <strong>ACIMCO puede ayudarte a ordenar este problema.</strong></Card>)}</div>
        </section>
        <section className="section" id="beneficios">
          <SectionHeader kicker="Beneficios" title="Que gana tu empresa al asociarse" />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">{benefits.map((b) => <Card key={b[1]} icon={b[0]} title={b[1]}>{b[2]}</Card>)}</div>
        </section>
        <Services />
        <AcimcoVerifica />
        <section className="section">
          <SectionHeader kicker="Activos institucionales" title="Una presencia moderna para mostrar actividad y servicios" />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            <img className="asset-card" src="/corralon.svg" alt="Corralon moderno de materiales" />
            <img className="asset-card" src="/dashboard-precios.svg" alt="Dashboard de precios de materiales" />
            <img className="asset-card" src="/informe-pulso.svg" alt="Mockup de informe Pulso de Materiales" />
          </div>
        </section>
        <Directory />
        <Reports />
        <section className="section" id="capacitaciones">
          <SectionHeader kicker="Capacitaciones y eventos" title="Capacitaciones cortas para profesionalizar la operacion" />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">{courses.map((c) => <article className="card" key={c[0]}><Icon name="capacitacion" /><h3>{c[0]}</h3><p>Duracion: {c[1]}. Publico: {c[2]}.</p></article>)}</div>
          <div className="mx-auto mt-6 grid max-w-7xl gap-4 md:grid-cols-3">
            {["Ronda de proveedores demo", "Mesa de corralones regionales", "Encuentro de capacitacion comercial"].map((event) => <article className="mini-card" key={event}><Icon name="eventos" /><h3>{event}</h3><p>Calendario institucional demo para mostrar actividad, convocatoria y continuidad.</p></article>)}
          </div>
          <div className="mx-auto mt-6 grid max-w-7xl gap-4 md:grid-cols-3"><img className="asset-card" src="/capacitacion.svg" alt="Capacitacion a vendedores" /><img className="asset-card" src="/reunion-sectorial.svg" alt="Reunion empresaria sectorial" /><img className="asset-card" src="/logistica.svg" alt="Camion y logistica de materiales" /></div>
        </section>
        <section className="section bg-white">
          <SectionHeader kicker="Novedades institucionales" title="Prueba de actividad para una camara viva" />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {["Nuevo boletin sectorial demo", "Convocatoria a comites por rubro", "Relevamiento de servicios para socios"].map((news) => <article className="mini-card" key={news}><p className="eyebrow">Actividad demo</p><h3>{news}</h3><p>Contenido editable para comunicar agenda, reuniones, informes y avances institucionales.</p></article>)}
          </div>
        </section>
        <section className="section bg-acimco-soft">
          <SectionHeader kicker="Area territorial" title="Una camara con foco regional">Una agenda territorial concreta permite trabajar problemas reales: logistica, habilitaciones, cargas y descargas, proveedores, capacitacion y visibilidad comercial.</SectionHeader>
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.8fr]"><img className="asset-card" src="/mapa-regional.svg" alt="Mapa abstracto La Plata Berisso Ensenada" /><div className="grid gap-4 sm:grid-cols-2">{["La Plata", "Berisso", "Ensenada", "City Bell", "Gonnet", "Los Hornos"].map((city) => <article className="mini-card" key={city}><Icon name="mapa" /><h3>{city}</h3><p>Nodo territorial demo para empresas asociadas.</p></article>)}</div></div>
        </section>
        <section className="section">
          <SectionHeader kicker="Casos de uso" title="Un beneficio distinto segun el tipo de empresa" />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-5">{["Corralones|Necesitan precios, logistica, stock, capacitacion y representacion local.", "Distribuidores|Necesitan red comercial, eventos, informacion de demanda y nuevos canales.", "Fabricantes|Necesitan llegada al canal, visibilidad y rondas con comercios.", "Proveedores de servicios|Necesitan acceder a empresas del rubro y generar convenios.", "Comercios especializados|Pinturerias, sanitarios, aberturas, hierros y terminaciones necesitan difusion, informacion y red."].map((item) => { const [title, text] = item.split("|"); return <article className="card use-card" key={title}><h3>{title}</h3><p>{text}</p></article>; })}</div>
        </section>
        <AffiliateForm />
        <section className="section bg-acimco-soft" id="faq">
          <SectionHeader kicker="Preguntas frecuentes" title="Dudas habituales antes de asociarse" />
          <div className="mx-auto grid max-w-4xl gap-3">{objections.map((o) => <details className="faq" key={o[0]}><summary>{o[0]}</summary><p>{o[1]}</p></details>)}</div>
        </section>
      </main>
      <footer><div><img src="/SVG/logo.svg" alt="ACIMCO" /><p>Red regional de materiales de construccion · La Plata · Berisso · Ensenada</p><p>Contacto demo · WhatsApp demo · Email demo</p><p>Sitio demo para presentacion institucional.</p></div><nav><a href="#beneficios">Beneficios</a><a href="#servicios">Servicios</a><a href="#socios">Socios</a><a href="#informes">Informes</a><a href="#afiliarme">Afiliacion</a></nav></footer>
      <a className="whatsapp" href="https://wa.me/5492210000000?text=Hola%2C%20quiero%20recibir%20informacion%20para%20asociar%20mi%20empresa%20a%20ACIMCO." target="_blank" rel="noreferrer"><Icon name="whatsapp" /> <span>Consultar afiliacion</span></a>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
