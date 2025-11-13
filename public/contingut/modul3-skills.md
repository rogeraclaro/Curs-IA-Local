# Mòdul 3: Skills – Habilitats Personalitzades

## Què és una Skill?
És un workflow modular reutilitzable: carpeta amb instruccions (`SKILL.md`), plantilles i opcionalment scripts o exemples per resoldre una tasca d’alta qualitat.

## Estructura típica
- `SKILL.md`: nom, descripció, instruccions detallades i triggers.
- Exemples, plantilles, scripts de validació opcionals.
- Pot combinar-se amb artifacts i MCP per tasks complexes.

## Exemple pràctic: skill de resum automàtic
1. Crear carpeta “skill_resum”
2. SKILL.md:

name: Resum Automàtic Abstract
description: Genera resums breus d’articles científics per contingut i novetat.

Passos:

Analitza títol i abstract.

Identifica estructures: objectiu, metodologia, resultats.

Sintetitza en una frase per apartat.

3. Prova la skill carregant-la a Claude Code o web.

## Exercicis extra
1. Dissenya una skill per convertir codis de colors hex a RGB.
2. Fes una skill per checks de seguretat de codi Python.
3. Automatitza el resum i mailing de reunions.

## Q&A
- **Puc reutilitzar skills entre comptes?**  
– Sí, són completament portables.  
- **Es poden activar automàticament?**  
– Sí, mitjançant triggers clau dins el prompt o per activa manual.
