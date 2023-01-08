# setValue

This function allows you to dynamically set the value of a registered field and have the options to validate and update the form state.

## Type

```ts
type setValue = (name: string, value: unknown, config?: Object) => void
```

## Props

- **name**: `string`

Target a single field by name.

```ts
// will directly update input value
setValue('array.0.test1', '1')
setValue('array.0.test2', '2')
```

- **value** `unknown` The value for the field. This argument is required and can not be undefined.

- **options** `Object`

  - **shouldValidate** `boolean` (default: `false`)

    - `true`: will trigger validation for the field and update the form state with the result.

    - `false`: will not trigger validation for the field and update the form state with the result.

  - **shouldDirty** `boolean` (default: `false`)

    - `true`: will mark the field as dirty.

    - `false`: will not mark the field as dirty.
