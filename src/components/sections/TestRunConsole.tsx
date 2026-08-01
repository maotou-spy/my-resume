import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const suites = [
  'booking-flow.spec.ts',
  'api-auth.spec.ts',
  'payment-webhook.spec.ts',
  'regression-suite.spec.ts',
];

/**
 * A small terminal panel that "runs" the author's own test suites one by
 * one — a signature element grounded in their actual work as a QA /
 * automation test engineer, rather than a generic decorative device.
 */
export function TestRunConsole() {
  const [passedCount, setPassedCount] = useState(0);

  useEffect(() => {
    // Nếu chưa chạy xong hết các test, tiếp tục chạy từng test sau 650ms
    if (passedCount < suites.length) {
      const timer = setTimeout(() => setPassedCount((c) => c + 1), 650);
      return () => clearTimeout(timer);
    }

    // Khi đã hoàn thành tất cả (all done), đợi 2000ms (2 giây) rồi reset chạy lại từ đầu
    const resetTimer = setTimeout(() => setPassedCount(0), 2000);
    return () => clearTimeout(resetTimer);
  }, [passedCount]);

  const allDone = passedCount === suites.length;

  return (
    <div
      className="w-full max-w-sm rounded-xl border border-border bg-surface/80 p-4 font-mono text-xs shadow-xl backdrop-blur-sm sm:text-sm"
      role="img"
      aria-label={`Test runner: ${passedCount} of ${suites.length} suites passed`}
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-mint/70" aria-hidden />
        <span className="ml-2 text-muted">test-runner</span>
      </div>

      <p className="text-muted">
        <span className="text-cyan">$</span> npm run test:regression
      </p>

      <ul className="mt-2 space-y-1.5">
        {suites.map((suite, index) => {
          const isDone = index < passedCount;
          const isRunning = index === passedCount && !allDone;
          return (
            <li key={suite} className="flex items-center gap-2">
              {isDone ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-mint"
                  aria-hidden
                >
                  ✓
                </motion.span>
              ) : (
                <span
                  className={isRunning ? 'text-cyan animate-blink' : 'text-muted/40'}
                  aria-hidden
                >
                  {isRunning ? '›' : '·'}
                </span>
              )}
              <span className={isDone ? 'text-text' : 'text-muted'}>{suite}</span>
            </li>
          );
        })}
      </ul>

      <p className="mt-3 border-t border-border pt-2 text-muted">
        {allDone ? (
          <span className="text-mint">
            {suites.length}/{suites.length} passed · 0 failed
          </span>
        ) : (
          <span>
            {passedCount}/{suites.length} passed…
          </span>
        )}
      </p>
    </div>
  );
}