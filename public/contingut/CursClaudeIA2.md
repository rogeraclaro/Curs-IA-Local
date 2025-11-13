# Curs Estructurat Complet de Claude IA: De Zero a Expert

Com a subscriptor de Claude IA, tens accés a una de les eines d'intel·ligència artificial més potents del mercat. Aquest curs estructurat t'ensenyarà des dels fonaments fins a les capacitats més avançades de la plataforma, amb especial èmfasi en Skills, Agents i MCPs (Model Context Protocol), les tres àrees que has destacat com de major interès.

## Resum Executiu del Curs

Aquest programa formatiu de 50-60 hores està organitzat en 10 mòduls progressius que cobreixen 87 temes específics. El curs està dissenyat per a proporcionar-te un domini complet de Claude AI, des de la interfície web fins a la construcció d'agents autònoms i la integració programàtica mitjançant API. Cada mòdul combina teoria, documentació oficial i pràctica intensiva per assegurar l'aprenentatge efectiu.

---

## Mòdul 1: Introducció i Fonaments

### 1.1. Què és Claude AI i Característiques Principals

Claude AI, desenvolupat per Anthropic, és un dels models de llenguatge més avançats del mercat, dissenyat amb un enfocament en la seguretat, l'ètica i la col·laboració natural amb humans. A diferència d'altres assistents d'IA, Claude destaca per la seva capacitat de raonament profund, baixes taxes d'al·lucinacions i un comportament més transparent i controlable.

Les característiques distintives de Claude inclouen un sistema de raonament híbrid que permet passar de respostes instantànies a pensament extens visible per l'usuari, capacitats de visió avançades per analitzar imatges i diagrames, i una finestra de context d'entre 200.000 i 1.000.000 de tokens depenent del model. Claude també ofereix integració nativa amb eines externes mitjançant el Model Context Protocol, permetent que actuï com un veritable agent capaç d'executar tasques complexes de forma autònoma.

### 1.2. Plans Disponibles: Free, Pro, Max (5x i 20x)

L'estructura de preus de Claude s'organitza en quatre nivells principals que s'adapten a diferents necessitats i volums d'ús. El pla Free proporciona accés il·limitat al model Claude Sonnet amb restriccions d'ús raonables, ideal per explorar la plataforma i per a tasques ocasionals.

El pla Pro, per 20$/mes, multiplica per 5 els límits d'ús del pla gratuït i ofereix accés prioritari als models més avançats com Claude 4 Opus, així com funcions addicionals com Extended Thinking, Web Search i la capacitat de crear Projects. Aquest pla és perfecte per a professionals individuals que necessiten assistència constant d'IA però sense exigències extremes de volum.

El pla Max es presenta en dues variants: Expanded Usage (100$/mes) amb 5x l'ús del Pro (efectivament 25x més que Free), i Maximum Flexibility (200$/mes) amb 20x l'ús del Pro (100x més que Free). Max afegeix funcions premium com memòria persistent entre converses, límits d'output més alts, accés prioritari durant pics de demanda i accés anticipat a noves funcions. Aquest pla està dissenyat per a power users, equips i empreses que integren Claude profundament en els seus fluxos de treball diaris.

### 1.3. Diferències entre Claude.ai, Claude Code i Claude API

L'ecosistema de Claude ofereix tres interfícies principals que serveixen a diferents casos d'ús. Claude.ai és la interfície web conversacional, ideal per a interaccions directes, creació de Projects, gestió d'Artifacts i accés a funcions com Extended Thinking i Web Search. És l'eina perfecta per a usuaris generals, creadors de contingut i qualsevol que necessiti assistència interactiva.

Claude Code és una eina CLI (Command-Line Interface) específicament dissenyada per a desenvolupadors, que permet executar Claude directament des del terminal amb accés complet al sistema de fitxers local, capacitat d'executar codi, gestionar repositoris Git i utilitzar subagents per a tasques paral·leles. Claude Code llegeix automàticament fitxers CLAUDE.md per entendre la configuració del projecte i pot integrar-se amb MCP servers per accedir a eines externes.

Claude API proporciona accés programàtic als models de Claude mitjançant SDKs oficials per a Python i TypeScript/JavaScript, permetent integrar les capacitats d'IA en aplicacions personalitzades, automatitzacions i pipelines de dades. L'API ofereix control granular sobre paràmetres com max_tokens, temperature, system prompts i thinking budget, i suporta streaming de respostes, tool calling i processament d'imatges.

### 1.4. Configuració Inicial de Compte

Per començar amb Claude, el primer pas és crear un compte a Anthropic visitant claude.ai. Durant el procés de registre, pots escollir entre autenticació amb email o mitjançant proveïdors OAuth com Google. Un cop creat el compte, accedeix al tauler de control (Anthropic Console) on pots gestionar la teva subscripció, generar API keys i monitoritzar l'ús.

Si planifiques utilitzar l'API, necessitaràs generar una clau d'API des de la secció Settings > API Keys del Console. És fonamental mantenir aquesta clau segura i no exposar-la mai en codi públic o repositoris. Utilitza variables d'entorn (fitxers .env) per emmagatzemar-la de forma segura en els teus projectes.

Per a Claude Code, instal·la l'eina globalment mitjançant npm:

```bash
npm install -g @anthropic-ai/claude-code
```

Després configura la teva API key executant `claude` i seguint les instruccions d'autenticació. Claude Code crearà automàticament els fitxers de configuració necessaris en el teu sistema.

### 1.5. Primers Passos: Interfície Web i Comandes Bàsiques

La interfície web de Claude.ai està organitzada intuïtivament amb una barra lateral esquerra que mostra les teves converses recents i Projects, i una àrea principal de xat al centre. A la dreta apareix el panell d'Artifacts quan Claude genera contingut substancial com codi, documents o visualitzacions.

Les funcions clau accessibles des de la interfaz inclouen el selector de model (a la part superior, on pots canviar entre Haiku, Sonnet i Opus), el botó "Search and tools" per activar Extended Thinking, Web Search i altres capacitats avançades, i l'icona de pujada de fitxers per compartir documents o imatges amb Claude.

En Claude Code, els comandos esencials inclouen:

-   `/clear` per reiniciar la conversa i alliberar context
-   `/compact` per comprimir l'historial mantenint informació important
-   `/context` per veure l'ús actual de tokens
-   `/agents` per gestionar subagents

També pots utilitzar slash commands personalitzats creats en el directori `.claude/commands/` per automatitzar prompts freqüents.

---

## Mòdul 2: Projects i Artifacts

### 2.1. Creació i Gestió de Projects

Els Projects són espais de treball dedicats dins de Claude que permeten organitzar converses relacionades i mantenir context persistent mitjançant una base de coneixement compartida. Aquesta funcionalitat està disponible exclusivament per a usuaris de plans de pagament (Pro, Max, Team i Enterprise).

Per crear un Project, navega a la secció "Projects" a la barra lateral esquerra de claude.ai i fes clic a "+ New Project". Assigna un nom descriptiu i una descripció opcional (nota que Claude no té accés a aquesta metainformació). Els Projects són ideals per a casos d'ús específics com assistents d'automatització, creació de contingut de marca, optimització SEO, generació de scripts de vídeo o assistència de programació.

La gestió efectiva de Projects implica crear un Project dedicat per cada cas d'ús o àrea de treball diferent, en lloc d'utilitzar un sol Project genèric. Pots marcar amb estrella els Projects més utilitzats, arxivar els antics i organitzar-los segons necessitats. Recorda que el context no es comparteix entre diferents xats dins d'un mateix Project a menys que la informació s'afegeixi explícitament a la base de coneixement del Project.

### 2.2. Project Knowledge: Instruccions i Documentació

El Project Knowledge és la base de coneixement persistent que Claude consultarà en totes les converses dins d'un Project concret. Aquesta àrea apareix a la dreta de la pàgina principal del Project i pot contenir dues categories principals d'informació: instruccions del sistema i documents de referència.

Les instruccions del Project defineixen com vols que Claude es comporti i respongui dins d'aquest espai de treball. Per configurar-les, fes clic a "Set project instructions" i escriu indicacions detallades sobre l'estil de comunicació desitjat, el format de les respostes, restriccions específiques o processos a seguir. Per exemple, un Project per a newsletters podria incloure instruccions sobre to, estructura preferida i exemples de contingut anterior.

Per afegir documentació de referència, utilitza el botó "+" per pujar documents de text, fitxers de codi, PDFs o altres materials que Claude hauria de considerar com a context. Quan el volum de documentació s'apropi al límit de la finestra de context, Claude activarà automàticament el mode RAG (Retrieval-Augmented Generation) per expandir la capacitat del Project. Aquest mode permet gestionar bases de coneixement molt més grans cercant dinàmicament la informació rellevant en lloc de carregar-la tota al context.

### 2.3. Artifacts: Creació i Edició de Contingut

Els Artifacts representen un canvi paradigmàtic en com interactuem amb IA conversacional, transformant Claude d'un simple chatbot a una eina de treball col·laborativa. Quan Claude genera contingut substancial i autònom (generalment de més de 15 línies), automàticament el presenta en una finestra dedicada separada de la conversa principal.

Aquesta separació permet editar i iterar sobre el contingut sense perdre'l entre el flux de la conversa. Pots demanar a Claude que modifiqui l'Artifact ("afegeix animacions", "canvia el color principal a blau", "optimitza aquest codi"), i les actualitzacions apareixeran directament a la finestra lateral mantenint totes les versions anteriors accessibles.

Per activar la funcionalitat Artifacts, ves a Settings (icona del perfil) > Claude capabilities i activa el toggle "Artifacts". Un cop activat, Claude detectarà automàticament quan és apropiat crear un Artifact, tot i que també pots sol·licitar-ho explícitament dient "genera això com un Artifact". Pots treballar amb múltiples Artifacts simultàniament en una mateixa conversa utilitzant el control lliscant a la part superior dreta per canviar entre ells.

### 2.4. Tipus d'Artifacts: Codi, Documents, SVG, React

Claude pot generar diversos tipus d'Artifacts, cadascun optimitzat per a diferents casos d'ús. Els Artifacts de codi inclouen snippets i scripts en qualsevol llenguatge de programació, executables directament des de la finestra lateral quan és apropiat. Són ideals per a crear utilitats ràpides, funcions reutilitzables o exemples educatius.

Els Artifacts de documents es generen en format Markdown i es renderitzen com a documents formatejats amb suport per a titols, llistes, taules i altres elements. Pots descarregar-los com a .md o copiar el contingut. Els documents generats per Claude són ideals per a creació de guies, documentació tècnica, plans de projecte o materials de formació.

Els Artifacts SVG (Scalable Vector Graphics) permeten generar gràfics, diagrames i visualitzacions interactives que es mostren immediatament. Són perfectes per a crear diagrames d'arquitectura, gràfics de dades, il·lustracions conceptuals o quals elements visuals que no requereixen llibreries externes.

Els Artifacts React són components JavaScript/JSX completament funcionals que s'executen en un entorn de navegador segur. Pots crear aplicacions web interactives, calculadores, dashboards o jocs, amb accés a llibreries com React, Recharts, Tailwind CSS i d'altres. Els Artifacts React són especialment potents per a prototipatge ràpid i demostracions interactives.

---

## Mòdul 8: Integració Programàtica amb API

### 8.5. Paràmetres: max_tokens, temperature, system prompts

El paràmetre `max_tokens` controla la longitud màxima de la resposta generada. És obligatori i hauria de ser suficientment alt per permetre respostes completes però no excessiu per evitar costs innecessaris. Per a respostes breus (confirmacions, resums curts), 200-500 tokens són suficients. Per a contingut substancial (articles, codi complex), configura 1000-4000 tokens. El màxim absolut depèn del model però pot arribar fins a 128K tokens per a outputs extremadament llargs.

`temperature` controla la aleatorietat de les respostes, amb un rang de 0 a 1. Un valor de 0 fa que Claude sigui completament determinista, sempre escollint l'opció més probable (ideal per a generació de codi, anàlisi tècnica o quan necessites consistència absoluta). Valors més alts (0.7-1.0) introdueixen més creativitat i variació (útil per a escriptura creativa, brainstorming o generar múltiples alternatives diferents). El valor predeterminat (1.0) funciona bé per a la majoria de casos d'ús generals.

Els system prompts es defineixen amb el paràmetre `system`, separadament dels missatges de l'usuari. Estableixen el context global, rol i comportament de Claude per a tota la conversa:

```python
message = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=1024,
    system="Ets un expert en seguretat informàtica especialitzat en anàlisi de vulnerabilitats. Proporciona sempre recomanacions concretes i executables.",
    messages=[...]
)
```

El system prompt s'aplica a tots els missatges subsegüents i és la forma més efectiva de personalitzar el comportament de Claude per a casos d'ús específics.

### 8.6. Converses Multi-Torn

Per implementar converses amb memòria, mantingues un array de missatges que inclou tot l'historial de la interacció. Cada vegada que l'usuari envia un nou missatge, afegeix-lo a l'array i inclou també la resposta anterior de Claude:

```python
conversation_history = [
    {"role": "user", "content": "Hola, Claude"},
    {"role": "assistant", "content": "Hola! Com puc ajudar-te avui?"},
    {"role": "user", "content": "Explica'm què és un LLM"}
]

message = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=1024,
    messages=conversation_history
)
```

Claude utilitzarà tot l'historial com a context per generar respostes coherents que tinguin en compte converses anteriors. Després de rebre la resposta, afegeix-la també a l'historial per mantenir-lo actualitzat per a la següent interacció. Aquest patró permet implementar chatbots estateful que recorden preferències, decisions anteriors i context acumulat.

Tingues en compte la gestió de context: a mesura que les converses s'allarguen, l'historial creix consumint més tokens (que es cobren com a input tokens). Per a converses molt llargues, considera implementar estratègies de compressió: resumir les primeres interaccions mantenint només els missatges recents en detall complet, o utilitzar tècniques de windowing on només els últims N missatges es mantenen en memòria completa mentre la conversa antiga es resumeix.

### 8.7. Prefilled Responses i Control de Sortida

El prefilling permet controlar com Claude comença la seva resposta afegint contingut parcial amb rol "assistant" com a últim missatge. Això és especialment útil per guiar el format de la resposta o assegurar que Claude segueix una estructura específica:

```python
messages = [
    {"role": "user", "content": "Quin és el grec per a por? (A) Arachnea, (B) Philosophia, (C) Phobia"},
    {"role": "assistant", "content": "La resposta és ("}
]

message = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=1,
    messages=messages
)
```

Claude continuarà des del punt on el prefill acaba, en aquest cas completant directament amb la lletra de l'opció correcta. Aquest enfocament és **extremadament poderós** per a tasques de classificació, extracció d'informació estructurada o forçar formats JSON/XML específics. També pots utilitzar prefilling per assegurar que Claude respon en un idioma específic, segueix plantilles predefinides o s'adhereix a restriccions de format crítiques per a integracions amb altres sistemes.

---

## Models de Claude: Comparativa i Casos d'Ús

### Claude Haiku

Claude Haiku és el model més ràpid i eficient, optimitzat per a tasques que requereixen baixa latència i cost mínim. Tot i ser compact, manté capacitat sòlida per a tasques de processament de text, classificació i resums. Haiku és ideal per a aplicacions en temps real, processament de grans volums de dades, o casos d'ús sensibles al cost on la velocitat és crítica.

### Claude Sonnet

Claude Sonnet representa el balanç òptim entre rendiment i cost. És suficient per a ~90% de tasques de programació, processament de dades, generació de contingut i assistència general. Sonnet és el model predeterminat recomanat per a la majoria d'aplicacions empresarials que necessiten capacitat sòlida sense el cost de models premium. La versió 3.5 i posteriors ofereixen millores substancials en raonament, codificació i comprensió de context.

### Claude Opus

Claude Opus és el model més potent i intel·ligent, dissenyat per a anàlisi crítica de alt nivell, tasques de recerca complexes i problemes que requereixen raonament profund. Tot i que més lent (~38.9 tokens/sec) i costós que Sonnet, Opus rarament produeix codi defectuós i proporciona raonament més robust per a debugging difícil o planificació arquitectural a gran escala. Utilitza'l quan la qualitat màxima és crítica i el pressupost ho permet.

---

_Fitxer reformatat i estructurat correctament com a markdown coherent._
