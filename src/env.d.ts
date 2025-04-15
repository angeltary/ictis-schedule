/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    API_URL: string
    YANDEX_METRIKA_ID: string
  }
}
