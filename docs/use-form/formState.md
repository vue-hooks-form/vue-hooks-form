# formState

This object contains information about the entire form state. It helps you to keep on track with the user's interaction with your form application.

### Type

```ts
import type { toRefs } from 'vue'
type FormState<T> = toRefs<{
  isDirty: boolean
  dirtyFields: FieldNamesMarkedBoolean<T>
  isSubmitted: boolean
  isSubmitSuccessful: boolean
  submitCount: number
  isSubmitting: boolean
  isValidating: boolean
  isValid: boolean
  defaultValues: Partial<DefaultValues<TFieldValues>>
  errors: FieldErrors<T>
}>
```

### Usage

```vue
<script setup>
import { useForm } from '@vue-hooks-form/core'
const {
  register,
  formState: { errors },
  isExistInErrors,
} = useForm({
  mode: 'onChange'
})
</script>

<template>
  isError: {{ isExistInErrors('name') }}
  <br>
  errors: {{ errors }}
  <br>
  <input :="register('name', { required: true })">
</template>
```

### Detail

The reason that `formState` can keep reactivity is use [toRefs](https://vuejs.org/api/reactivity-utilities.html#torefs), so you can access these props by `xxx.value`

```ts
<script setup lang="ts">
  const {
    register,
    formState: { errors },
    isExistInErrors,
  } = useForm({
    mode: 'onChange'
  })
  // access with `.value`
  console.log(errors.value)
</script>
```

You may hate the way of access these props with `.value`, if so, you can use with [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform)

```vue
<script setup lang="ts">
const {
  register,
  formState: { errors },
  isExistInErrors,
} = $(useForm({
  mode: 'onChange'
}))
// no need to access with `.value`
console.log(errors)
</script>
```

## isDirty

Set to true after the user modifies any of the inputs.

### Type

```ts
const isDirty: boolean = false
```

### Usage

```vue
<script setup lang="ts">
const {
  formState,
  setValue,
} = useForm({ defaultValues: { test: '' } })
// formState.isDirty: true
setValue('test', 'change')
// formState.isDirty: false because there getValues() === defaultValues
setValue('test', '')
</script>
```

## dirtyFields

An object with the user-modified fields. Make sure to provide all inputs' defaultValues via useForm, so the library can compare against the defaultValues.

### Type

```ts
const dirtyFields: Record<string, boolean> = {}
```

### Usage

```vue
<script setup lang="ts">
const {
  formState: { dirtyFields }
} = $(useForm())
</script>
```

## defaultValues

The value which has been set at useForm's defaultValues or updated defaultValues via reset API.

### Type
```ts
const dirtyFields: Record<string, boolean> = options.defaultValues || {}
```

### Usage

```vue
<script setup>
import { useForm } from '@vue-hooks-form/core'
const {
  register,
  formState: { defaultValues },
  reset,
} = $(useForm({
  mode: 'onChange'
}))
</script>

<template>
  {{ defaultValues }}
  name: <input :="register('name', { required: true })">
  <button @click="reset({ name: 'a' })">
    reset
  </button>
</template>
```

## isSubmitted
Set to true after the form is submitted. Will remain true until the reset method is invoked.

### Type

```ts
const isSubmitted: boolean = false
```

### Usage

```vue
<script setup>
import { createSubmitHandler, useForm } from '@vue-hooks-form/core'
const {
  register,
  formState: { isSubmitted },
  handleSubmit,
  reset,
} = useForm({
  mode: 'onChange'
})
const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
</script>

<template>
  {{ isSubmitted }}
  <form @submit.prevent="handleSubmit(onSubmit)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
  <button @click="reset({})">
    reset
  </button>
</template>
```

## isSubmitSuccessful

Indicate the form was successfully submitted without any Error been thrown within the handleSubmit callback.

Will remain true until the reset method is invoked or submit failed.

### Type

```ts
const isSubmitted: boolean = false
```

### Usage

```vue
<script setup>
import { createSubmitHandler, useForm } from '@vue-hooks-form/core'
const {
  register,
  formState: { isSubmitSuccessful },
  handleSubmit,
  reset,
} = useForm({
  mode: 'onChange'
})
const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
</script>

<template>
  {{ isSubmitSuccessful }}
  <form @submit.prevent="handleSubmit(onSubmit)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
  <button @click="reset({})">
    reset
  </button>
</template>
```

## submitCount

Number of times the form was submitted.

### Type

```ts
const submitCount: number = 0
```

### Usage

```vue
<script setup>
import { createSubmitHandler, useForm } from '@vue-hooks-form/core'
const {
  register,
  formState: { submitCount },
  handleSubmit,
} = useForm({
  mode: 'onChange'
})
const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
</script>

<template>
  {{ submitCount }}
  <form @submit.prevent="handleSubmit(onSubmit)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
</template>
```

## isValid

Set to true if the form doesn't have any errors.

### Type

```ts
const isValid: boolean = false
```

### Usage

```vue
<script setup>
import { createErrorHandler, createSubmitHandler, useForm } from '@vue-hooks-form/core'
const {
  register,
  formState,
  handleSubmit,
} = useForm({
  mode: 'onChange'
})
const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
const onError = createErrorHandler((errors) => {
  alert('submit failed')
})
</script>

<template>
  {{ formState.isValid }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
</template>
```

## isValidating

Set to true during validation.

### Type

```ts
const isValidating: boolean = false
```

### Usage

```vue
<script setup>
import { createErrorHandler, createSubmitHandler, useForm } from '@vue-hooks-form/core'
const {
  register,
  formState: { isValidating },
  handleSubmit,
} = useForm({
  mode: 'onChange'
})
const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
const onError = createErrorHandler((errors) => {
  alert('submit failed')
})
async function validate() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(true), 3000)
  })
  return true
}
</script>

<template>
  {{ isValidating }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input
      :="register('name', {
        required: true,
        validate: {
          async pass() {
            await validate()
            return true
          }
        }
      })"
    >
    <button type="submit">
      submit
    </button>
  </form>
</template>
```

## errors

An object with field errors. There is also an ErrorMessage component to retrieve error message easily.

### Type

```ts
interface ErrorMessage {
  type: string
  message: string
}
const errors: Record<string, ErrorMessag> = {}
```

### Usage

```vue
<script setup>
import { createErrorHandler, createSubmitHandler, useForm } from '@vue-hooks-form/core'
const {
  register,
  formState: { errors },
  isExistInErrors,
  handleSubmit,
} = useForm({
  mode: 'onChange'
})
const onSubmit = createSubmitHandler((data) => {
  alert('submit success')
})
const onError = createErrorHandler((errors) => {
  alert('submit failed')
})
</script>

<template>
  {{ errors }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name', { required: true })">
    <button type="submit">
      submit
    </button>
  </form>
</template>
```
