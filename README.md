# Portafolio v2 · prototipado con IA

Generado con Claude a partir del rol y el prompt de [../prompt.md](../prompt.md). Contenido de [../cv.md](../cv.md). HTML, CSS y JS puros.

**Ver en local:** `python3 -m http.server 8765` en esta carpeta y abrir <http://localhost:8765>.

## Decisiones de diseño y principio HCI

| Decisión | Principio |
|---|---|
| Foto, nombre, rol y tres botones de contacto en la primera pantalla | ISO 9241-11 eficacia: la tarea del visitante (contactar) se resuelve con un toque |
| Orden Inicio, Sobre mí, Proyectos, Experiencia, Educación, Habilidades, Contacto | ISO 9241-110 adecuación a la tarea: lo que busca un docente o reclutador, de mayor a menor interés |
| Sección "Proyectos académicos" con los talleres de HCI | Respuesta al carácter académico del encargo, solo con trabajos reales |
| Menú superior en escritorio y barra inferior en móvil | Conformidad con expectativas y alcance del pulgar (ISO 9241-110) |
| Una sola columna de lectura de 808 px, texto de 17–18 px, interlineado 1,7 | ISO 9241-112 presentación de la información |
| Fondos alternos A/B y títulos de 26 px | Jerarquía visual y agrupación por proximidad (Gestalt) |
| Tema claro u oscuro según el navegador, con botón y recuerdo de la elección | ISO 9241-110 individualización |
| Enlace "Saltar al contenido", foco visible, objetivos de 44 px, `aria-current` | ISO 9241-171 y WCAG 2.2 AA |
| Colores del sistema Titanium, con gris secundario `#4F4F54` en claro y `#AEAEB2` en oscuro | Contraste AA en ambos temas |
| `prefers-reduced-motion` y transiciones de 200 ms | Control del usuario y sensibilidad al movimiento |

## Riesgos de usabilidad que quedan

1. **Proyectos sin enlace:** las tarjetas describen los talleres pero no llevan a ellos. Mitigación: enlazar el PDF o el repositorio cuando estén publicados.
2. **Sin descarga de CV:** la versión anterior tenía "Descargar CV" y esta no. Mitigación: añadir un PDF del CV enlazado.
3. **Fuente externa:** Inter se carga desde Google Fonts; sin conexión se usa la fuente del sistema. Mitigación: alojar la fuente localmente.

## Verificación hecha

Capturas en `capturas/` (escritorio y móvil, claro y oscuro): sin desbordamiento horizontal, sin errores de consola, el primer Tab llega al enlace "Saltar al contenido", el botón cambia el tema y la navegación marca la sección activa.
