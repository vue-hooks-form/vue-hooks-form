# getFieldState

this function will return the state of a field.

## Type

```ts
type getFieldState = (name: string) => {
  isDirty: boolean
  isValid: boolean
  error: object
}
```

## Props

**name** `string`

A field name to read from the form state.

```ts
register('test', { required: true })
setValue('test', 1)
getFieldState('test') // { isDirty: true, isValid: true, error: {} }
```
