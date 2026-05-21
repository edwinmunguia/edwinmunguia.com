---
title: Construí 3 Aplicaciones Móviles y un Dashboard Usando Claude Code — Lo que Aprendí
date: 2026-05-22
cover: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: Blog, AI, Claude
---

# Cree 3 apps móviles y un dashboard con Claude Code. Esto fue lo que aprendí

Todo este año ha sido un episodio muy loco e interesante tanto en mi vida personal como profesional. Ha habido de todo y nada a la vez, pero una de las cosas que más he disfrutado ha sido lo aprendido durante el último mes y medio.

Me dediqué completamente a reejecutar un proyecto personal **desde cero**. Un proyecto que a mi hermano y a mí nos tomó casi un año construir allá por 2020, durante la pandemia, y que por malas decisiones estratégicas no terminó de la mejor manera.

Lo interesante es que hace poco más de un mes decidí reconstruir todo desde cero. Sí, **desde cero**.

La versión original estaba hecha en **JavaScript puro**. Benditos problemas de tipado, bugs silenciosos en producción y errores que me dejaron emocionalmente destruido más de una vez. En ese entonces todavía no integraba **TypeScript** a mi stack. Hoy, sinceramente, me parece impensable desarrollar una app sin TS.

Estamos hablando de un proyecto compuesto por **3 apps móviles y un dashboard**, todos conectados entre sí mediante un mismo servidor y reglas de negocio compartidas. Desde el inicio sabía que desarrollarlo iba a ser una odisea. Mantener contratos, lógica y UI consistentes entre todas las apps sería un reto enorme.

Como usuario de GitHub Copilot durante más de 3 años, ya entendía cómo estas herramientas aceleran el desarrollo y afectan el producto final. Pero esta vez decidí usar Claude Code durante todo el proceso porque era algo nuevo para mí y quería entender realmente hasta dónde podía llegar.

Durante este tiempo aprendí muchísimo, tanto a las buenas como a las malas. Y de todo eso, quiero compartir los puntos que considero más importantes para desarrollar mejor usando LLMs.

> Disclaimer: Aunque este post habla específicamente de Claude Code, gran parte de esto aplica para cualquier LLM actual. Adaptalo a tu entorno y flujo de trabajo.

## Base

Creá tu carpeta `.claude` con **reglas claras** sobre la estructura del proyecto, cómo querés que Claude escriba código y cómo manejar componentes y archivos.

Claude por defecto prioriza simplicidad sobre estructura, y eso puede terminar en código repetido, componentes inline por todos lados y una arquitectura inconsistente.

## Verificá antes de generar código

Antes de ejecutar cualquier implementación, pedile que te muestre qué va a hacer.

Muchas veces Claude propone cosas que “se ven bien”, pero no resuelven exactamente lo que necesitás. Incluso puede defender una implementación hasta que le hacés una pequeña corrección.

**Ojo ahí.**

## Hacelo pequeño, pero sólido

Jamás le pidas implementar features complejas completas de una sola vez. Eso duele después.

Mejor pedile una versión básica de lo que querés, revisá la implementación y, cuando estés seguro de la dirección, empezá a iterar encima de eso.

Una **base sólida** es fundamental.

## El recordatorio sagrado

Pedile que actualice el contexto de tu app cada cierto tiempo.

Claude pierde contexto o puede quedarse trabajando sobre información obsoleta. Y si cerrás la sesión actual, tus tokens van a llorar cuando tenga que volver a entender el estado de la app o cierto bug.

## No tengás miedo de consultar un robot

Cuando no tengas claro qué hacer, pedile opciones y **trade-offs**.

Eso te puede ahorrar muchísima deuda técnica con el tiempo.

## Poné límites

Muchas veces Claude implementa cosas sin confirmarlas primero. Ya sabrás el problema en el que te podés meter con eso.

Pedile explícitamente que no implemente cambios sin tu aprobación.

## Componentes repetidos por todas partes

Esto es especialmente importante para developers React: creá componentes base (Buttons, Inputs, Labels, etc.) y hacé que Claude los reutilice siempre.

Aprendí esto a la mala cuando me di cuenta de que Claude creaba un botón nuevo para cada feature.

## La IA es el motor. Vos conducís.

Por más potente que sea una IA, actualmente no entiende completamente Business Rules ni UI compleja.

Necesitás ser explícito y simple al pedir las cosas. Claude puede delirar bastante si no le das suficiente contexto.

## No confiés ciegamente en la IA

Y aunque ya lo mencioné antes: revisá siempre el código antes de hacer commit.

El mayor error es confiar ciegamente en lo que genera una LLM. Son herramientas increíblemente potentes, sí, pero todavía necesitan criterio técnico humano.

Tu trabajo cambia de “escribir todo” a **“orquestar correctamente una IA durante el desarrollo”**.

> Claude Code me hizo más rápido, pero no reemplazó criterio, arquitectura ni experiencia.
