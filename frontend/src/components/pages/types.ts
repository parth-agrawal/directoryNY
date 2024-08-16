const default_values: [string, string, string] = [
  "Any lease",
  "Any count",
  "Any timeline",
];

export enum LeaseLength {
  OneYear = "1-year lease",
  ShortTerm = "Short-term lease",
}

export enum RoommateCount {
  onetwo = "1-2 housemates",
  threefive = "3-5 housemates",
  sixtwelve = "6-12 housemates",
  twelveplus = "12+ housemates",
}

export enum MovingTimeline {
  ASAP = "ASAP",
  lessthan3 = "<3 months",
  threeplus = "3+ months",
}
