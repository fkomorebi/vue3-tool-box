// / <reference types="vite/client" />

declare module '*.vue' {
  // eslint-disable-next-line no-shadow
  import { Component } from 'vue';
  const component: Component;
  export default component;
}
