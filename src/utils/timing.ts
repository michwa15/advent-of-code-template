export function timeIt<T>(label: string, fn: () => T): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${label}: ${(end - start).toFixed(3)}ms`);
  return result;
}
