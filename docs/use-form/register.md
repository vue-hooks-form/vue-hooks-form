# register

This method allows you to register **field** and **ref** to bind components for apply validation rules of vue-hooks-form.

### Type

```ts
type RegisterFn<T extends FiledValues, V = T[typeof name]> =
(name: keyof T, options: RegisterOptions<T>) => {
  [options.vModelBinding]: V
  [`onUpdate:${options.vModelBinding}`]: (input: V) => void
  value?: V
  onInput?: (e: InputEvent) => void
}
```

### Usage

```vue
<script setup lang="ts">
import { useForm } from 'vue-use-form'
const {
  register,
  formState: { errors }
} = useForm<{ username: number }>()
</script>
<template>
  <input :="register('username')">
</template>
```

### Details

`<input :="register()" />` is equal to `<input v-bind="register()"/>`

```html
<input :="register('username')">
<input v-bind="register('username')">
```

## required

A Boolean which, if true, indicates that the input must have a value before the form can be submitted. You can assign a string to return an error message in the errors object.

### Type

```ts
type Required = string | boolean
```

### Usage

```vue
<input :="register('username', { required: true })"/>
```

## maxLength

### Type

```ts
type maxLength = number | { value: number; message: string }
```

### Usage

```ts
register('username', {
  maxLength: 20
})
register('username', {
  maxLength: {
    value: 20,
    message: 'The maximum length of username is 20!'
  }
})
```

## minLength

The minimum length of the value to accept for this input.

### Type

```ts
type minLength = number | { value: number; message: string }
```

### Usage

```ts
register('username', {
  minLength: {
    value: 3,
    message: 'The minimumlength of username is 3!'
  }
})
```

