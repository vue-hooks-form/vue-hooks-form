# reset

Reset the entire form state, fields reference, and subscriptions. There are optional arguments and will allow partial form state reset.

## Type

```ts
export type KeepStateOptions = Partial<{
  keepDirtyValues: boolean
  keepErrors: boolean
  keepDirty: boolean
  keepValues: boolean
  keepDefaultValues: boolean
  keepIsSubmitted: boolean
  keepIsValid: boolean
  keepSubmitCount: boolean
}>
type ResetFn<T> = <T>(
  values?: T | ResetAction<T>,
  options?: KeepStateOptions
) => void
```

## Props

Reset has the ability to retain formState. Here are the options you may use:

- keepDirtyValues **`= false`**

DirtyFields and isDirty will remained

- keepErrors **`= false`**

All errors will remain. This will not guarantee with further user actions.

- keepDirty **`= false`**

DirtyFields form state will remain, and isDirty will temporarily remain as the current state until further user's action.

- keepValues **`= false`**

Form input values will be unchanged.

- keepDefaultValues **`= false`**

Keep the same defaultValues which are initialized via useForm.
