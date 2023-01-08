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

```vue
<script setup lang="ts">
  type maxLength = number | { value: number; message: string };
</script>
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

```vue
<script setup lang="ts">
  type minLength = number | { value: number; message: string };
</script>
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

## max

The maximum value to accept for this input.

### Type

```vue
<script setup lang="ts">
  type max = number | { value: number; message: string };
</script>
```
### Usage

```vue
<template>
  <input
    type="number"
    :="register('count', {
      max: {
        value: 150,
        message: 'The maximum value of count is 150!'
      },
      valueAsNumber: true
    })"
  />
</template>
```

## min

The minimum value to accept for this input.

### Type

```ts
<script setup lang="ts">
  type min = number | { value: number; message: string };
</script>
```

### Usage

```vue
<template>
  <input
    type="number"
    :="register('count', {
      min: {
        value: 20,
        message: 'The minimum value of count is 150!'
      },
      valueAsNumber: true
    })"
  />
</template>
```

## pattern

The regex pattern for the input.

### Type

```vue
<script setup lang="ts">
  type pattern = RegExp | { value: RegExp; message: string };
</script>
```

### Usage

```ts
// RegExp
register('test', {
  pattern: /[A-Za-z]{3}/
})
// { value: RegExp; message: string }
register('test', {
  pattern: {
    value: /[A-Za-z]{3}/,
    message: 'The max length of test field is 3.'
  }
})
```

## disabled

Set disabled to true will disable input control.

### Type

```ts
const disabled: boolean = false
```

### Usage

```ts
register('disabled', {
  disabled: true
})
```

### Detail

The `disabled` attribute only takes effect by setting the attribute of `input/select/textarea` like `setAttribute/removeAttribute` and not updating its inputValue.

## validate

You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. This function will be executed on its own without depending on other validation rules included in the required attribute.

### Type

```ts
type ValidateFn = (val: unknown) =>
(boolean | string) | Promise<boolean | string>
type validate = ValidateFn | Record<string, ValidateFn>
```

### Usage

```ts
register('test', {
  validate: value => value === '1'
})
// object of callback functions
register('test1', {
  validate: {
    positive: v => parseInt(v) > 0,
    lessThanTen: v => parseInt(v) < 10,
    checkUrl: async () => await fetch(),
  }
})
```

## valueAsNumber

Returns a Number normally. If something goes wrong `NaN` will be returned.

### Type

```ts
const valueAsNumber: boolean = false
```
### Usage

```vue
<template>
  <input
    :="register('test', {
      valueAsNumber: true,
    })"
    type="number"
  >
</template>
```

## valueAsDate

Returns a Date object normally. If something goes wrong `Invalid Date` will be returned.

### Type

```ts
const valueAsDate: boolean = false
```
### Usage

```vue
<template>
  <input
    :="register('test', {
      valueAsDate: true,
    })"
    type="date"
  >
</template>
```

## setValueAs

Return input value by running through the function.

### Type

```vue
<script setup lang="ts">
  type SetValueAs = (value: any) => any;
</script>
```
### Usage

```ts
register('test', {
  setValueAs: v => parseInt(v)
})
```

## Examples

```vue
<script setup>
  import { useForm } from 'vue-use-form'
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      category: '',
      checkbox: [],
      radio: ''
    }
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  const onError = (errors) => {
    console.log(errors)
  }
</script>

<template>
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    <input :="register('firstName', { required: true })" placeholder="First name">
    <input :="register('lastName', { minLength: 2 })" placeholder="Last name">
    <select :="register('category')">
      <option value="">
        Select...
      </option>
      <option value="A">
        Category A
      </option>
      <option value="B">
        Category B
      </option>
    </select>
    <input :="register('checkbox')" type="checkbox" value="A">
    <input :="register('checkbox')" type="checkbox" value="B">
    <input :="register('checkbox')" type="checkbox" value="C">
    <input :="register('radio')" type="radio" value="A">
    <input :="register('radio')" type="radio" value="B">
    <input :="register('radio')" type="radio" value="C">
    <input type="submit">
  </form>
</template>
```
