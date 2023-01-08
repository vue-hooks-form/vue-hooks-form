# handleSubmit

This function will receive the form data if form validation is successful.

## Type

```ts
type HandleSubmitFn = (
  (data: Object, e?: Event) => void,
  (errors: Object, e?: Event) => void
) => Function
```

### Props

### SubmitHandler
A successful callback
```ts
type SubmitHandler = (data: Object, e?: Event) => void
```

### SubmitErrorHandler

An error callback.

```ts
type SubmitErrorHandler = (errors: Object, e?: Event) => void
```

## Usage
```vue
<script setup>
  import { createErrorHandler, createSubmitHandler, useForm } from '@vue-hooks-form/core'
  const {
    register,
    handleSubmit,
  } = useForm({
    mode: 'onChange'
  })
  const onSubmit = createSubmitHandler((data) => {
    console.log(data)
  })
  const onError = createErrorHandler((errors) => {
    console.log(errors)
  })
</script>
<template>
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
</template>
```

## Detail

You can easily submit form asynchronously with handleSubmit.

```ts
handleSubmit(async data => await fetchAPI(data))()
```
