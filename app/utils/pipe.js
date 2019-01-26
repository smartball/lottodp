export const pipe = (...fns) => (x) => fns.reduceRight((y, fn) => fn(y), x)
