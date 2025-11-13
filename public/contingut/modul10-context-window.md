# Mòdul 10: Gestió del Context Window

## Què és el "context window"?

L’espai de memòria immediata que la IA pot fer servir (fins a 200K o 1M tokens segons model/plataforma) per raonar i generar respostes.

## Bones pràctiques

-   Optimitza/quanifica l’ús de tokens amb els comandes `/context`, `/clear`, `/compact`.
-   Fragmenta projectes grans: processa per capes, chunk, o per seccions (divideix funcions, capítols…).
-   Per cada “sessió llarga”, resumeix de tant en tant (“resumeix la conversa fins aquí…”).
-   Usa el memory tool si vols persistència més enllà del context immediat.
-   En projectes Claude, la funció RAG permet gestionar més coneixement de forma eficaç.

## Estratègies per documents grans

-   Chunking manual (trenca textos en blocs lògics)
-   Ressumir cada bloc abans d'afegir nou troç de context
-   O bé, utilitza “context editing” automàtic si el projecte ho suporta

## Consell avançat

Evita apropar-te al límit màxim de tokens — la qualitat baixa i les respostes poden ser abruptes.

# Mòdul 10: Gestió de Context Window

## Claus de gestió

-   **Clear:** Reinicia conversa per reduir “soroll”.
-   **Compact:** Resumeix història.
-   Fragmentació: No intentis analitzar tot alhora.
-   Optimització de “tokens” (vigila amb fitxers grans o PDFs).

## Exemple avançat de gestió

-   Projecte de 300.000 tokens:
    1. Divideix en 10 seccions.
    2. Resumeix cada secció individualment amb Claude.
    3. Agrega resums i pregunta per insight global.

## Exercicis extra

1. Prova chunking automàtic amb script Python (divideix PDFs en parts de 10K).
2. Crea memòria persistent externa (JSON/DB) per context entre sessions.
3. Monitoritza `usageContext` de Claude API i genera log de consum per optimitzar pressupost.

## Q&A

-   **Quan es recomana fer clear?**  
    – Sempre que canviïs de tema o arribis al 80% de la finestra de context.
-   **RAG i context automàtic?**  
    – Projects i skills amb Knowledge Base (RAG) optimitzen el context.
