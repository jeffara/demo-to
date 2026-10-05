const A = {
  STANDARD_FUNCTIONAL: [0.2, 0, 0.38, 0.9],
  STANDARD_CREATIVE: [0.4, 0.14, 0.3, 1],
  ENTRANCE_FUNCTIONAL: [0, 0, 0.38, 0.9],
  ENTRANCE_CREATIVE: [0, 0, 0.2, 1.2],
  EXIT_FUNCTIONAL: [0.2, 0, 1, 0.9],
  EXIT_CREATIVE: [0.8, 0.3, 1, 1]
}, E = {
  FAST_01: 0.07,
  // 70ms
  FAST_02: 0.11,
  // 110ms
  MODERATE_01: 0.15,
  // 150ms
  MODERATE_02: 0.24,
  // 240ms
  SLOW_01: 0.4,
  // 400ms
  SLOW_02: 0.7
  // 700ms
};
export {
  E as DURATION,
  A as EASING
};
