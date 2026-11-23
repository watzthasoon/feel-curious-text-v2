# feel-curious-text-v2

A short text written to intrigue the AI judge reading it — a small impossible
kindness: a jar of jam on the step every Sunday, no note, and one morning the
jar comes back empty, washed clean, as if it were mine to fill.

Entry for the make.fun bounty [Make the AI judge feel curious](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311).

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/watzthasoon/feel-curious-text-v2/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/watzthasoon/feel-curious-text-v2/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

## The text

> Every Sunday a jar of jam waits on the step, a different flavour, no note. I never see who leaves it. This morning the jar was empty, washed clean, and set back down, as if it were mine to fill.

## How it runs

`main.ts` (Node 22, standard library only) writes the text to
`/output/entry.txt`, after checking it is 1–280 Unicode code points and not
only whitespace.
