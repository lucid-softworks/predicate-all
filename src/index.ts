export type Predicate<Arguments extends unknown[]> = (
  ...arguments_: Arguments
) => unknown;

/** Combine predicates using short-circuiting logical AND. */
export function allPass<Arguments extends unknown[]>(
  predicates: readonly Predicate<Arguments>[],
): (...arguments_: Arguments) => boolean {
  return (...arguments_) =>
    predicates.every((predicate) => Boolean(predicate(...arguments_)));
}
