# HIT Coach als iPhone-App installieren

Diese Anleitung bringt die App in ca. 15 Minuten auf deinen Home-Bildschirm. Du brauchst: dein iPhone oder einen PC, eine E-Mail-Adresse. Kosten: keine.

**Wichtig vorab:** Deine Trainings- und Körperdaten bleiben ausschließlich auf deinem iPhone. Auf GitHub liegt nur der Programmcode – ohne ein einziges persönliches Datum.

---

## Schritt 1: GitHub-Account erstellen (5 Min)

1. Öffne **github.com** im Browser
2. Tippe auf **Sign up**
3. E-Mail-Adresse eingeben, Passwort wählen, Benutzernamen wählen (z.B. `harald-fitness` – der Name wird Teil deiner App-Adresse)
4. Bestätigungscode aus der E-Mail eingeben
5. Fragen zur Nutzung kannst du überspringen (Skip) oder beliebig beantworten

## Schritt 2: Repository anlegen (2 Min)

Ein "Repository" ist einfach ein Ordner auf GitHub.

1. Nach dem Login: tippe oben rechts auf das **+** und wähle **New repository**
2. Bei **Repository name** eingeben: `hitcoach`
3. **Public** auswählen (ist für die kostenlose Webseite nötig)
4. Unten auf **Create repository** tippen

## Schritt 3: Die 6 Dateien hochladen (3 Min)

1. Auf der Seite deines neuen Repositories: tippe auf den Link **uploading an existing file** (im blauen Kasten "Quick setup")
   - Falls du den Link nicht siehst: oben auf **Add file → Upload files**
2. Lade diese 6 Dateien hoch (alle aus dem Paket, das du von mir bekommen hast):
   - `index.html` (die App selbst)
   - `manifest.json`
   - `sw.js`
   - `apple-touch-icon.png`
   - `icon-192.png`
   - `icon-512.png`
3. Unten auf den grünen Button **Commit changes** tippen
4. Warten bis der Upload fertig ist – du siehst danach alle 6 Dateien aufgelistet

**Tipp am iPhone:** Dateien vorher in der Dateien-App speichern, dann beim Upload "Dateien auswählen" → Durchsuchen.

## Schritt 4: Webseite aktivieren (2 Min)

1. Im Repository: oben auf den Reiter **Settings** (Zahnrad)
2. Links im Menü auf **Pages** tippen (bei schmalem Bildschirm: Menü-Symbol oben links öffnen)
3. Unter **Branch**: statt "None" → **main** auswählen, daneben "/ (root)" stehen lassen
4. Auf **Save** tippen
5. 1–2 Minuten warten, dann Seite neu laden. Oben erscheint:
   **"Your site is live at https://DEIN-NAME.github.io/hitcoach/"**

Das ist deine App-Adresse. Notiere sie.

## Schritt 5: Auf dem iPhone installieren (2 Min)

1. Öffne **Safari** (wichtig: muss Safari sein, nicht Chrome!)
2. Gehe zu deiner Adresse: `https://DEIN-NAME.github.io/hitcoach/`
3. Die App lädt. Tippe unten auf das **Teilen-Symbol** (Quadrat mit Pfeil nach oben)
4. Scrolle runter und tippe auf **"Zum Home-Bildschirm"**
5. Name bestätigen → **Hinzufügen**

Fertig. Auf deinem Home-Bildschirm liegt jetzt das HIT-Coach-Icon (grüner Blitz). Die App öffnet im Vollbild, ohne Browser-Leiste, und funktioniert nach dem ersten Öffnen auch **komplett offline** (Flugmodus-tauglich).

---

## Was du wissen solltest

**Deine Daten:** Alles was du einträgst (Gewichte, Mahlzeiten, Körperwerte) wird nur auf deinem iPhone gespeichert. Nichts wird an GitHub oder sonst wohin übertragen.

**Backup:** Nutze regelmäßig den **Export-Button** im Fortschritt-Tab (ganz unten). Die JSON-Datei kannst du in iCloud Drive oder per Mail sichern. Wenn du die App vom Home-Bildschirm löschst, sind die Daten weg – der Export ist deine Versicherung.

**App aktualisieren:** Wenn ich dir später eine neue Version baue, lädst du einfach die neue `index.html` in dein Repository hoch (Upload files → alte wird überschrieben → Commit). Beim nächsten Öffnen mit Internetverbindung holt sich die App die neue Version. Deine Daten bleiben dabei erhalten, weil sie getrennt vom Code gespeichert sind.

**Falls die App nach einem Update nicht aktualisiert:** App schließen, in den iPhone-Einstellungen → Safari → "Verlauf und Websitedaten löschen" NICHT verwenden (das löscht deine Daten!). Stattdessen: App einfach 2× öffnen und schließen – der Service Worker aktualisiert sich beim zweiten Start.

---

## Häufige Stolpersteine

| Problem | Lösung |
|---|---|
| "Zum Home-Bildschirm" fehlt im Teilen-Menü | Du bist nicht in Safari. Chrome/Firefox können das auf iOS nicht. |
| Seite zeigt 404 | 1–2 Min warten nach Pages-Aktivierung, dann neu laden. Prüfe ob die Datei `index.html` heißt (Kleinschreibung!). |
| Icon ist ein Screenshot statt Blitz | Die `apple-touch-icon.png` fehlt im Repository oder der Name stimmt nicht exakt. |
| App offline nicht nutzbar | Beim allerersten Öffnen muss Internet da sein. Einmal komplett laden lassen, danach geht offline. |
