export type SupportedCurrency = "GHS" | "USD" | "EUR" | "GBP";

export const SUPPORTED_CURRENCIES: SupportedCurrency[] = [
  "GHS",
  "USD",
  "EUR",
  "GBP",
];

export type RatesPayload = {
  base: SupportedCurrency;
  rates: Record<SupportedCurrency, number>;
  updatedAt: string;
  source: "live" | "fallback";
};

const FALLBACK_RATES: Record<SupportedCurrency, number> = {
  GHS: 1,
  USD: 0.065,
  EUR: 0.06,
  GBP: 0.052,
};

function isSupported(code: string): code is SupportedCurrency {
  return (SUPPORTED_CURRENCIES as string[]).includes(code);
}

/**
 * Server-side fetch of live FX rates with base GHS.
 * Uses open.er-api.com (free, no API key) and Next.js's built-in fetch cache
 * (revalidated hourly). Falls back to hard-coded rates on failure.
 */
export async function fetchRates(): Promise<RatesPayload> {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/GHS", {
      next: { revalidate: 60 * 60 },
    });

    if (!res.ok) throw new Error(`Rates API returned ${res.status}`);

    const json: {
      result?: string;
      base_code?: string;
      time_last_update_utc?: string;
      rates?: Record<string, number>;
    } = await res.json();

    if (json.result !== "success" || !json.rates) {
      throw new Error("Rates API returned an unsuccessful payload");
    }

    const filtered: Partial<Record<SupportedCurrency, number>> = { GHS: 1 };
    for (const code of SUPPORTED_CURRENCIES) {
      if (code === "GHS") continue;
      const rate = json.rates[code];
      if (typeof rate === "number" && Number.isFinite(rate) && rate > 0) {
        filtered[code] = rate;
      }
    }

    const missing = SUPPORTED_CURRENCIES.filter((c) => filtered[c] == null);
    if (missing.length > 0) {
      for (const code of missing) filtered[code] = FALLBACK_RATES[code];
    }

    return {
      base: "GHS",
      rates: filtered as Record<SupportedCurrency, number>,
      updatedAt: json.time_last_update_utc ?? new Date().toISOString(),
      source: "live",
    };
  } catch {
    return {
      base: "GHS",
      rates: FALLBACK_RATES,
      updatedAt: new Date().toISOString(),
      source: "fallback",
    };
  }
}

export { isSupported, FALLBACK_RATES };
