import type { UseFormProps } from './types/form'
import type { FieldValues } from './types/filed'

import { createFormControl } from './logic/createFormControl'

export function useForm<TFieldValues extends FieldValues = FieldValues>(
  props: Partial<UseFormProps<TFieldValues>> = {},
) {
  props = {
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {} as UseFormProps<TFieldValues>['defaultValues'],
    criteriaMode: 'firstError',
    shouldFocusError: true,
    delayError: 0,
    ...props,
  }
  return {
    ...createFormControl<TFieldValues>(props as UseFormProps<TFieldValues>),
  }
}
