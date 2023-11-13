# Getting Started

vue-use-form is a composition api form validator for vue, which is inspired by [react-hook-form](https://react-hook-form.com/)

## Installation

```bash
npm i @vue-hooks-form/core
```

## Usage Example

for example, if you want to proxy a form component state in `react-hook-form`, you just need to write these code simply

Assumed we have an interface
```ts
interface Inputs {
  firstname: string
}
```

In `react-hook-form`
```tsx
import { useForm } from 'react-hook-form'
function App() {
  const { register } = useForm<Inputs>()
  return (
    <input {...register('firstName')} />
  )
}
```

In `vue-hooks-form`,

```vue
<script setup lang="ts">
import { useForm } from 'vue-use-form'
const { register } = useForm<Inputs>()
</script>

<template>
  <input :="register('firstname')">
</template>
```
