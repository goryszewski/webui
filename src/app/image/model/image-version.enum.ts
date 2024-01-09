export const IMAGE_VERSION = {
  LATEST: 'LATEST',
  DEPRECATED: 'DEPRECATED',
  ALPHA: 'APLHA',
  BETA: 'BETA',
} as const;

export type ImageVersion = keyof typeof IMAGE_VERSION;
