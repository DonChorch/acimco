import React, { useEffect, useMemo, useRef, useState } from "react";
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
  ["red", "Red de negocios", "Eventos, rondas, mesas de trabajo sectorial y contacto con empresas del ecosistema."],
  ["visibilidad", "Visibilidad", "Presencia en directorio de socios, campanas institucionales y difusion sectorial."],
  ["socio", "Beneficios comerciales", "Convenios con proveedores, servicios profesionales, software, seguros, logistica y capacitacion."],
  ["eventos", "Agenda comun", "Espacios de trabajo para resolver problemas compartidos del rubro."]
];

const affiliationProblems = [
  {
    icon: "precios",
    title: "Costos que cambian sin aviso",
    impact: "Cuando las listas se actualizan sin previsibilidad, podés perder margen, comprar tarde o presupuestar con referencias desactualizadas.",
    solution: "Los afiliados reciben un boletin con el Indice ACIMCO de variación de precios.",
    cta: "Acceder a información",
    href: "#informes"
  },
  {
    icon: "informacion",
    title: "Decisiones con información dispersa",
    impact: "Muchas decisiones comerciales se toman con datos sueltos, listas aisladas o lecturas parciales del mercado.",
    solution: "Como afiliado recibís información ordenada para leer mejor el contexto del sector.",
    cta: "Ver informes",
    href: "#informes"
  },
  {
    icon: "red",
    title: "Problemas comunes tratados en soledad",
    impact: "Logística, stock, habilitaciones, cargas y descargas o proveedores suelen repetirse en muchas empresas.",
    solution: "ACIMCO: Como afiliado participás en mesas de trabajo sectorial, agenda compartida para que puedas participar.",
    cta: "Participar de la red",
    href: "#servicios"
  }
];

const services = [
  ["Consultoria ACIMCO", "Piloto demo", "Espacio mensual de consultas para socios.", "Legal, laboral, impositivo, municipal, seguridad e higiene."],
  ["Boletin sectorial", "Disponible demo", "Resumen mensual de precios, normativa, oportunidades, proveedores y alertas comerciales.", "Informacion breve, accionable y pensada para pymes."],
  ["Indice ACIMCO de Materiales", "Propuesta", "Reporte mensual de variacion por familia de materiales.", "Cemento, hierro, pinturas, sanitarios, aberturas y logistica."],
  ["Escuela ACIMCO", "Piloto", "Capacitaciones cortas para profesionalizar la operacion.", "Ventas, deposito, administracion, seguridad y herramientas digitales."],
  ["Directorio de socios", "Demo web", "Mapa y buscador de empresas asociadas.", "Visibilidad por rubro, localidad y tipo de empresa."],
  ["Mesas de trabajo sectorial", "Propuesta", "Espacios de trabajo para corralones, distribuidores, industrias, proveedores y logistica.", "Agenda concreta por desafio compartido."],
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
  {
    title: "Venta consultiva en mostrador",
    duration: "2 hs",
    audience: "Vendedores y encargados",
    lessons: "4 modulos",
    description: "Herramientas practicas para mejorar la atencion, detectar necesidades y cerrar ventas con mayor claridad.",
    image: "/capacitacion.svg"
  },
  {
    title: "Gestion de stock y deposito",
    duration: "3 hs",
    audience: "Encargados, administracion y deposito",
    lessons: "5 modulos",
    description: "Criterios para ordenar inventario, mejorar reposicion y reducir errores operativos en el dia a dia.",
    image: "/corralon.svg"
  },
  {
    title: "WhatsApp Business para comercios de materiales",
    duration: "2 hs",
    audience: "Duenos, vendedores y administracion",
    lessons: "4 modulos",
    description: "Uso comercial de mensajes, etiquetas, respuestas rapidas y seguimiento de consultas para convertir mejor.",
    image: "/dashboard-precios.svg"
  },
  {
    title: "Seguridad e higiene en depositos",
    duration: "3 hs",
    audience: "Empresas con deposito y logistica",
    lessons: "5 modulos",
    description: "Buenas practicas para equipos, circulacion, carga, descarga y prevencion dentro de espacios operativos.",
    image: "/logistica.svg"
  },
  {
    title: "Facturacion, cobranzas y gestion administrativa",
    duration: "2 hs",
    audience: "Administracion y duenos",
    lessons: "4 modulos",
    description: "Pautas para ordenar procesos administrativos, cobranzas, registros y comunicacion con clientes.",
    image: "/informe-pulso.svg"
  },
  {
    title: "Marketing digital para corralones y proveedores",
    duration: "2 hs",
    audience: "Comercios, industrias y proveedores",
    lessons: "4 modulos",
    description: "Acciones simples para mejorar presencia online, consultas comerciales y visibilidad local.",
    image: "/reunion-sectorial.svg"
  }
];

const featuredNews = [
  {
    tag: "Informe sectorial",
    date: "Junio 2026",
    title: "Pulso de materiales para el Gran La Plata",
    text: "Lectura demo de variaciones, demanda y alertas para comercios e industrias del sector.",
    href: "#informes"
  },
  {
    tag: "Afiliacion",
    date: "Convocatoria abierta",
    title: "Nueva red de empresas verificadas por ACIMCO",
    text: "Una propuesta para fortalecer visibilidad, confianza comercial y pertenencia institucional.",
    href: "#afiliacion"
  },
  {
    tag: "Capacitaciones",
    date: "Agenda demo",
    title: "Talleres breves para ventas, deposito y administracion",
    text: "Instancias pensadas para profesionalizar el dia a dia de comercios de materiales.",
    href: "#capacitaciones"
  },
  {
    tag: "Territorio",
    date: "La Plata, Berisso y Ensenada",
    title: "Agenda regional para problemas compartidos",
    text: "Logistica, habilitaciones, stock y proveedores tratados desde una mirada sectorial.",
    href: "#servicios"
  }
];

const navItems = [
  ["servicios", "Servicios"],
  ["beneficios", "Beneficios"],
  ["socios", "Socios"],
  ["informes", "Informes"],
  ["capacitaciones", "Capacitaciones"],
  ["afiliacion", "Afiliacion"]
];

const objections = [
  ["No tengo tiempo para participar.", "La camara debe acercarte valor aunque no puedas asistir a todo: boletines, alertas, consultas, beneficios y visibilidad."],
  ["No veo que gano pagando una cuota.", "La afiliacion debe traducirse en informacion, asesoramiento, red, visibilidad, ahorro por convenios y representacion sectorial."],
  ["Ya tengo mis proveedores.", "La red no reemplaza tus proveedores; amplia contactos, informacion y capacidad de negociacion."],
  ["Esto es para empresas grandes.", "La propuesta esta pensada especialmente para pymes del rubro que necesitan respaldo y herramientas concretas."],
  ["Las camaras no resuelven problemas concretos.", "La web demo muestra un modelo de camara orientado a servicios: consultoria, informes, capacitaciones, directorio, mesas de trabajo sectorial y beneficios."]
];

function SectionHeader({ kicker, title, children }) {
  return <div className="mx-auto mb-8 max-w-4xl text-center md:text-left"><p className="eyebrow">{kicker}</p><h2>{title}</h2>{children && <p className="mt-4 text-lg text-slate-600">{children}</p>}</div>;
}

function Card({ icon, title, children }) {
  return <article className="card group"><Icon name={icon} className="mb-4 h-9 w-9 text-acimco-sky transition group-hover:text-acimco-green" /><h3>{title}</h3><p>{children}</p></article>;
}

function useSwipeNavigation(onPrev, onNext) {
  const start = useRef(null);

  const onTouchStart = (event) => {
    const touch = event.touches[0];
    start.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event) => {
    if (!start.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - start.current.x;
    const deltaY = touch.clientY - start.current.y;
    start.current = null;

    if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
    if (deltaX < 0) onNext();
    else onPrev();
  };

  return { onTouchStart, onTouchEnd };
}

function HeroVisual() {
  return (
    <div className="hero-art" aria-label="Ilustracion institucional ACIMCO">
      <img src="/hero-regional.svg" alt="Red regional de materiales de construccion" />
    </div>
  );
}

function NewsCarousel() {
  const [active, setActive] = useState(0);
  const next = () => setActive((index) => (index + 1) % featuredNews.length);
  const prev = () => setActive((index) => (index - 1 + featuredNews.length) % featuredNews.length);
  const swipeHandlers = useSwipeNavigation(prev, next);

  return (
    <section className="news-carousel" id="noticias" aria-label="Noticias destacadas ACIMCO">
      <div className="news-shell">
        <div className="news-heading">
          <p className="eyebrow">Noticias</p>
          <h2>Noticias ACIMCO</h2>
          <p>Actualidad, informes y convocatorias para empresas del sector.</p>
        </div>
        <div className="news-slider">
          <button className="news-arrow left" type="button" onClick={prev} aria-label="Noticia anterior">‹</button>
          <div className="news-viewport" {...swipeHandlers}>
            <div className="news-track" style={{ transform: `translateX(-${active * 100}%)` }}>
              {featuredNews.map((item) => (
                <a className="news-card" href={item.href} key={item.title}>
                  <div className="news-meta"><span>{item.tag}</span><small>{item.date}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </a>
              ))}
            </div>
          </div>
          <button className="news-arrow right" type="button" onClick={next} aria-label="Noticia siguiente">›</button>
          <div className="news-dots" aria-label="Paginacion de noticias">
            {featuredNews.map((item, index) => (
              <button className={active === index ? "active" : ""} type="button" key={item.title} onClick={() => setActive(index)} aria-label={`Ver noticia ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const next = () => setActive((index) => (index + 1) % services.length);
  const prev = () => setActive((index) => (index - 1 + services.length) % services.length);
  const swipeHandlers = useSwipeNavigation(prev, next);
  return (
    <section className="section bg-acimco-soft" id="servicios">
      <SectionHeader kicker="Servicios recurrentes" title="Servicios pensados para el dia a dia de las empresas" />
      <div className="services-desktop mx-auto grid max-w-7xl gap-5 lg:grid-cols-[340px_1fr]">
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
      <div className="services-mobile mx-auto max-w-7xl" {...swipeHandlers}>
        <div className="service-mobile-card">
          <span className={`status ${service[1].toLowerCase().replaceAll(" ", "-")}`}>{service[1]}</span>
          <h3>{service[0]}</h3>
          <p>{service[2]}</p>
          <div className="service-mobile-detail"><strong>Incluye</strong><span>{service[3]}</span></div>
          <div className="service-mobile-detail muted"><strong>Resultado buscado</strong><span>Menos incertidumbre, mas informacion y una red activa para resolver temas concretos.</span></div>
        </div>
        <div className="service-mobile-controls">
          <button type="button" onClick={prev} aria-label="Servicio anterior">‹</button>
          <div className="service-mobile-dots" aria-label="Paginacion de servicios">
            {services.map((item, index) => (
              <button className={active === index ? "active" : ""} type="button" key={item[0]} onClick={() => setActive(index)} aria-label={`Ver servicio ${index + 1}`} />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Servicio siguiente">›</button>
        </div>
      </div>
    </section>
  );
}

function WhyJoin() {
  return (
    <section className="section join-hook" id="por-que-asociarse">
      <div className="mx-auto max-w-7xl">
        <div className="join-header">
          <div className="join-title-block">
            <p className="eyebrow">Por qué asociarse</p>
            <h2>Cuando el sector cambia, trabajar solo cuesta más.</h2>
          </div>
          <p>Precios que se mueven, costos difíciles de anticipar, información dispersa, problemas de stock, trámites y baja visibilidad. ACIMCO reúne a comercios, industrias y proveedores de materiales de construcción para transformar problemas individuales en información útil, representación sectorial y oportunidades compartidas.</p>
          <div className="join-actions">
            <a className="btn-primary" href="#afiliacion">Quiero asociar mi empresa</a>
            <a className="btn-ghost" href="#beneficios">Ver beneficios para socios</a>
          </div>
        </div>

        <div className="join-cards mobile-parallel-grid">
          {affiliationProblems.map((item) => (
            <article className="join-card" key={item.title}>
              <div className="join-card-main">
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.impact}</p>
              </div>
              <div className="join-card-solution">{item.solution}</div>
              <a href={item.href}>{item.cta}</a>
            </article>
          ))}
        </div>

        <div className="join-support">
          <h3>También ayudamos a ordenar</h3>
          <ul>
            <li>Capacitación para vendedores, administración y depósito.</li>
            <li>Consultas legales, laborales, impositivas y municipales.</li>
            <li>Visibilidad de tu empresa en el directorio de socios.</li>
          </ul>
        </div>

        <div className="join-final">
          <div>
            <h3>La afiliación convierte problemas aislados en soluciones compartidas.</h3>
            <p>Sumá tu empresa a una red regional que representa, informa, conecta y fortalece al sector.</p>
          </div>
          <a className="btn-primary" href="#afiliacion">Solicitar afiliación</a>
        </div>
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
      <SectionHeader kicker="Directorio de socios" title="Busca comercios verificados por ACIMCO, compra con confianza">Los comercios aqui listados pertenecen a ACIMCO, y estan verificados.</SectionHeader>
      <div className="mx-auto mb-6 grid max-w-7xl gap-3 md:grid-cols-4">
        <Select label="Localidad" value={filters.localidad} onChange={(v) => set("localidad", v)} values={options("city")} />
        <Select label="Rubro" value={filters.rubro} onChange={(v) => set("rubro", v)} values={options("category")} />
        <Select label="Tipo" value={filters.tipo} onChange={(v) => set("tipo", v)} values={options("type")} />
        <Select label="Venta" value={filters.venta} onChange={(v) => set("venta", v)} values={options("sale")} />
      </div>
      <div className="members-grid mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      <div className="cta-strip mx-auto mt-7 max-w-7xl"><h3>Tu empresa tambien puede aparecer en el directorio de socios.</h3><a className="btn-primary" href="#afiliacion">Solicitar afiliacion</a></div>
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
        <div className="report-mini-grid grid gap-4 md:grid-cols-2">{["Alertas de precios", "Tendencias de demanda", "Novedades normativas", "Oportunidades comerciales", "Agenda de proveedores", "Relevamiento de stock"].map((item) => <article className="mini-card" key={item}><Icon name={item.includes("precio") ? "precios" : item.includes("normativas") ? "normativa" : "informacion"} /><h3>{item}</h3><p>Contenido demo para mostrar una camara activa y util.</p></article>)}</div>
      </div>
    </section>
  );
}

function AffiliateForm() {
  const [sent, setSent] = useState(false);
  const affiliationSteps = [
    ["/acimco-step-1-form.svg?v=2", "01", "Completás la solicitud", "Dejanos tus datos de contacto, empresa, rubro y localidad."],
    ["/acimco-step-2-call.svg?v=2", "02", "Coordinamos una llamada", "Conocemos tu actividad, respondemos consultas y te explicamos cómo funciona la afiliación."],
    ["/acimco-step-4-network.svg?v=2", "03", "Activamos tu afiliación", "Tu empresa accede a información sectorial, beneficios, espacios de trabajo y visibilidad institucional."]
  ];
  return (
    <section className="section affiliate-section" id="afiliacion">
      <div className="mx-auto max-w-7xl">
        <div className="affiliate-header">
          <p className="eyebrow">AFILIACIÓN</p>
          <h2>Afiliarse es simple</h2>
          <p>Afiliá tu empresa y accedé a información sectorial, beneficios, visibilidad y representación regional.</p>
        </div>

        <div className="affiliation-steps">
          {affiliationSteps.map(([icon, number, title, text], index) => (
            <article className="affiliation-step" key={title}>
              <div className="step-top">
                <b className="step-number">{number}</b>
                <span className="step-icon"><img src={icon} alt="" aria-hidden="true" /></span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="affiliate-layout">
          <form className="form-card" onSubmit={(event) => { event.preventDefault(); if (event.currentTarget.checkValidity()) setSent(true); }}>
            <div className="form-intro">
              <h3>Datos personales y de contacto</h3>
              <p>Completá el formulario para iniciar tu solicitud de afiliación.</p>
            </div>
            <label className="field">Nombre y apellido *<input required placeholder="Ej: Mariana Pérez" /></label>
            <label className="field">Empresa / Razón social *<input required placeholder="Ej: Corralón del Centro" /></label>
            <label className="field">Rubro / Actividad *<input required placeholder="Ej: Materiales generales" /></label>
            <label className="field">Localidad *<input required placeholder="Ej: La Plata" /></label>
            <label className="field">Teléfono / WhatsApp *<input required inputMode="tel" placeholder="Ej: 221 555 1234" /></label>
            <label className="field">Email<input type="email" required placeholder="Ej: contacto@empresa.com" /></label>
            <label className="field md:col-span-2">Mensaje<textarea rows="4" placeholder="Ej: Quiero conocer los beneficios de afiliación para mi empresa." /></label>
            <label className="check md:col-span-2"><input type="checkbox" required /> <span>Quiero recibir información para asociarme<small>Acepto recibir novedades y beneficios de ACIMCO.</small></span></label>
            <button className="btn-primary md:col-span-2" type="submit">Enviar solicitud de afiliación</button>
          </form>
          <aside className="affiliate-side">
            <article className="verified-card">
              <div>
                <span>AFILIADO VERIFICADO</span>
                <h3>Tu comercio o establecimiento pasa a estar verificado por ACIMCO</h3>
                <p>Generando confianza y atrayendo futuros clientes.</p>
              </div>
              <img src="/Sello%20de%20aprovacion/sello.png" alt="Sello ACIMCO Verifica" />
            </article>
            <article className="affiliate-support-card">
              <h3>Construimos juntos una red más fuerte</h3>
              <p>La Plata · Berisso · Ensenada</p>
            </article>
          </aside>
        </div>
      </div>
      {sent && <div className="modal" role="dialog" aria-modal="true"><div><button onClick={() => setSent(false)} aria-label="Cerrar">x</button><h2>Solicitud recibida</h2><p>Un representante de ACIMCO se comunicara para coordinar una reunion.</p><button className="btn-primary" onClick={() => setSent(false)}>Entendido</button></div></div>}
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["top", ...navItems.map(([id]) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-35% 0px -50% 0px", threshold: [0.08, 0.2, 0.45] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const protectDemo = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", protectDemo);
    document.addEventListener("copy", protectDemo);
    document.addEventListener("cut", protectDemo);
    return () => {
      document.removeEventListener("contextmenu", protectDemo);
      document.removeEventListener("copy", protectDemo);
      document.removeEventListener("cut", protectDemo);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top"><img src="/SVG/logo.svg" alt="ACIMCO" /><span><small>Red regional de materiales de construccion</small></span></a>
        <button className={`menu-toggle ${menuOpen ? "open" : ""}`} type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Abrir menu" aria-expanded={menuOpen}>
          <span />
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "open" : ""}>
          {navItems.map(([id, label]) => (
            <a className={activeSection === id ? "active" : ""} href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="hidden gap-2 xl:flex"><a className="btn-ghost" href="#beneficios">Ver beneficios</a><a className="btn-primary" href="#afiliacion">Quiero asociarme</a></div>
      </header>
      <main id="top">
        <section className="hero">
          <div>
            <p className="eyebrow">La Plata · Berisso · Ensenada</p>
            <h1>Suma tu empresa a la red regional de materiales de construccion</h1>
            <p className="lead">ACIMCO representa, informa y conecta a comercios, industrias y proveedores del sector en La Plata, Berisso y Ensenada.</p>
            <div className="mt-7 flex flex-wrap gap-3"><a className="btn-primary btn-large" href="#afiliacion">Solicitar afiliacion</a><a className="btn-ghost btn-large" href="#beneficios">Conocer beneficios</a></div>
            <div className="metrics">{["+80 años de trayectoria", "Red sectorial regional", "Comercios, industrias y proveedores", "La Plata · Berisso · Ensenada"].map((m) => <span key={m}>{m}</span>)}</div>
          </div>
          <HeroVisual />
        </section>
        <NewsCarousel />
        <WhyJoin />
        <Services />
        <section className="section" id="beneficios">
          <SectionHeader kicker="Beneficios" title="Que gana tu empresa al asociarse" />
          <div className="benefits-grid mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">{benefits.map((b) => <Card key={b[1]} icon={b[0]} title={b[1]}>{b[2]}</Card>)}</div>
        </section>
        <AcimcoVerifica />
        <Directory />
        <Reports />
        <section className="section" id="capacitaciones">
          <SectionHeader kicker="Capacitaciones y eventos" title="Capacitaciones cortas para profesionalizar la operacion" />
          <div className="courses-grid mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {courses.slice(0, 3).map((c) => (
              <article className="course-card" key={c.title}>
                <div className="course-image">
                  <img src={c.image} alt="" aria-hidden="true" />
                  <span>ACIMCO</span>
                </div>
                <div className="course-body">
                  <h3>{c.title}</h3>
                  <div className="course-meta">
                    <span><Icon name="informacion" />{c.lessons}</span>
                    <span><Icon name="capacitacion" />{c.duration}</span>
                  </div>
                  <p>{c.description}</p>
                  <small>Publico: {c.audience}</small>
                  <a className="course-button" href="#afiliacion">Inscribirme ahora</a>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-6 flex max-w-7xl justify-center"><a className="btn-ghost" href="#afiliacion">Ver mas capacitaciones</a></div>
        </section>
        <AffiliateForm />
        <section className="section bg-acimco-soft" id="faq">
          <SectionHeader kicker="Preguntas frecuentes" title="Dudas habituales antes de asociarse" />
          <div className="mx-auto grid max-w-4xl gap-3">{objections.map((o) => <details className="faq" key={o[0]}><summary>{o[0]}</summary><p>{o[1]}</p></details>)}</div>
        </section>
      </main>
      <footer><div><img src="/SVG/logo.svg" alt="ACIMCO" /><p>Red regional de materiales de construccion · La Plata · Berisso · Ensenada</p><p>Contacto demo · WhatsApp demo · Email demo</p><p>Sitio demo para presentacion institucional.</p><p className="legal-note">Demo, diseño, copy y código protegidos. Uso no autorizado, copia o redistribucion no permitidos.</p></div><nav><a href="#beneficios">Beneficios</a><a href="#servicios">Servicios</a><a href="#socios">Socios</a><a href="#informes">Informes</a><a href="#afiliacion">Afiliacion</a></nav></footer>
      <a className={`back-top ${activeSection === "top" ? "" : "visible"}`} href="#top" aria-label="Volver arriba">↑</a>
      <a className="whatsapp" href="https://wa.me/5492210000000?text=Hola%2C%20quiero%20recibir%20informacion%20para%20asociar%20mi%20empresa%20a%20ACIMCO." target="_blank" rel="noreferrer"><Icon name="whatsapp" /> <span>Consultar afiliacion</span></a>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
