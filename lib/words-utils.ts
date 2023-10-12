export const words = ["own", "custom", "PRO"] as const;

export type WordsT = (typeof words)[number];
