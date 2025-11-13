# Mòdul 9: Prompt Engineering – Millora de Prompts

## Fonaments d’enginyeria de "prompts"

Saber guiar la IA per obtenir el resultat esperat, minimitzar errors i optimitzar la qualitat de resposta.

## Bones pràctiques

-   Sigues molt clar i específic: “Resumeix aquest text en 5 punts clau”.
-   Dona exemples i context, principalment per prompts llargs.
-   Utilitza XML/markdown per estructurar informació (“<pas>1...</pas>”).
-   Emfatitza criteris (“sempre dóna la resposta en català”).
-   Divideix tasques complexes en prompts més petits (Prompt Chaining o CoT – chain of thought).
-   Utilitza prompts de system per assignar rols i estils (“Actua com expert en analítica web…”).

## Estratègies avançades

-   Multi-shot: passa-li més d’un exemple.
-   Prefilling: força format d’output.
-   Prompt generator: automatitza la creació de prompts bàsics recurrentment usats.

## Errors habituals a evitar

-   Prompts massa genèrics o sense exemples.
-   Canviar l’idioma sense especificar-ho.

## Exemples

-   "Genera un informe d’aquest CSV en format markdown, afegeix conclusions i recomana millores."
-   "Revisa el codi següent i troba vulnerabilitats"

# Mòdul 9: Prompt Engineering

## Bones pràctiques

-   Especificitat, exemples, explicacions.
-   Utilització de system prompt (“Ets un instructor d’acadèmia…”)
-   Prompts chaining: resol “gran problema” dividint en subtasques i concatenant resultats.
-   Optimització per llargada de resposta (`max_tokens`) i temperatura segons task.

## Exemple d’encadenament de prompts (chaining)

1. **Prompt 1**: “Analitza el CSV adjunt i proposa 3 KPIs rellevants.”
2. **Prompt 2**: “A partir de les conclusions del Prompt 1, genera recomanació estratègica.”

## Exercicis extra

1. Dissenya un prompt multi-rol (“Ara actua com a programador, després com a tester.”)
2. Crea chain of thought per resoldre un enigma de lògica.
3. Fes variacions d’un prompt i compara resultats amb temperatura 0–1.

## Q&A

-   **Com aconsegueixo respostes més sintètiques?**  
    – Demana explícitament “resum breu”, limita tokens i dóna exemple d’output.
-   **Què faig si l’output té errors factuals?**  
    – Dona context extra, afegeix referències i ajusta prompts.
