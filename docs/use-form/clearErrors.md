# clearErrors

This function can manually clear errors in the form.

## Type

```ts
export type UseFormClearErrors = (
  name?: string | string[]
) => void
```

## Props

| Type        |      Description     |  Example |
| ------------- | :-----------: | ----: |
| `undefined`      | Remove all errors. | 	`clearErrors()` |
| `string`     |  	Remove single error.   |   `clearErrors("yourDetails.firstName")` |
| `string[]` |   Remove multiple errors.    |   `clearErrors(["yourDetails.lastName"])` |

## Usage

```ts
register('test.firstName', { required: true })
register('test.lastName', { required: true })
clearErrors('test') // will clear both errors from test.firstName and test.lastName
clearErrors('test.firstName') // for clear single input error
```
