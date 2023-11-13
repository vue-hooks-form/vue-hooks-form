import type { FieldErrors } from '@vue-hooks-form/core/src/types/errors'
import type { FieldValues } from '@vue-hooks-form/core/src/types/filed'
import type { Resolver } from '@vue-hooks-form/core/src/types/resolver'
import type { z } from 'zod'

type TValues<T extends FieldValues> = Record<keyof T, any>

function formatZodErrors<T extends FieldValues>(zodErrors: z.ZodError<any>) {
  const { fieldErrors } = zodErrors.flatten((issue: z.ZodIssue) => ({
    message: issue.message,
    type: issue.code,
  }))

  const errors = Object.entries(fieldErrors).reduce(
    (errors, [path, errorData]) => {
      if (!errorData?.length)
        return errors

      // only returns top level error
      const { message, type } = errorData[0]

      return {
        ...errors,
        [path]: { message, type },
      }
    },
    {} as FieldErrors<T>,
  )

  return errors
}

async function parseZodSchema<
  T extends FieldValues,
  TSchema extends z.ZodTypeAny,
>(
  schema: TSchema,
  values: TValues<T>,
  schemaOptions?: Partial<z.ParseParams>,
  options: {
    mode?: 'async' | 'sync'
    rawValues?: boolean
  } = {},
) {
  const result = await schema[
    options.mode === 'sync' ? 'safeParse' : 'safeParseAsync'
  ](values,
    schemaOptions,
  )

  return result.success
    ? {} as FieldErrors<T>
    : formatZodErrors<T>(result.error)
}

export function useZodResolver<
  T extends FieldValues,
  TSchema extends z.ZodTypeAny,
>(
  schema: TSchema,
  schemaOptions?: Partial<z.ParseParams>,
): Resolver<T> {
  return async (
    values: TValues<T>,
  ): Promise<FieldErrors<T>> => {
    return parseZodSchema(schema, values, schemaOptions)
  }
}
