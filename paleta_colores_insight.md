# Documento Técnico: Paleta de Colores de Insight.com

Este documento contiene el desglose oficial de la paleta de colores extraída directamente del sitio web de [Insight Enterprises](https://www.insight.com/en_US/home.html), incluyendo sus valores **HEX**, **RGB**, **HSL**, su función dentro de la interfaz web y un análisis comparativo con el **Sistema de Marca ARIAS v1.0**.

---

## 🎨 1. Paleta de Colores Extraída de Insight.com

### Colores Principales y Acentos

| Nombre del Color | HEX | RGB | HSL | Rol en la Interfaz Web |
| :--- | :--- | :--- | :--- | :--- |
| **Insight Crimson Red** | `#AE0A46` | `rgb(174, 10, 70)` | `hsl(338, 89%, 36%)` | **Color de Marca Principal**: Botones de llamada a la acción (CTA), enlaces destacados y acentos principales. |
| **Crimson Red Hover** | `#6F062D` | `rgb(111, 6, 45)` | `hsl(338, 90%, 23%)` | **Estado Hover**: Color al pasar el cursor sobre botones principales de compra/contacto. |
| **Tech Accent Blue** | `#3860BE` | `rgb(56, 96, 190)` | `hsl(222, 54%, 48%)` | **Color Tecnológico**: Enlaces secundarios, etiquetas de servicios TI y badges. |
| **UI Interactive Blue** | `#216BA5` | `rgb(33, 107, 165)` | `hsl(206, 67%, 39%)` | **Estado Seleccionado**: Elementos activos, calendarios, menús desplegables y filtros. |

### Colores Neutros y Tipografía

| Nombre del Color | HEX | RGB | HSL | Rol en la Interfaz Web |
| :--- | :--- | :--- | :--- | :--- |
| **Charcoal Dark** | `#222222` | `rgb(34, 34, 34)` | `hsl(0, 0%, 13%)` | **Texto Principal**: Títulos principales (H1, H2, H3) y encabezados de alta prioridad. |
| **Corporate Dark Gray** | `#3E332D` | `rgb(62, 51, 45)` | `hsl(21, 16%, 21%)` | **Texto Secundario**: Cuerpo de texto, párrafos, avisos legales y descripciones. |
| **Banner Neutral Gray** | `#E6E6E5` | `rgb(230, 230, 229)` | `hsl(60, 2%, 90%)` | **Fondos Neutros**: Barra de anuncios top, aviso de cookies y fondos de navegación. |
| **Off-White Soft** | `#F7F6F5` | `rgb(247, 246, 245)` | `hsl(30, 10%, 96%)` | **Fondos Secundarios**: Contenedores de tarjetas, áreas de código e inputs de formulario. |
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | `hsl(0, 0%, 100%)` | **Fondo Principal**: Fondo general del sitio web y tarjetas blancas. |
| **Border Gray** | `#CBC4C3` | `rgb(203, 196, 195)` | `hsl(8, 7%, 78%)` | **Bordes y Divisores**: Líneas horizontales de separación (`<hr>`) y bordes de tarjetas. |

---

## 💻 2. Código CSS de Referencia (Variables CSS)

Puedes utilizar el siguiente bloque CSS si deseas probar estos colores directamente en cualquier proyecto:

```css
:root {
  /* Insight Brand Colors */
  --insight-crimson: #AE0A46;
  --insight-crimson-hover: #6F062D;
  --insight-tech-blue: #3860BE;
  --insight-ui-blue: #216BA5;

  /* Insight Neutrals & Typography */
  --insight-charcoal: #222222;
  --insight-text-dark: #3E332D;
  --insight-bg-neutral: #E6E6E5;
  --insight-bg-soft: #F7F6F5;
  --insight-white: #FFFFFF;
  --insight-border: #CBC4C3;
}
```

---

## ⚖️ 3. Cuadro Comparativo: Insight.com vs. ARIAS Brand System v1.0

| Criterio | Insight.com | ARIAS Brand System v1.0 (Tu Marca) |
| :--- | :--- | :--- |
| **Enfoque de Marca** | Integración de Servicios TI y Venta Hardware/Software Enterprise | Ecosistema SaaS Cloud (CRM, ERP, POS, CMMS, Fintech) |
| **Color Principal CTA** | `#AE0A46` (Rojo Carmesí) | `#202BD7` (Azul Eléctrico) / `#0A2AAD` (Royal Blue) |
| **Color Tecnológico** | `#3860BE` (Azul Corporativo) | `#1D9CF7` (Cyan Blue) / `#73C4FC` (Celeste Sky) |
| **Color de Fondos** | `#F7F6F5` / `#E6E6E5` (Gris Neutro) | `#F5F7FB` (Arias Ice White - 60%) |
| **Estilo Visual** | Corporativo Tradicional Enterprise | 3D Soft Tech / SaaS Premium con Gradientes |

---

## 📌 Conclusión y Recomendación

La estructura de diseño de **Insight.com** destaca por su organización limpia de contenidos enterprise, mientras que la paleta de colores de **ARIAS** aporta una sensación más moderna, tecnológica y SaaS. 

Se recomienda mantener la **estructura de navegación y disposición de elementos de Insight.com**, pero aplicando al **100% la paleta oficial de ARIAS** (Royal Blue, Electric Blue, Cyan e Ice White) para preservar la identidad de tu marca.
