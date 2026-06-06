import type { FormValue, Path } from "../types/schema";

export function deepSet(
  obj: FormValue,
  path: Path,
  value: FormValue
): FormValue {
  if (path.length === 0) return value;

  const [head, ...rest] = path;

  if (typeof head === "number") {
    const arr = Array.isArray(obj) ? [...obj] : [];
    arr[head] = deepSet(arr[head] ?? null, rest, value);
    return arr;
  }

  const current =
    obj !== null && typeof obj === "object" && !Array.isArray(obj)
      ? { ...(obj as Record<string, FormValue>) }
      : ({} as Record<string, FormValue>);

  current[head] = deepSet(current[head] ?? null, rest, value);
  return current;
}

export function deepGet(obj: FormValue, path: Path): FormValue | undefined {
  let current: FormValue | undefined = obj;
  for (const segment of path) {
    if (current === null || current === undefined) return undefined;
    if (typeof segment === "number" && Array.isArray(current)) {
      current = current[segment];
    } else if (
      typeof segment === "string" &&
      typeof current === "object" &&
      !Array.isArray(current)
    ) {
      current = (current as Record<string, FormValue>)[segment];
    } else {
      return undefined;
    }
  }
  return current;
}
