export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["Unlimited phones connected", "All features", "Technical support"],
  },
  {
    id: "monthly",
    name: "Monthly",
    description:
      "The best way to start using TikMatrix",
    price: "$99",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RI4aXQLZvKf8wYRU7f89GeV",
    stripe_product_id: "prod_SCTXOaqqs8MhIc",
    features: [
      "Unlimited phones connected",
      "All features",
      "Technical support",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    description:
      "The most cost-effective way to use TikMatrix",
    price: "$599",
    priceIntervalName: "per year",
    stripe_price_id: "price_1RI3XLQLZvKf8wYR25QBIlsr",
    stripe_product_id: "prod_SCSSLKMJuEkJNk",
    features: [
      "Everything in Monthly",
      "50% off",
    ],
  },
]
