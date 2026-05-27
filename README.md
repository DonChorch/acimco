# ACIMCO Web Demo

Landing institucional/comercial demo para ACIMCO, orientada a captar nuevos afiliados en La Plata, Berisso y Ensenada.

## Tecnologia

- React + Vite.
- Tailwind CSS.
- Componentes reutilizables y datos demo en `src/main.jsx`.
- Sin backend.
- Formulario con simulacion de envio.
- Assets SVG propios sin copyright.
- Logo real cargado desde `assets/SVG/logo.svg`.

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
npm run dev
```

Abrir:

```text
http://127.0.0.1:4173
```

## Build

```bash
npm run build
```

## Estructura

```text
.
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- print-kit.html
|-- QA-CHECKLIST.md
|-- README.md
|-- docs
|   `-- kit-comercial-acimco.md
|-- src
|   |-- main.jsx
|   `-- styles.css
`-- assets
    |-- SVG/logo.svg
    |-- favicon.svg
    |-- hero-regional.svg
    |-- mapa-regional.svg
    |-- corralon.svg
    |-- reunion-sectorial.svg
    |-- dashboard-precios.svg
    |-- capacitacion.svg
    |-- logistica.svg
    |-- informe-pulso.svg
    |-- credencial-socio.svg
    |-- sticker-asociada.svg
    `-- pattern-construccion.svg
```

## Funcionalidades

- Header sticky con navegacion por anclas.
- Hero con propuesta de valor, metricas demo y visual regional.
- Problemas, beneficios, servicios, directorio, informes, capacitaciones, calendario demo, territorio, casos de uso, afiliacion, FAQ y footer.
- Directorio demo con filtros por localidad, rubro y tipo.
- Servicios con tabs.
- Formulario validado y modal de confirmacion.
- Boton flotante de WhatsApp con mensaje precargado.
- Kit comercial guardado para uso posterior en `docs/kit-comercial-acimco.md`.
- Pagina imprimible de propuesta comercial conservada en `print-kit.html`, sin CTA visible en la landing.
- SEO basico, Open Graph y favicon.

## Decisiones UX/UI

- Narrativa orientada a conversion: problema, valor, beneficios, servicios y solicitud.
- Lenguaje claro para pymes del rubro, evitando tono burocratico.
- Paleta basada en el celeste ACIMCO, azul institucional profundo y verde como acento de accion.
- Cards compactas, CTAs recurrentes, secciones escaneables y foco B2B institucional.
- Datos de informes, socios y actividad marcados como demo o simulados.
