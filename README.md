# React + TypeScript + Vite

# Projeto com Estrutura para ReactJS apps

## Estrutura de pastas

`assets`: Serve para armazenar imagens (imagens leves, se forem pesadas sempre prefira hospedar em uma CDN), ícones, etc.

`components`: Componentes reutilizáveis da aplicação. Componentes que são unidades para sua aplicação, um button, um dropdown, um modal, etc.

`hooks`: Essa pasta é utilizada para armazenar hooks que são genéricos, têm interação com hooks do React (useState, useEffect) e normalmente reutilizáveis e qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive.

`pages`: As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver.

`services`: Aqui ficam as configurações de HTTP clientes, normalmente utilizando axios.

`store`: Ficam as definições de state managers, context api, zustand, redux.

`types`: Armazena as tipagens de typescript (types e interfaces) que são comuns em várias áreas do projeto.

`utils`: Funções utilitárias como formatCurrency, formatPhone, convertTimezone, parsePhone (javascript puro).

## Implementação de teste "Vitest"
> " package.json "
```
  "scripts": {
    "test": "vitest"
  }
```

```  
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.2",
    "@testing-library/react": "^15.0.4",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.12",
    "jsdom": "^24.0.0",
    "vitest": "^1.5.1"
  }
}
```

> " home.test.tsx "

```
// react testing library

import { render, screen } from '@testing-library/react';
import Home from './Home';

describe("<Home />", () => {
    it("Renderizou o título", () => {
        render(<Home />);

        expect(screen.getByText("Home")).toBeInTheDocument();
    });
});
```

> " vite.config.ts "

```
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals:true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css:true,
  },
});
```

> " setup.ts "

```
import "@testing-library/jest-dom";
```






