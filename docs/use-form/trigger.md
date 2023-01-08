# trigger

Manually triggers form or input validation.

## Type

```ts
type trigger = (name?: string | string[]) => Promise<boolean>
```

## Props

### name

- `undefined` Triggers validation on all fields.

- `string` 	Triggers validation on a specific field value by name

- `string[]` 	Triggers validation on multiple fields by name.

### shouldFocus: `boolean` (default: `false`)

Should focus the input during setting an error. This only works when the input's reference is registered, it will not work for custom register as well.

```ts
trigger('name', { shouldFocus: true })
```
