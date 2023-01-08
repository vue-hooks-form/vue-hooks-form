# setError

The function allows you to manually set one or more errors.

## Type

```ts
export interface FieldError {
  type: string
  message?: string
}
export type UseFormSetError<FieldName> = (
  name: FieldName,
  error: FieldError,
  config?: { shouldFocusError: boolean }
) => void
```

## Props

- name **`:string`** inputs's name

- error **`:FieldError`** Set an error with its type and message.

- config **`:{ shouldFocusError: boolean } = { shouldFocusError: true }`** Should focus the input during setting an error. This only works when the input's reference is registered.

## Usage

```ts
setError(
  'registerInput',
  { type: 'custom', message: 'custom message' },
  { shouldFocusError: true }
)
```

## Detail

- shouldFocus doesn't work when an input has been disabled.

- Can be useful in the handleSubmit method when you want to give error feedback to a user after async validation. (ex: API returns validation errors)

- This method will force set isValid formState to false, however, it's important to aware isValid will always be derived by the validation result from your input registration rules or schema result.
