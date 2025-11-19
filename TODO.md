# TO-DO List - A.V Auto Service

## 🔴 Prioritate Înaltă (Înainte de Lansare)

### Imagini și Assets
- [ ] **Înlocuiește imaginile placeholder**
  - [ ] Adaugă imagini reale pentru galeria before/after (6 imagini: 3 perechi)
    - [ ] 1-before.jpg și 1-after.jpg
    - [ ] 2-before.jpg și 2-after.jpg
    - [ ] 3-before.jpg și 3-after.jpg
  - [ ] Generează OG image (1200x630px) cu logo și text brand
  - [ ] Creează favicon-uri:
    - [ ] favicon.ico
    - [ ] favicon-16x16.png
    - [ ] favicon-32x32.png
    - [ ] apple-touch-icon.png (180x180)
    - [ ] favicon-192x192.png
    - [ ] favicon-512x512.png
  - [ ] Optimizează toate imaginile (conversie WebP, compresie)

### Configurare Email/Form Submission
- [ ] **Alege și configurează serviciul de email**
  - [ ] Alege serviciul (Formspree/SendGrid/Resend/SMTP/Webhook)
  - [ ] Creează cont și obține credențiale
  - [ ] Adaugă variabilele în `.env.local`
  - [ ] Actualizează `app/api/send/route.ts` cu logica reală
  - [ ] Testează trimiterea de email-uri (programare și contact)
  - [ ] Configurează email-uri de răspuns automat (opțional)

### Verificare Conținut
- [ ] **Verifică și actualizează informațiile**
  - [ ] Verifică orele de funcționare (sunt corecte în footer și contact?)
  - [ ] Verifică prețurile din pagina Tarife (sunt actualizate?)
  - [ ] Verifică toate numerele de telefon (0774608362)
  - [ ] Verifică adresa completă (Strada Sfântul Gheorghe 20, Pantelimon 077145)
  - [ ] Verifică toate linkurile interne și externe
  - [ ] Verifică ortografia și gramatica pe toate paginile

### SEO și Optimizări
- [ ] **Finalizează SEO**
  - [ ] Verifică și actualizează coordonatele GPS (dacă ai coordonate exacte)
  - [ ] Adaugă Google Search Console verification code în `app/layout.tsx`
  - [ ] Configurează Google Analytics (opțional, dar recomandat)
  - [ ] Testează sitemap.xml (accesează `/sitemap.xml`)
  - [ ] Testează robots.txt (accesează `/robots.txt`)
  - [ ] Verifică meta tags pe toate paginile (folosește tool-uri SEO)
  - [ ] Testează structura Schema.org (folosește Google Rich Results Test)

## 🟡 Prioritate Medie

### Testare Completă
- [ ] **Testează funcționalitățile**
  - [ ] Testează toate formularele (programare și contact)
  - [ ] Testează navigarea între pagini
  - [ ] Testează butonul "Sună acum" (tel: link)
  - [ ] Testează modalul de programare
  - [ ] Testează galeria before/after (slider drag)
  - [ ] Testează slider-ul de testimoniale
  - [ ] Testează FAQ accordion
  - [ ] Testează meniul hamburger pe mobile

- [ ] **Testare cross-browser**
  - [ ] Chrome (desktop și mobile)
  - [ ] Firefox (desktop și mobile)
  - [ ] Safari (desktop și mobile)
  - [ ] Edge (desktop)

- [ ] **Testare accesibilitate**
  - [ ] Navigare cu tastatura (Tab, Enter, Escape)
  - [ ] Testare cu screen reader
  - [ ] Verifică contrastul culorilor (WCAG AA minimum)
  - [ ] Verifică focus states pe toate elementele interactive

- [ ] **Testare performanță**
  - [ ] Rulează Lighthouse (target: 90+ pentru toate categoriile)
  - [ ] Rulează PageSpeed Insights
  - [ ] Verifică Core Web Vitals
  - [ ] Optimizează imagini dacă este necesar
  - [ ] Verifică bundle size

### Conținut Suplimentar (Opțional)
- [ ] **Adaugă conținut real**
  - [ ] Adaugă testimoniale reale (înlocuiește placeholder-urile)
  - [ ] Adaugă mai multe articole de blog (opțional)
  - [ ] Adaugă imagini reale cu lucrări efectuate
  - [ ] Adaugă certificări sau premii (dacă există)

## 🟢 Prioritate Scăzută (După Lansare)

### Îmbunătățiri și Funcționalități Noi
- [ ] **Monitorizare și Analytics**
  - [ ] Configurează Google Analytics sau alternativă
  - [ ] Configurează error tracking (Sentry sau similar)
  - [ ] Monitorizează performanța site-ului

- [ ] **Optimizări continue**
  - [ ] Colectează feedback de la utilizatori
  - [ ] Analizează comportamentul utilizatorilor
  - [ ] Optimizează bazat pe date reale
  - [ ] A/B testing pentru CTA-uri (opțional)

- [ ] **Funcționalități viitoare (opțional)**
  - [ ] Sistem de recenzii online
  - [ ] Chat live (opțional)
  - [ ] Programare online cu calendar
  - [ ] Newsletter (opțional)
  - [ ] Secțiune "Oferte speciale" sau "Promoții"

## 📋 Checklist Deploy

### Înainte de Deploy
- [ ] Toate task-urile din "Prioritate Înaltă" sunt completate
- [ ] Testare completă efectuată
- [ ] Environment variables configurate
- [ ] Build local funcționează (`npm run build`)

### Deploy
- [ ] Alege platforma (Vercel/Netlify/recomandat Vercel pentru Next.js)
- [ ] Conectează repository-ul sau upload fișierele
- [ ] Configurează build settings:
  - Build command: `npm run build`
  - Output directory: `.next` (sau lasă default pentru Next.js)
- [ ] Adaugă environment variables în platforma de deploy
- [ ] Configurează domain-ul (dacă ai domain custom)
- [ ] Configurează SSL/HTTPS (de obicei automat)
- [ ] Testează site-ul live

### După Deploy
- [ ] Verifică că toate paginile se încarcă corect
- [ ] Testează formularele pe site-ul live
- [ ] Verifică că email-urile se trimit corect
- [ ] Testează pe multiple device-uri și browsere
- [ ] Verifică că sitemap.xml este accesibil
- [ ] Trimite sitemap-ul la Google Search Console
- [ ] Configurează redirect-uri (dacă este necesar)

## 📝 Note

- **Nu rula comenzi de build sau deploy** - acestea trebuie rulate manual de tine
- **Toate comenzile necesare** sunt documentate în README.md
- **Pentru întrebări** despre implementare, consultă README.md sau documentația Next.js
- **Backup regulat** - asigură-te că ai backup pentru cod și conținut

---

**Ultima actualizare:** 2024-01-20  
**Versiune:** 1.0.0

