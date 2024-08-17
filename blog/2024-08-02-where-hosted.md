---
slug: where-hosted
title: Where is the project hosted?
authors: music-soul1-1
tags: [hosting, news]
---

Hi 👋,

music-soul1-1 here! I'm here to tell you where the project is hosted.

The API is currently hosted on [MonsterASP.NET](https://www.monsterasp.net/) with free plan, which is enough for the current usage.

Because of free subscription plan, if the API is not being called for a while, it can go to sleep mode, 
and Hangfire recurring jobs might not execute when scheduled. A proper workaround will be found in the future 
(currently there are 2 keep-alive jobs to minimize the sleep time).
