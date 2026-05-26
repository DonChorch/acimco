const services = [
  {
    id: "consultorio",
    title: "Consultorio ACIMCO",
    status: "Disponible",
    text: "Un canal de orientacion para consultas legales, laborales, impositivas, municipales y de seguridad e higiene.",
    target: "Duenos, administracion y responsables operativos.",
    value: "Ayuda a ordenar decisiones y derivar temas sensibles con criterio profesional."
  },
  {
    id: "boletin",
    title: "Boletin sectorial",
    status: "Disponible",
    text: "Resumen periodico con novedades del sector, alertas normativas, agenda y oportunidades comerciales.",
    target: "Empresas que necesitan informacion breve y accionable.",
    value: "Permite anticipar cambios y conversar con datos."
  },
  {
    id: "indice",
    title: "Indice de materiales",
    status: "Piloto",
    text: "Tablero demo de variaciones por familias de materiales y senales de abastecimiento regional.",
    target: "Compras, ventas, gerencia y mostrador.",
    value: "Aporta referencia para comprar, vender y planificar stock."
  },
  {
    id: "escuela",
    title: "Escuela ACIMCO",
    status: "Piloto",
    text: "Capacitaciones cortas para ventas, deposito, administracion, seguridad, herramientas digitales y gestion pyme.",
    target: "Equipos comerciales, encargados y propietarios.",
    value: "Profesionaliza tareas cotidianas sin formatos academicos pesados."
  },
  {
    id: "directorio",
    title: "Directorio de socios",
    status: "Disponible",
    text: "Listado visible de empresas asociadas por rubro, localidad y tipo de actividad.",
    target: "Socios que buscan posicionamiento y nuevos contactos.",
    value: "Mejora presencia institucional y oportunidades dentro de la red."
  },
  {
    id: "comites",
    title: "Comites por rubro",
    status: "Proximamente",
    text: "Mesas de trabajo para corralones, distribuidores, industrias, proveedores y servicios.",
    target: "Empresas con desafios comunes por actividad.",
    value: "Ordena demandas, acuerdos y prioridades compartidas."
  },
  {
    id: "club",
    title: "Club de beneficios",
    status: "Proximamente",
    text: "Convenios demo en servicios empresariales, tecnologia, capacitacion, seguros y soluciones comerciales.",
    target: "Pymes que buscan reducir costos operativos.",
    value: "Convierte la afiliacion en beneficios tangibles."
  },
  {
    id: "observatorio",
    title: "Observatorio normativo",
    status: "Piloto",
    text: "Seguimiento de habilitaciones, normativa municipal, cambios laborales y requisitos tecnicos relevantes.",
    target: "Empresas con locales, depositos, transporte o fabricacion.",
    value: "Reduce incertidumbre y mejora cumplimiento operativo."
  }
];

const members = [
  ["Corralon El Diagonal", "La Plata", "Materiales generales", "Comercio"],
  ["Berisso Materiales", "Berisso", "Corralon y aridos", "Comercio"],
  ["Ensenada Construye", "Ensenada", "Distribucion", "Distribuidor"],
  ["Hierros del Sur", "La Plata", "Hierros y aceros", "Industria"],
  ["Sanitarios Norte", "City Bell", "Sanitarios y griferia", "Comercio"],
  ["Pintureria Obra Color", "Gonnet", "Pinturas y revestimientos", "Comercio"],
  ["Aberturas AMBA", "La Plata", "Aberturas", "Industria"],
  ["Logistica Materiales LP", "La Plata", "Transporte y distribucion", "Proveedor"]
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function initServices() {
  const tabs = $("#serviceTabs");
  const panel = $("#servicePanel");
  services.forEach((service, index) => {
    const button = document.createElement("button");
    button.className = `tab ${index === 0 ? "active" : ""}`;
    button.type = "button";
    button.textContent = service.title;
    button.addEventListener("click", () => {
      $$(".tab").forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      renderService(service);
    });
    tabs.appendChild(button);
  });
  renderService(services[0]);

  function renderService(service) {
    panel.innerHTML = `
      <div class="status-pill">${service.status}</div>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
      <div class="service-facts">
        <div><strong>Para quien sirve</strong><span>${service.target}</span></div>
        <div><strong>Beneficio concreto</strong><span>${service.value}</span></div>
      </div>
    `;
  }
}

function initDirectory() {
  const rubro = $("#filterRubro");
  const localidad = $("#filterLocalidad");
  const tipo = $("#filterTipo");
  const list = $("#memberList");

  const unique = (index) => [...new Set(members.map((m) => m[index]))].sort();
  unique(2).forEach((item) => rubro.add(new Option(item, item)));
  unique(1).forEach((item) => localidad.add(new Option(item, item)));
  unique(3).forEach((item) => tipo.add(new Option(item, item)));

  [rubro, localidad, tipo].forEach((select) => select.addEventListener("change", render));
  render();

  function render() {
    const filtered = members.filter((m) =>
      (!rubro.value || m[2] === rubro.value) &&
      (!localidad.value || m[1] === localidad.value) &&
      (!tipo.value || m[3] === tipo.value)
    );
    list.innerHTML = filtered.map((m) => `
      <article class="member-card">
        <div class="member-mark">${m[0].slice(0, 2).toUpperCase()}</div>
        <div>
          <h3>${m[0]}</h3>
          <p>${m[1]} · ${m[2]}</p>
          <span>${m[3]}</span>
        </div>
      </article>
    `).join("") || `<p class="empty">No hay resultados para esos filtros demo.</p>`;
  }
}

function initForm() {
  const form = $("#affiliateForm");
  const modal = $("#successModal");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    modal.classList.add("open");
    form.reset();
  });
  $$(".modal-close").forEach((button) => button.addEventListener("click", () => modal.classList.remove("open")));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.classList.remove("open");
  });
}

function initDownloads() {
  const proposal = $("#downloadProposal");
  const kit = $("#downloadKit");
  const html = `
ACIMCO - Propuesta demo para nuevos socios

Red regional de comercios, industrias y proveedores de materiales de construccion.

Beneficios:
- Representacion sectorial.
- Informacion de mercado.
- Asesoramiento.
- Capacitacion.
- Red de negocios.
- Visibilidad.

Proximo paso:
Coordinar una reunion de afiliacion para evaluar categoria de socio y activar beneficios iniciales.

Datos simulados para demo comercial.
`;
  proposal.addEventListener("click", () => downloadFile("propuesta-acimco-demo.txt", html));
  kit.addEventListener("click", () => window.open("print-kit.html", "_blank"));
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function initScroll() {
  $$(".nav a, .smooth").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href?.startsWith("#")) {
        event.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  $$(".reveal, .card, .section-header, .mockup-card").forEach((el) => observer.observe(el));
}

initServices();
initDirectory();
initForm();
initDownloads();
initScroll();
initReveal();
