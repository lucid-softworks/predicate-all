# `@lucid-softworks/predicate-all`

Combine predicates that share an argument signature using short-circuiting
logical AND. An empty list produces a predicate that returns `true`.

```ts
import { allPass } from "@lucid-softworks/predicate-all";

const isPositiveEven = allPass<[number]>([
  (value) => value > 0,
  (value) => value % 2 === 0,
]);
```
