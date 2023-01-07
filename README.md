<div align="center">
  <img src="./public/logo.svg" wigth='100px' height='100px' />
</div>

<h1 align="center">
  vue-hooks-form
</h1>

 <p align="center">
Inspired by <a href="https://github.com/react-hook-form/react-hook-form">react-hook-form</a>, if you love react-hook-form usage, come on and try it!
<p>

<p align="center">
  <a href="https://www.npmjs.com/package/@vue-hooks-form/core"><img src="https://img.shields.io/npm/v/@vue-hooks-form/core?color=43B36B&label="></a>
<p>

<br>
<br>

## Features

- Type Strong: Written in TypeScript
- No Component: No need to import any components to use, you can use it in all UI framework
- Easy to use: Just 2 main hooks: useForm, useFieldArray

```vue
<script setup lang="ts">
import { useForm } from '@vue-hooks-form/core'
interface Inputs {
  username: string
}
const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm<Inputs>()
</script>

<template>
  errors: {{ errors }}
  <form @submit.prevent="handleSubmit()()">
    <input
      :="register('username', {
        required: 'username field cannot be empty!'
      })"
    >
    <button type="submit">
      submit
    </button>
  </form>
</template>
```

## License

[MIT](./LICENSE) License © 2022-Present [Elone Hoo](https://github.com/elonehoo)
