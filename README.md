# A.V Auto Service - Site Web

Site web profesional pentru A.V Auto Service - Service auto în Pantelimon, construit cu Next.js 14, TypeScript și Tailwind CSS.

## 📋 Cuprins

- [Caracteristici](#caracteristici)
- [Tehnologii](#tehnologii)
- [Instalare](#instalare)
- [Dezvoltare](#dezvoltare)
- [Build și Deploy](#build-și-deploy)
- [Configurare](#configurare)
- [Structura proiectului](#structura-proiectului)

## ✨ Caracteristici

- ✅ Design modern și responsive (mobile-first)
- ✅ Animații CSS performante și micro-interacțiuni
- ✅ SEO optimizat (meta tags, schema.org, sitemap, robots.txt)
- ✅ Formulare de programare și contact cu validare
- ✅ Dark mode implicit cu paleta de culori premium
- ✅ Componente reutilizabile și modulare
- ✅ Performanță optimizată (lazy loading, imagini WebP)
- ✅ Accesibilitate (ARIA labels, keyboard navigation)
- ✅ Pagini complete: Home, Servicii, Despre, Tarife, Contact, FAQ, Blog
- ✅ Pagini legale: Politică de confidențialitate, Termeni și condiții

## 🛠 Tehnologii

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **Lucide React** - Iconuri moderne
- **React 18** - Biblioteca UI

## 📦 Instalare

### Cerințe preliminare

- Node.js 18.x sau mai recent
- npm, yarn sau pnpm

### Pași de instalare

1. **Clonează sau extrage proiectul**

```bash
cd av-auto-service
```

2. **Instalează dependențele**

```bash
npm install
```

sau

```bash
yarn install
```

sau

```bash
pnpm install
```

3. **Configurează variabilele de mediu**

Creează un fișier `.env.local` bazat pe `.env.example`:

```bash
cp .env.example .env.local
```

Editează `.env.local` și adaugă configurațiile necesare (vezi secțiunea [Configurare](#configurare)).

## 🚀 Dezvoltare

Pentru a porni serverul de dezvoltare:

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:3000`

### Comenzi disponibile

- `npm run dev` - Pornește serverul de dezvoltare
- `npm run build` - Construiește aplicația pentru producție
- `npm run start` - Pornește serverul de producție (după build)
- `npm run lint` - Rulează ESLint

## 🏗 Build și Deploy

### Build local

```bash
npm run build
```

Aceasta va genera un folder `.next` cu aplicația optimizată pentru producție.

### Deploy pe Vercel (Recomandat)

1. **Instalează Vercel CLI** (opțional):

```bash
npm i -g vercel
```

2. **Deploy:**

```bash
vercel
```

Sau conectează repository-ul GitHub la Vercel prin interfața web:
- Mergi la [vercel.com](https://vercel.com)
- Click "New Project"
- Importă repository-ul
- Configurează environment variables
- Deploy!

### Deploy pe Netlify

1. **Instalează Netlify CLI** (opțional):

```bash
npm i -g netlify-cli
```

2. **Deploy:**

```bash
netlify deploy --prod
```

Sau folosește interfața web Netlify:
- Mergi la [netlify.com](https://netlify.com)
- Drag & drop folderul `.next` sau conectează repository-ul
- Configurează build settings:
  - Build command: `npm run build`
  - Publish directory: `.next`
- Adaugă environment variables
- Deploy!

### Environment Variables pentru Deploy

Asigură-te că adaugi următoarele variabile în platforma de deploy:

- `NEXT_PUBLIC_SITE_URL` - URL-ul complet al site-ului (ex: `https://av-auto-service.ro`)
- Variabilele pentru email/form submission (vezi secțiunea Configurare)

## ⚙️ Configurare

### Configurare Email/Form Submission

Proiectul include un endpoint placeholder la `/api/send` care loghează datele în consolă în modul de dezvoltare. Pentru producție, trebuie să configurezi un serviciu real.

#### Opțiunea 1: Formspree (Cel mai simplu)

1. Creează un cont la [formspree.io](https://formspree.io)
2. Creează un form nou și copiază form ID-ul
3. Adaugă în `.env.local`:

```env
FORMSUBMIT_URL=https://formspree.io/f/YOUR_FORM_ID
```

4. Modifică `app/api/send/route.ts` pentru a folosi Formspree:

```typescript
const response = await fetch(process.env.FORMSUBMIT_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})
```

#### Opțiunea 2: SendGrid

1. Creează un cont la [sendgrid.com](https://sendgrid.com)
2. Generează un API Key
3. Adaugă în `.env.local`:

```env
SENDGRID_API_KEY=your_api_key
SENDGRID_FROM_EMAIL=noreply@av-auto-service.ro
```

#### Opțiunea 3: Resend

1. Creează un cont la [resend.com](https://resend.com)
2. Generează un API Key
3. Adaugă în `.env.local`:

```env
RESEND_API_KEY=your_api_key
RESEND_FROM_EMAIL=noreply@av-auto-service.ro
```

#### Opțiunea 4: Custom SMTP

Adaugă în `.env.local`:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASSWORD=your_password
SMTP_FROM=noreply@av-auto-service.ro
SMTP_TO=contact@av-auto-service.ro
```

#### Opțiunea 5: Webhook (Make.com, n8n)

Adaugă în `.env.local`:

```env
WEBHOOK_URL=https://your-webhook-url.com/api/forms
```

### Generare OG Image

1. Creează o imagine de 1200x630px
2. Include:
   - Logo A.V Auto Service
   - Culori brand: #ce0d14, #04090f
   - Text: "A.V Auto Service - Service Auto Profesional în Pantelimon"
3. Salvează ca `public/images/og-image.jpg`

### Actualizare Coordonate GPS (opțional)

Dacă ai coordonatele exacte GPS, actualizează în `app/layout.tsx`:

```typescript
geo: {
  '@type': 'GeoCoordinates',
  latitude: '44.46746048256181', // Actualizează cu coordonatele exacte
  longitude: '26.206628783422122', // Actualizează cu coordonatele exacte
},
```

## 📁 Structura proiectului

```
av-auto-service/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.ts          # API endpoint pentru formulare
│   ├── blog/
│   │   ├── [slug]/               # Articole blog
│   │   └── page.tsx
│   ├── contact/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── despre/
│   │   └── page.tsx
│   ├── faq/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── servicii/
│   │   ├── [slug]/               # Subpagini servicii
│   │   └── page.tsx
│   ├── tarife/
│   │   └── page.tsx
│   ├── politica-confidentialitate/
│   │   └── page.tsx
│   ├── termeni-conditii/
│   │   └── page.tsx
│   ├── globals.css               # Stiluri globale
│   ├── layout.tsx                 # Layout principal
│   ├── not-found.tsx              # Pagina 404
│   └── page.tsx                   # Pagina Home
├── components/
│   ├── BeforeAfterGallery.tsx
│   ├── BookingModal.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── Partners.tsx
│   ├── Preloader.tsx
│   ├── ProcessTimeline.tsx
│   ├── ServicesGrid.tsx
│   ├── StickyCTA.tsx
│   ├── Testimonials.tsx
│   └── TrustBar.tsx
├── public/
│   ├── images/
│   │   ├── before-after/         # Imagini before/after
│   │   └── og-image.jpg          # Open Graph image
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 📝 TO-DO List

### Înainte de lansare

- [ ] **Înlocuiește imaginile placeholder**
  - [ ] Adaugă imagini reale pentru galeria before/after
  - [ ] Generează OG image (1200x630px)
  - [ ] Adaugă favicon-uri (192x192, 512x512)
  - [ ] Optimizează toate imaginile (WebP format)

- [ ] **Configurează serviciul de email**
  - [ ] Alege un serviciu (Formspree/SendGrid/Resend/SMTP/Webhook)
  - [ ] Configurează variabilele de mediu
  - [ ] Testează trimiterea de email-uri
  - [ ] Actualizează `app/api/send/route.ts` cu logica reală

- [ ] **Verifică și actualizează conținutul**
  - [ ] Verifică orele de funcționare (actualizate în footer și contact)
  - [ ] Verifică prețurile din pagina Tarife
  - [ ] Adaugă testimoniale reale (opțional)
  - [ ] Verifică toate linkurile și numerele de telefon

- [ ] **SEO și optimizări**
  - [ ] Verifică și actualizează coordonatele GPS (dacă sunt disponibile)
  - [ ] Adaugă Google Search Console verification code
  - [ ] Configurează Google Analytics (opțional)
  - [ ] Testează sitemap.xml și robots.txt
  - [ ] Verifică meta tags pe toate paginile

- [ ] **Testare**
  - [ ] Testează toate formularele
  - [ ] Testează pe multiple browsere (Chrome, Firefox, Safari, Edge)
  - [ ] Testează pe mobile (iOS și Android)
  - [ ] Verifică accesibilitatea (keyboard navigation, screen readers)
  - [ ] Testează performanța (Lighthouse, PageSpeed Insights)

- [ ] **Deploy**
  - [ ] Configurează domain-ul
  - [ ] Configurează SSL/HTTPS
  - [ ] Configurează environment variables în platforma de deploy
  - [ ] Testează site-ul live
  - [ ] Configurează redirect-uri (dacă este necesar)

### După lansare

- [ ] Monitorizează erorile (Sentry sau similar)
- [ ] Colectează feedback de la utilizatori
- [ ] Actualizează conținutul blog-ului regulat
- [ ] Optimizează bazat pe analytics
- [ ] Adaugă funcționalități noi (opțional)

## 🐛 Troubleshooting

### Probleme comune

**Eroare la build:**
```bash
# Șterge cache-ul și reinstalează
rm -rf .next node_modules
npm install
npm run build
```

**Formularele nu trimit email-uri:**
- Verifică că ai configurat variabilele de mediu corect
- Verifică că endpoint-ul `/api/send` este actualizat cu logica reală
- Verifică console-ul pentru erori

**Imaginile nu se încarcă:**
- Verifică că imaginile sunt în folderul `public/images/`
- Verifică că path-urile sunt corecte în componente
- Asigură-te că folosești Next.js Image component pentru optimizare

## 📄 Licență

Acest proiect este proprietatea A.V Auto Service.

## 📞 Contact

Pentru întrebări despre proiect:
- **Telefon:** 0774608362
- **Adresă:** Strada Sfântul Gheorghe 20, Pantelimon 077145

---

**Notă:** Acest README conține toate instrucțiunile necesare pentru a rula și deploy-a proiectul. Dacă întâmpini probleme, verifică secțiunea Troubleshooting sau contactează echipa de dezvoltare.

