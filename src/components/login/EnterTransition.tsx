"use client";

export function EnterTransition() {
  return (
    <div
      data-enter-overlay
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 bg-[#05080F] opacity-0 invisible"
    />
  );
}
