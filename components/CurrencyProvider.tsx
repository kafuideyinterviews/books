"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type {
  RatesPayload,
  SupportedCurrency,
} from "@/lib/rates";
import { SUPPORTED_CURRENCIES } from "@/lib/rates";

type CurrencyContextValue = {
  currency: SupportedCurrency;
  setCurrency: (c: SupportedCurrency) => void;
  rates: Record<SupportedCurrency, number>;
  updatedAt: string;
  source: "live" | "fallback";
  supported: SupportedCurrency[];
  convertFromGhs: (amountGhs: number) => number;
  format: (amountGhs: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

const STORAGE_KEY = "kdb.currency";

function isSupportedCode(code: string): code is SupportedCurrency {
  return (SUPPORTED_CURRENCIES as string[]).includes(code);
}

function formatAmount(
  amount: number,
  currency: SupportedCurrency
): string {
  if (currency === "GHS") {
    const n = new Intl.NumberFormat("en-GH", {
      maximumFractionDigits: 0,
    }).format(amount);
    return `GH₵ ${n}`;
  }
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

export function formatGhsNumber(amount: number): string {
  return new Intl.NumberFormat("en-GH", {
    maximumFractionDigits: 0,
  }).format(amount);
}

export function CurrencyProvider({
  initialRates,
  children,
}: {
  initialRates: RatesPayload;
  children: React.ReactNode;
}) {
  const [currency, setCurrencyState] = useState<SupportedCurrency>("GHS");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isSupportedCode(stored)) {
      setCurrencyState(stored);
    }
  }, []);

  const setCurrency = useCallback((c: SupportedCurrency) => {
    setCurrencyState(c);
    try {
      window.localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* ignore quota errors */
    }
  }, []);

  const convertFromGhs = useCallback(
    (amountGhs: number) => {
      const rate = initialRates.rates[currency] ?? 1;
      return amountGhs * rate;
    },
    [currency, initialRates.rates]
  );

  const format = useCallback(
    (amountGhs: number) => {
      const converted = convertFromGhs(amountGhs);
      return formatAmount(converted, currency);
    },
    [convertFromGhs, currency]
  );

  const value = useMemo<CurrencyContextValue>(
    () => ({
      currency,
      setCurrency,
      rates: initialRates.rates,
      updatedAt: initialRates.updatedAt,
      source: initialRates.source,
      supported: SUPPORTED_CURRENCIES,
      convertFromGhs,
      format,
    }),
    [currency, setCurrency, initialRates, convertFromGhs, format]
  );

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used inside <CurrencyProvider>");
  }
  return ctx;
}
