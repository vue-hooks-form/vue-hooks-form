# unregister

This method allows you to unregister a single input or an array of inputs. It also provides a second optional argument to keep state after unregistering an input.

### Type

```ts
interface Options {
  keepDirty?: boolean
  keepError?: boolean
  keepValue?: boolean
}
type UnregisterFn = (name: string, options?: Options)
```

### Usage

```ts
const { unregister } = useForm()
unregister('name', {
  keepDirty: true,
  keepError: true,
  keepValue: true
})
```

## KeepDirty

If set to true, isDirty and dirtyFields will be remained during this action.

### Type

```ts
const keepDirty: boolean = false
```

### Usage

```vue
<template>
  <input :="register('test', { keepDirty: true })" />
</template>
```

## keepError

If set to true, errors will not be updated.

### Type

```ts
const keepError: boolean = false
```
### Usage

```vue
<template>
  <input :="register('test', { keepError: true })" />
</template>
```

## keepValue

If set to true, **field's** current value will not be updated.

### Type

```ts
const keepValue: boolean = false
```

### Usage

```vue
<template>
  <input :="register('test', { keepValue: true })" />
</template>
```
