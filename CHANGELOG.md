# Changelog

Toate modificările notabile ale acestui proiect vor fi documentate în acest fișier.

## [1.0.0] - 2024-01-20

### Adăugat

#### Structură și Configurare
- Proiect Next.js 14 cu TypeScript
- Configurare Tailwind CSS cu paleta de culori custom
- Configurare PostCSS și Autoprefixer
- TypeScript configuration optimizat
- Next.js config cu optimizări pentru imagini

#### Pagini Principale
- **Home** - Pagină principală cu Hero animat, servicii, timeline, testimoniale, galerie before/after
- **Servicii** - Pagină listă servicii cu subpagini detaliate:
  - Diagnoză
  - Mecanică generală
  - Revizii & Schimb ulei
  - Frâne & Suspensie EXPRES
  - Instalații electrice
- **Despre noi** - Informații despre service, misiune, valori
- **Tarife** - Ghid de prețuri pentru toate serviciile
- **Contact** - Formular de contact, informații, Google Maps embed
- **FAQ** - Întrebări frecvente cu accordion interactiv
- **Blog** - Pagină blog cu 3 articole starter:
  - Cum să recunoști problemele la frâne
  - Când e nevoie de diagnoză electronică
  - Importanța reviziilor regulate
- **Politică de confidențialitate** - Pagină legală
- **Termeni și condiții** - Pagină legală
- **404** - Pagină de eroare personalizată

#### Componente UI
- **Header** - Navigare responsive cu meniu hamburger
- **Footer** - Footer complet cu linkuri, contact, program
- **Hero** - Secțiune hero cu animații SVG și efect parallax
- **TrustBar** - Bar de încredere cu iconuri
- **ServicesGrid** - Grid de carduri servicii cu hover effects
- **ProcessTimeline** - Timeline animat "Cum lucrăm"
- **BeforeAfterGallery** - Galerie cu slider drag pentru before/after
- **Testimonials** - Slider testimoniale cu auto-play
- **Partners** - Secțiune parteneri/branduri
- **CTASection** - Secțiune call-to-action
- **BookingModal** - Modal de programare cu formular
- **StickyCTA** - Buton CTA circular sticky
- **Preloader** - Preloader minimalist
- **Logo** - Logo SVG cu culorile brand

#### Funcționalități
- Formulare de programare și contact cu validare
- API endpoint placeholder pentru trimitere email-uri (`/api/send`)
- Salvare locală (localStorage) ca fallback pentru formulare
- Animații CSS performante (fade, slide, rotate)
- Efect parallax pe desktop
- Dark mode implicit
- Responsive design mobile-first
- Lazy loading pentru imagini
- Keyboard navigation și accesibilitate

#### SEO și Optimizări
- Meta tags complete pentru toate paginile
- Open Graph tags pentru social media
- Twitter Card tags
- JSON-LD Schema.org (LocalBusiness/AutoRepair)
- Sitemap.xml generat
- Robots.txt configurat
- Site manifest pentru PWA
- Optimizări de performanță (lazy loading, critical CSS)

#### Assets și Resurse
- Logo SVG cu culorile brand
- Structură pentru imagini (before/after, OG image)
- Favicon placeholder
- Site manifest

#### Documentație
- README.md complet cu instrucțiuni detaliate
- CHANGELOG.md
- .env.example cu toate variabilele necesare
- TO-DO list în README

### Caracteristici Tehnice

- **Framework:** Next.js 14 (App Router)
- **Limbaj:** TypeScript
- **Styling:** Tailwind CSS
- **Iconuri:** Lucide React
- **Font:** Inter (Google Fonts)
- **Culori Brand:**
  - Accent: #ce0d14
  - Dark: #04090f
  - Secondary: #adb1b1
  - Light: #f6f5f2

### Conținut Fix Integrat

- Telefon: 0774608362
- Adresă: Strada Sfântul Gheorghe 20, Pantelimon 077145
- Google Maps iframe embed
- Program: Luni-Vineri 08:00-18:00, Sâmbătă 09:00-14:00

### Notă

Această versiune inițială (v1.0.0) conține toate funcționalitățile de bază și este gata pentru configurare și deploy. 
Următorii pași includ înlocuirea imaginilor placeholder, configurarea serviciului de email și testarea completă.

