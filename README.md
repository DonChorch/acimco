# ACIMCO Web Demo

Landing institucional/comercial demo para ACIMCO, orientada a una reunion de ventas y captacion de nuevas afiliaciones en La Plata, Berisso y Ensenada.

## Como abrir

Opcion simple:

1. Abrir `index.html` en el navegador.

Opcion con servidor local:

```bash
python -m http.server 4173
```

Luego abrir:

```text
http://localhost:4173
```

No requiere backend ni instalacion de dependencias.

## Estructura

```text
.
├── index.html
├── print-kit.html
├── package.json
├── README.md
├── QA-CHECKLIST.md
├── src
│   ├── styles.css
│   └── script.js
└── assets
    └── favicon.svg
```

## Funcionalidades incluidas

- Landing responsive completa.
- Hero institucional con ilustracion SVG propia.
- Beneficios, servicios, directorio demo, informes, capacitaciones y casos de uso.
- Formulario de afiliacion con validacion y modal de confirmacion.
- Directorio con filtros por rubro, localidad y tipo de empresa.
- Tabs de servicios.
- Boton flotante de WhatsApp.
- Kit comercial para reunion de ventas.
- Mini deck embebido de 6 slides.
- Botones de descarga demo para propuesta y kit imprimible.
- SEO basico, Open Graph y favicon demo.

## Assets generados

Los visuales principales son SVG propios embebidos en la web:

- Hero: red regional de materiales de construccion.
- Mapa abstracto de La Plata, Berisso y Ensenada.
- Corralon moderno.
- Reunion empresaria sectorial.
- Tablero de precios/materiales.
- Capacitacion a vendedores.
- Logistica y camion de materiales.
- Mockup de informe "Pulso de Materiales".
- Mockup de credencial "Socio ACIMCO".
- Mockup de sticker "Empresa asociada ACIMCO".
- Sistema de iconos lineales SVG consistente.

## Capturas sugeridas para la reunion

1. Hero con CTA "Solicitar afiliacion".
2. Seccion "Que gana tu empresa al asociarse".
3. Servicios con tabs.
4. Directorio demo filtrable.
5. Informe "Pulso de Materiales Gran La Plata".
6. Kit comercial y mini deck.
7. Formulario de afiliacion con modal de confirmacion.

## Decisiones UX/UI

- Se priorizo conversion: CTAs visibles en header, hero, beneficios, directorio, kit y formulario.
- La narrativa baja de lo institucional a lo operativo: representacion, informacion, asesoramiento, capacitacion, red y visibilidad.
- El diseno evita lenguaje burocratico y usa bloques escaneables para duenos de pymes.
- La paleta combina azul institucional con acentos verdes y amarillos para destacar accion, oportunidad y crecimiento.
- Todos los datos sensibles o no confirmados se presentan como demo, piloto o simulados.

