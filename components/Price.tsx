"use client";

import { useCurrency, formatGhsNumber } from "@/components/CurrencyProvider";

type PriceProps = {
  amountGhs?: number | null;
  fallback?: string;
  className?: string;
  showBase?: boolean;
};

/** Renders GH₵ with a font that includes the cedi glyph. */
function CediPrefix({ className }: { className?: string }) {
  return (
    <span className={`cedi ${className ?? ""}`} aria-label="Ghana cedi">
      GH&#8373;
    </span>
  );
}

export default function Price({
  amountGhs,
  fallback,
  className,
  showBase = false,
}: PriceProps) {
  const { currency, convertFromGhs, format, source } = useCurrency();

  if (typeof amountGhs !== "number" || !Number.isFinite(amountGhs)) {
    if (fallback) {
      return <span className={className}>{fallback}</span>;
    }
    return null;
  }

  const converted = convertFromGhs(amountGhs);

  return (
    <span className={className}>
      {currency === "GHS" ? (
        <span className="inline-flex items-baseline gap-1">
          <CediPrefix />
          <span>{formatGhsNumber(converted)}</span>
        </span>
      ) : (
        <span>{format(amountGhs)}</span>
      )}
      {showBase && currency !== "GHS" && (
        <span
          className="text-xs text-ink-muted ml-2 align-middle inline-flex items-baseline gap-0.5"
          aria-label="Price in Ghana Cedis"
          title={
            source === "fallback"
              ? "Using fallback exchange rates"
              : "Converted from GHS using live exchange rates"
          }
        >
          (
          <CediPrefix />
          {formatGhsNumber(amountGhs)})
        </span>
      )}
    </span>
  );
}
