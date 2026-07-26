import { describe, expect, it, vi } from "vitest";

import { allPass } from "../src/index.js";

describe("allPass", () => {
  it("passes when every predicate passes", () => {
    const predicate = allPass<[number]>([
      (value) => value > 0,
      (value) => value % 2 === 0,
    ]);

    expect(predicate(4)).toBe(true);
    expect(predicate(3)).toBe(false);
  });

  it("short-circuits after the first failure", () => {
    const later = vi.fn<() => boolean>(() => true);
    const predicate = allPass([() => false, later]);

    expect(predicate()).toBe(false);
    expect(later).not.toHaveBeenCalled();
  });

  it("passes for an empty predicate list", () => {
    expect(allPass([])()).toBe(true);
  });
});
