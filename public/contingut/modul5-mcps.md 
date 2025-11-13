# Mòdul 5: MCPs – Model Context Protocol

## Què és un MCP?

MCP (Model Context Protocol) és un estàndard per ampliar Claude connectant-lo a eines, APIs i sistemes externs com un "plugin universal".

### Arquitectura

-   **MCP server**: Implementació (normalment Python, Node) que exposa hotels, funcions i recursos.
-   **MCP client**: El connector de l'entorn Claude que orquestra l’ús de tools i recursos.
-   **Host**: On s’executa el client (Claude Code, Chrome, IDE...).

## Com s'integra amb Claude?

-   Connecta MCP servers locals (filesystem, bash, Node.js…)
-   O MCPs remots (APIs web, serveis cloud, etc.)
-   Claude Desktop inclou gestor MCP visual per macOS/Windows

## Exemples de MCP

-   GitHub: analitzar PRs, crear issues, llegir repositoris.
-   Slack: llegir/enviar missatges, notificar.
-   Notion: gestionar i llistar bases de dades.

### Seguretat i casos d’ús pro

-   Usa Docker MCP Toolkit per sandboxing segur d’scripts i connectors.
-   Integració OAuth2 (via Azure, EntraID...) per a MCP d’empresa.

### Bones pràctiques

-   Implementa logs i limitació d’accés per MCPs amb permisos crítics.
-   Uneix MCPs locals (privacitat) i remots (col·laboratiu, empreses).

# Mòdul 5: MCPs – Model Context Protocol

## Definició

Estandard obert per connectar Claude a serveis, eines i microserveis: permet “veure” documents, consultar bases de dades, executar scripts o API externs.

## Exemples d’ús

-   MCP Filesystem: accés controlat a carpetes locals.
-   MCP Docker Toolkit: executar codi segurament via sandboxes.
-   MCP GitHub: analitzar, crear i gestionar PRs automàticament.
-   MCP Notion, Slack, QuickBooks, serveis propis d’empresa.

## Bones pràctiques de seguretat

-   Configura sempre sandboxes (Docker o entorns virtuals).
-   Si exposes MCP a l’exterior: usa autentificació OAuth2 i rol based acess.
-   Mantingues logs detallats per a revisió i debug.
-   Controla permissions per MCP i agent.

## Exercicis extra

1. Configura MCP local per accedir a fitxers.
2. Implementa un MCP pròpi que consulti una API meteorològica.
3. Fes servir MCP GitHub per filtrar PRs problemàtics automàticament.

## Q&A

-   **Puc tenir MCP locals i remots alhora?**  
    – Sí, es poden combinar.
-   **Què passa si cau un MCP?**  
    – Claude notifica o canvia de font segons configuració de backup.
