TEACHASTIC – NYT WEBSITE (DANSK)
================================

INDHOLD
index.html       Forside
ydelser.html     Ydelser og samarbejde
cases.html       Udvalgte opgaver med filtre og eksterne kilder
om.html          Profil, faglig ledelse og 41 års frivilligt lederskab
kontakt.html     Kontakt, e-mail, telefon og eksisterende Google Form
privatliv.html   Foreløbig privatlivsbeskrivelse
assets/          CSS, JavaScript og lokale SVG-illustrationer
robots.txt, sitemap.xml

SÅDAN SER DU SIDEN
Åbn index.html i en browser, eller kør en lokal webserver:
python -m http.server 8000
Åbn derefter http://localhost:8000

PUBLICERING
Upload ALT indholdet i denne mappe (ikke kun index.html) til roden af
dit webhotel, eller til et GitHub Pages-repository. Udskift først det
eksisterende site, når du er tilfreds med den nye version.

INDHOLD/RETTIGHEDER
- Cases er tydeligt fordelt på ansættelse, frivilligt arbejde og konsulentrolle.
- Ingen uverificerede kundecitater, opfundne resultater eller kunde-logoer.
- Fotografier fra brugerens gamle site / portfolio er ikke indlejret som filer,
  da originale billedfiler ikke kunne downloades pålideligt. Illustrationerne
  i denne pakke er selvstændigt fremstillede og lokale, ikke eksterne afhængigheder.
- Udskift gerne SVG-hero-illustrationen med dit bedste eget portræt eller foto,
  når originalfilerne er tilgængelige, fx assets/thorbjorn.jpg.
- Bekræft alle personlige kontaktoplysninger inden offentliggørelse.
- Få evt. privatlivsteksten gennemgået i forhold til hosting og politik.
- Skrifttyper hentes fra Google Fonts; browseren har system-skrifttype som fallback.
- Links til eksisterende bookingformular og eksterne cases kræver internet.

TEKNIK
Statiske HTML-filer – ingen buildproces eller database. Responsive CSS,
mobilmenu, filtre på cases, SEO-meta, Open Graph, sitemap og schema.org.
