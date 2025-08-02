export const i18nConfig = {
  defaultLocale: 'ja',
  locales: ['ja', 'en'] as const,
} as const

export type Locale = (typeof i18nConfig.locales)[number]