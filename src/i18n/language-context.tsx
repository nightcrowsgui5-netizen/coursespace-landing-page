import React, { createContext, useContext, useEffect, useState, FC, ReactNode } from 'react'
import { Lang, Translation, translations, defaultLang } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'ma-lang'

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(defaultLang)

  // Recupera o idioma salvo (padrão: português)
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (window.localStorage.getItem(STORAGE_KEY) as Lang | null) : null
    if (stored && (stored === 'pt' || stored === 'en')) {
      setLangState(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider')
  }
  return ctx
}
