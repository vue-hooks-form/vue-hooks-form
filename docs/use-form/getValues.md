# getValues

An optimized helper for reading form values.

## Type

```ts
type getValues = (payload?: string | string[]) => Object
```

## Props

**payload** `string | string[]`

A field name or an array of field names to read from the form values.

```ts
getValues('test')
getValues(['test1', 'test2'])
```

## Example
```ts
register('root.test1')
register('root.test2')
getValues('root')	 // { test1: '', test2: ''}
```

