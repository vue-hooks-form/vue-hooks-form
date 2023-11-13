import type { FieldElement } from '../types/filed'

export const isRadioInput = (el?: FieldElement): el is HTMLInputElement => el?.type === 'radio'

export const isCheckBoxInput = (el?: FieldElement): el is HTMLInputElement => el?.type === 'checkbox'

export function isRadioOrCheckboxInput(el?: FieldElement): el is HTMLInputElement {
  return isRadioInput(el) || isCheckBoxInput(el)
}
