export default {
  en: {
    currencyFormat: {
      style: "currency",
      currency: "USD",
    },
  },
  de: {
    currencyFormat: {
      style: "currency",
      currency: "EUR",
    },
  },
  sv: {
    currencyFormat: {
      style: "currency",
      currency: "SEK",
    },
  },
} as Record<string, Record<string, { style: string; currency: string }>>;
