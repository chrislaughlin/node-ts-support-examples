# bun-example Benchmarks  
```bash
hyperfine --warmup 3 'node index.js' 'deno run index.ts' 'bun run index.ts'
Benchmark 1: node index.js
  Time (mean ± σ):      39.0 ms ±   2.0 ms    [User: 32.9 ms, System: 6.3 ms]
  Range (min … max):    37.4 ms …  54.3 ms    68 runs

  Warning: Statistical outliers were detected. Consider re-running this benchmark on a quiet system without any interferences from other programs. It might help to use the '--warmup' or '--prepare' options.

Benchmark 2: deno run index.ts
  Time (mean ± σ):      30.8 ms ±   0.7 ms    [User: 23.6 ms, System: 7.4 ms]
  Range (min … max):    29.7 ms …  33.5 ms    82 runs

Benchmark 3: bun run index.ts
  Time (mean ± σ):      28.7 ms ±   0.5 ms    [User: 24.5 ms, System: 6.5 ms]
  Range (min … max):    27.9 ms …  30.7 ms    87 runs

Summary
  bun run index.ts ran
    1.07 ± 0.03 times faster than deno run index.ts
    1.36 ± 0.07 times faster than node index.js
```