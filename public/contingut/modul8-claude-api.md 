# Mòdul 8: Claude API – Integració Programàtica

## Per a què serveix?

Integrar Claude dins d’apps pròpies, fluxos d’automatització (Python, JS/TS…), bots i dashboards.

## Com accedir-hi?

-   Crea un compte a Anthropic Console.
-   Genera una API Key (Settings > API Keys).
-   Afegeix crèdit mínim necessari (5$).
-   Troba l’SDK oficial:
    -   Python: `pip install anthropic`
    -   Node: `npm install @anthropic-ai/sdk`

## Exemple bàsic (Python)

from anthropic import Anthropic
client = Anthropic(api_key="LA_TEVA_API_KEY")
message = client.messages.create(
model="claude-3-5-sonnet-20240620",
max_tokens=1024,
messages=[{"role": "user", "content": "Què és Claude?"}]
)
print(message.content.text)

## Paràmetres destacats

-   `max_tokens`: límit de la resposta
-   `temperature`: 0 (fix) fins 1 (creatiu)
-   `system`: prompt de sistema (rol/expert)

## Converses multi-torn

Mantén l’historial de missatges per tenir memòria i context entre crides (array messages).

## Control de sortida

-   Prefilling: forçar format, llistes, JSON.
-   Tool calling: enllaça amb funcions/microserveis.

## Models

-   Haiku: ràpid, més barat.
-   Sonnet: polivalent.
-   Opus: màxima qualitat.

# Mòdul 8: Claude API – Integració Programàtica

## Funcions avançades

-   Tool calling (crida de funcions custom via API).
-   Streaming de respostes per integracions en temps real.
-   Converses multi-torn amb memòria programada.

## Exemple d’integració Node.js

import Anthropic from "@anthropic-ai/sdk";
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const result = await anthropic.messages.create({
model: "claude-3-5-sonnet",
max_tokens: 250,
messages: [{ role: "user", content: "Dona’m tres IDE populars per Python." }]
});
console.log(result.content.text);

## Exercicis extra

1. Fes un bot que resumeix cada email que rebis i l’arxiva a Notion (integrant skills i API).
2. Implementa streaming de resposta amb Python.
3. Crea dashboards en web que consultin Claude dinàmicament.

## Q&A

-   **Com gestione el cost per volum alt d’ús?**  
    – Monitoritza `usage` i escalabilitat amb la consola d’Anthropic.
-   **Puc utilitzar la mateixa API Key en diversos projectes?**  
    – Sí, però millor separa per seguretat i traçabilitat.
