# Mòdul 7: Claude Code – Desenvolupament amb IA

## Què és Claude Code?
Una CLI que permet executar sessions Claude directament des del terminal amb accés a fitxers, codi, git i integració MCP.

## Instal·lació
- Prerequisit Node.js i npm:  
  `npm install -g @anthropic-ai/claude-code`
- Inicia sessió:  
  `claude`, després segueix instruccions d’auth o API key.

## Comandes bàsics
- `/clear`: Esborra context.
- `/compact`: Resumeix historial per alliberar tokens.
- `/context`: Mostra ús de tokens de la sessió.
- `/agents`: Gestiona agents i subagents.

## Fitxer config: CLAUDE.md
- Instruccions, info del projecte, preferències d’estil i eines autoritzades.

## Projectes i subagents
- Crea subagents per a components/àrees del projecte.
- Usa agents especialitzats (frontend, backend, test…)

## Bones pràctiques
- Mantén projectes separats.
- Escriu instruccions clares i posa context a CLAUDE.md.
- Refés sessions llargues regularment amb `/clear` o `/compact`.


# Mòdul 7: Claude Code – Desenvolupament amb IA

## Característiques
- Sessions CLI amb o sense memòria persistent.
- Suport per /agents, context, clear, compact i slash commands.
- Integració nativa de subagents i tools externs.

## Exemple d’ús
- Inicia sessió:  
  `claude`
- Carrega projecte i CLAUDE.md automàticament.
- Executa:
  `/clear`
  `/agents`
  `/context`
- Crea un agent “frontend” i un “backend”, treballant en paral·lel.

## Exercicis extra
1. Implementa un comandament slash personalitzat (ex. /test per generar tests automàtics).
2. Automatitza l’estructura d’arxius Markdown d’una docència amb fitxer CLAUDE.md.
3. Prova debug multi-mòdul: “Revisa i corregeix tots els errors HTTP a backend/”

## Q&A
- **Claude Code pot executar fitxers bash directament?**  
  – Sí, en MCP Filesystem o via sandbox. Cal autoritzar segons correspongui.
- **Com gestiono múltiples projectes?**  
  – Usa CLAUDE.md específic per projecte i sessions separades.
