import { forwardRef } from "react";

export interface EnterCurtainProps {
  visible: boolean;
}

export const EnterCurtain = forwardRef<HTMLDivElement, EnterCurtainProps>(
  function EnterCurtain({ visible }, ref) {
    if (!visible) return null;

    return (
      <div
        ref={ref}
        aria-hidden="true"
        data-enter-curtain=""
        style={{ clipPath: "inset(0 0 0% 0)" }}
        className="pointer-events-none fixed inset-0 z-80 bg-brand-ink"
      />
    );
  },
);
