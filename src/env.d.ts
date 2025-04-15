/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    NEXT_PUBLIC_YANDEX_METRIKA_ID: string
    NEXT_PUBLIC_API_URL: string
  }
}
