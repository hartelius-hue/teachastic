# Teachastic · Redaktionel gennemgang
**Dato:** 3. november 2026  
**Projekt:** `hartelius-hue/teachastic`  
**Arbejdsgrundlag:** MASTERPROMPT – Redaktionel totalgennemgang og optimering af website  
**Før-version:** `backup-foer-redaktion-2026-11-03`

## A. Redaktionel konklusion
Teachastic har en genkendelig visuel identitet, et reelt fagligt afsæt og seks cases fra forskellige roller. Problemet var især, at forsiden ikke hurtigt nok forklarede, hvem der kunne bruge tilbuddet. Dertil kom gentagelser på ydelsessiden, gentagne afslutninger og upræcise betegnelser for eksterne kilder. Løsningen er en nænsom skærpelse af budskab, mikrocopy, linktekster, læsbarhed og tastaturbetjening – ikke et nyt design.

## B. Implementerede forbedringer
- **Forside:** Den personlige overskrift er bevaret, mens indledningen nu siger, at Thorbjørn holder kurser, udvikler undervisningsforløb og leder faglige processer for skoler, kommuner og organisationer. Tydeligere handlingsknapper, en mere konkret ydelsesoverskrift, præcis casebeskrivelse og mindre gentaget afslutning. Sidetitel og metabeskrivelse skærpet.
- **Ydelser:** Fjernet dobbelt beskrivelse af otte års iværksættervalghold og andet år med teknologiforståelse. Beholdt mastermodulet ved Aarhus Universitet som igangværende. Ledelse og læremiddeludvikling er beskrevet med faktiske arbejdsopgaver frem for brede procesord. Spørgsmål og kontaktknap gjort præcisere.
- **Udvalgte opgaver:** Gentaget forbehold om roller fjernet. Lagt synlig, skærmlæservenlig besked på casefilteret. Tilføjet logisk skjult sektionsoverskrift. Eksterne links fortæller nu, om de går til en virksomheds hjemmeside, en rapport eller en forfatterprofil. TV2 Nord-linket til Zoo-projektet er bevaret.
- **Om Thorbjørn:** Grammatik og rytme korrigeret. Gentagelsen om 41 års frivilligt arbejde reduceret. Portræt, fællesskabssymbol, ledelsesafsnit og igangværende mastermodul bevaret.
- **Kontakt:** Overflødig salgsagtig sætning fjernet. E-mail, telefon, kontaktformular og LinkedIn bevaret.
- **Privatliv:** Små typografiske rettelser. Indholdet er ikke juridisk revideret.
- **Fælles CSS:** Mere læsbar lille tekst, mørkere grønt på lys baggrund i navigationslogoet, skarpere tastaturfokus, 44-pixels filterknapper og tilpassede filtre på små skærme. De grundlæggende farver og det eksisterende layout er bevaret.
- **JavaScript:** Mobilmenuen giver fokus tilbage til menuknappen, når den lukkes med Escape. Den skjulte tilbage-til-toppen-knap fjernes fra tastaturrækkefølgen. Casefilteret opdaterer en tilgængelig resultatbesked.

## C. Udvalgte før/efter-eksempler
- Forsidens indledning gik fra en generel beskrivelse af arbejde med undervisning og udvikling til en konkret beskrivelse af kurser, læremidler, faglige processer og målgrupper.
- Ydelsessidens teknologi-afsnit gentog samme valgholdserfaring i to afsnit. Nu beskrives erfaringen ét sted, og næste afsnit handler om fagligt formål og igangværende uddannelse.
- På casesiden hed forskellige eksterne links før "Se ekstern dokumentation". Nu står der fx "Besøg Veje til Viden" og "Læs IRIS’ udviklingsrapport", så linkteksten ikke lover mere, end målet er.

## Stemme- og stilark
**Afsender:** Thorbjørn Hartelius, Teachastic. **Målgrupper:** Skoler, kommuner, lærere, faglige ledere og organisationer med udviklings- og formidlingsopgaver. **Vigtigste handling:** Orientér dig i opgaverne, og skriv om en konkret opgave.  
**Stemmen:** Førsteperson, dansk, direkte, uformel uden smart jargon. Konkrete erfaringer før abstrakte ambitioner. Ingen opdigtede eksempler eller resultater.  
**Grafisk identitet:** Mørkegrøn `#101c18`, lime `#c5ec47`, varm lys baggrund `#f7f7f2`. DM Sans til brødtekst, Space Grotesk til overskrifter, Georgia til udvalgte citater. Foto og dokumentation prioriteres over dekoration. Knapper er tydelige og relativt kantede.  
**Kort sitekort:** Forside → Ydelser / Udvalgte opgaver / Om Thorbjørn → Kontakt. Privatliv i footer. Ingen særskilte guides, PDF'er, flipbøger eller interaktive læringsopgaver blev fundet i repositoryets offentliggjorte sitestruktur.

## D. Faktisk kvalitetstjek
**Verificeret med adgang til GitHub-kildekoden:** Seks HTML-sider gennemgået; alle seks har én H1, sidetitel, metabeskrivelse, viewport og dansk sprogangivelse. Ingen dublerede HTML-ID'er, ingen manglende billed-alt-tekster, ingen uafsluttede HTML-tags og ingen ugyldige interne side- eller ankermål i den statiske gennemgang. CSS-klammerne er afbalancerede. `CNAME` indeholder stadig `www.teachastic.dk`. Intern struktur, Zoo-artikellink og LinkedIn-URL er bevaret i filerne.

**[IKKE VERIFICERET]:** Færdig browservisning ved 390, 768, 1024 og 1440 pixels. Browsermiljøet afviste både lokal filadgang og localhost, så ingen nye screenshots kan bruges som bevis. JavaScript-funktionerne er kontrolleret i kildekoden, men ikke afprøvet med faktisk brugerinteraktion i browser. Eksterne destinationer (herunder Google Forms og tredjepartsartikler) er ikke åbningstestet. Den offentlige GitHub Pages-udgivelse, HTTPS og den fremtidige DNS-omlægning til `www.teachastic.dk` er ikke kontrolleret som fuldt fungerende.

## E. Kritisk redaktionsvurdering
*Vurderingerne er kvalitative og ikke resultater fra brugertest.*
| Område | Score | Begrundelse |
|---|---:|---|
| Sprog og afsenderstemme | 8/10 | Direkte og erfaringsbaseret. Nogle generiske formuleringer kan fortsat strammes. |
| Budskab og målgruppe | 8/10 | Målgrupper og ydelser fremgår nu af forsiden. |
| Grafisk identitet | 7/10 | Kolibri og farver giver genkendelighed. De rene caseillustrationer har begrænset dokumentationsværdi. |
| Layout og læsbarhed | 7/10 | Statiske layoutregler og tekster er forbedret, men faktisk browserkontrol mangler. |
| Tekst, billede og handling | 7/10 | Portrættet og cases styrker troværdigheden. Hero-illustrationen er overvejende stemningsskabende. |
| Samlet redaktionel kvalitet | 8/10 | En klarere forside og mere ærlige linktekster, uden at det personlige udtryk er udvisket. |

## Resterende prioriteringer
1. **Visuel kontrollæsning** af alle seks sider på mobil, tablet og desktop; ret eventuelle overlap og uheldige beskæringer efter faktiske screenshots.
2. **Bekræft kontaktformularen** og eksterne links med rigtige klik; kontroller at alle destinationer stadig findes.
3. **Afslut domæneopsætning** hos den valgte DNS-udbyder, kontroller HTTPS, viderestilling fra roddomænet og e-mail-DNS. Rør ikke ved MX- eller andre mailrecord-indstillinger uden først at kortlægge dem.

### Hvad der med vilje er bevaret
Teachastic-kolibrien, grønne identitet, det personlige portræt, formuleringen om at mennesker kan mere sammen, de seks konkrete cases, attribution til de forskellige arbejdssammenhænge, TV2 Nord-linket, kontaktvejene og den eksisterende CNAME.

### Tre ændringer med størst forventet brugerbetydning
1. Besøgende kan hurtigere se, hvem ydelserne er til.
2. Ydelser og cases er lettere at skimme uden gentagne og upræcise udsagn.
3. Tastaturnavigation og casefilter har bedre status- og fokusadfærd.

## F. Leverance
Ændringerne er lagt på `main` i det eksisterende repository. Før-versionen er bevaret som GitHub-branchen `backup-foer-redaktion-2026-11-03`. Ingen DNS-records eller abonnementsindstillinger er ændret.
