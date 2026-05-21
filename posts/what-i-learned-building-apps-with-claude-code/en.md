---
title: I Built 3 Mobile Apps and a Dashboard Using Claude Code — What I Learned
date: 2026-05-22
cover: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: Blog, AI, Claude
---

# I Built 3 Mobile Apps and a Dashboard with Claude Code — What I Learned

This year has been a pretty wild and interesting chapter in both my personal and professional life. There’s been a bit of everything, and somehow also nothing at the same time—but what I’ve enjoyed the most is what I learned over the last month and a half.

I fully dedicated myself to rebuilding a personal project **from scratch**. A project that my brother and I spent almost a year building back in 2020 during the pandemic, and which, due to poor strategic decisions, didn’t end in the best way.

What’s interesting is that a little over a month ago I decided to rebuild everything from scratch. Yes, **from scratch**.

The original version was built in **plain JavaScript**. The good old type issues, silent production bugs, and errors that emotionally drained me more than once. Back then I hadn’t integrated **TypeScript** into my stack yet. Today, honestly, I can’t imagine building an app without TS.

We’re talking about a project composed of **3 mobile apps and a dashboard**, all connected through the same server and shared business rules. From the beginning I knew this was going to be a real challenge. Keeping contracts, logic, and UI consistent across all apps would be a serious challenge.

As a GitHub Copilot user for over 3 years, I already understood how these tools speed up development and impact the final product. But this time I decided to use Claude Code throughout the entire process because it was new to me and I wanted to truly understand how far it could go.

During this journey I learned a lot, both the easy way and the hard way. And from all of that, I want to share the most important lessons I believe can help you build better with LLMs.

<aside>Disclaimer: Even though this post is specifically about Claude Code, most of this applies to any modern LLM. Adapt it to your own workflow and environment.</aside>

## Base

Create your `.claude` folder with **clear rules** about your project structure, how you want Claude to write code, and how to handle components and files.

By default, Claude prioritizes simplicity over structure, and that can easily lead to duplicated code, inline components everywhere, and an inconsistent architecture.

## Verify before generating code

Before executing any implementation, ask it to show you what it’s going to do.

A lot of times Claude suggests things that “look right” but don’t actually solve what you need. It can even defend an implementation until you point out a small correction.

**Watch out for that.**

## Keep it small, but solid

Never ask for complex features to be implemented all at once. That usually hurts later.

Instead, ask for a basic version of what you want, review the foundation, and once you’re confident in the direction, start iterating on top of it.

A **solid base** is everything.

## The sacred reminder

Ask it to refresh your app context regularly.

Claude can lose context or end up working with outdated assumptions. And if you close your session, your tokens will suffer when it has to rebuild understanding of your app state or a specific bug.

## Don’t be afraid to consult a robot

When you’re not sure what to do, ask for options and **trade-offs**.

This can save you a lot of technical debt over time.

## Set boundaries

Claude often implements things without confirmation. You’ll eventually learn the hard way why this is dangerous.

Explicitly tell it not to make changes without your approval.

## Repeated components everywhere

This is especially important for React developers: create base components (Buttons, Inputs, Labels, etc.) and make sure Claude reuses them consistently.

I learned this the hard way when I realized Claude was creating a new button for every feature.

## The AI is the engine. You are the driver.

No matter how powerful it is, AI still doesn’t fully understand complex business rules or UI constraints.

You need to be explicit and simple with your instructions. Claude can easily “hallucinate” solutions if you don’t give enough context.

## Don’t blindly trust AI

And even though I’ve mentioned it before: always review the code before committing.

The biggest mistake is blindly trusting what an LLM generates. They are incredibly powerful tools, yes, but they still require human technical judgment.

Your job shifts from “writing everything” to **orchestrating AI properly during development**.

> Claude Code made me faster, but it didn’t replace judgment, architecture, or experience.
