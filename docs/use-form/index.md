# useForm

useForm is a custom hook for managing forms with ease. It takes one object as optional argument.

```ts
declare function useForm<TFieldValues extends FieldValues = FieldValues>(
  props?: Partial<UseFormProps<TFieldValues>>
): UseFormReturn<TFieldValues>
```

## Options
```ts
interface UseFormProps<TFieldValues extends object> {
  mode: Mode
  reValidateMode: Exclude<Mode, 'onTouched' | 'all'>
  defaultValues: DefaultValues<TFieldValues>
  resolver: Resolver<TFieldValues>
  shouldFocusError: boolean
  criteriaMode: CriteriaMode
  delayError: number
}
```

## mode
It decide when to trigger validate for

### Type
```ts
type Mode = 'onSubmit' | 'onBlur' | 'onChange' | 'onTouched' | 'all'
```

### Details

- **onSubmit**: Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.

- **onBlur**: Validation will trigger on the blur event.

- **onChange**: Validation will trigger on the change event with each input, and lead to multiple re-renders. Warning: this often comes with a significant impact on performance.

- **onTouched**: Validation will trigger on the first blur event. After that, it will trigger on every change event.

- **all**: Validation will trigger on the blur and change events.

::: warning
In some UI framework, they may not provide `dom` in the instance which get from `ref`, so i recommend you to use `onChange` | `all`
:::

## reValidateMode

This option allows you to configure validation strategy when inputs with errors get re-validated after a user submits the form (onSubmit event). By default, validation is triggered during the input change event.

### Type
```ts
const reValidateMode: 'onSubmit' | 'onBlur' | 'onChange' = 'onSubmit'
```

## defaultValues

The defaultValues for inputs are used as the initial value when a component is first rendered, before a user interacts with it. It is encouraged that you set defaultValues for all inputs to non-undefined values such as the empty string or null.

### Type

```ts
const defaultValues: Record<string, any> = {}
```

### Usage

```vue
<script setup lang="ts">
interface Inputs {
  username: string
}
const {
  register
} = useForm<Inputs>({
  defaultValues: {
    username: 'Alice'
  }
})
</script>

<template>
  <input :="register('username')">
</template>
```

## shouldFocusError

When set to true (default) and the user submits a form that fails the validation, it will **try to** set focus on the first field with an error.

### try to

::: tip
In some UI framework, they may not provide `dom` in the instance which get from `ref`, therefore, for some UI components framework, it may not be able to focus correctly
:::

### Type

```ts
const shouldFocusError = true
```

## criteriaMode

- When set to firstError (default), only the first error from each field will be gathered.

- When set to all, all errors from each field will be gathered.

::: tip
If you use [resolver](#resolver), this will not take effect.
:::

### Type

```ts
const criteriaMode: 'all' | 'firstError' = 'firstError'
```

## resolver

This function allows you to use any external validation library such as [yup](https://github.com/jquense/yup), [class-validator](https://github.com/typestack/class-validator)

### example

```vue
<script lang="ts" setup>
import { useForm } from '@vue-hook-form/core'
import * as yup from 'yup'
import { useYupResolver } from '@vue-hook-form/yup'
const schema = yup.object().shape({
  username: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
})
const {
  register,
  formState: { errors },
} = useForm<{
  username: string
  email: string
  age: number
}>({
  resolver: useYupResolver(schema),
})
</script>

<template>
  <input :="register('username')">
  <input :="register('email')">
  <input :="register('age')">
</template>
```

## delayError

This config will delay the error state to be displayed to the end-user in milliseconds. Correct the error input will remove the error instantly and delay will not be applied.

### Type

```ts
const delayError: number = 0
```
