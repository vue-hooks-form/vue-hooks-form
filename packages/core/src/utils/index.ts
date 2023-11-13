export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export const isNumber = (val: unknown): val is number => typeof val === 'number' && !isNaN(val)

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export function isObject(val: unknown) {
  return val !== null && typeof val === 'object'
}

export const isArray = (val: unknown): val is Array<unknown> => Array.isArray(val)

export function isEmptyObject(val: unknown) {
  return isObject(val) && Object.keys(val as object).length === 0
}

export const isUndefined = (val: unknown): val is undefined => typeof val === 'undefined'

export const isNull = (val: unknown): val is null => val === null

export function isNullOrUndefined(val: unknown) {
  return isNull(val) || isUndefined(val)
}

export const isHTMLElement = (val: unknown): val is HTMLElement => val instanceof HTMLElement

export const isEmpty = (val: unknown) => val === '' || val === null || val === undefined

export const isRegex = (val: unknown): val is RegExp => val instanceof RegExp

export const isObjectType = (val: unknown) => typeof val === 'object'

export function isPrimitive(val: unknown) {
  return isNullOrUndefined(val) || !isObjectType(val)
}

export const isDateObject = (val: unknown): val is Date => val instanceof Date

export * from './createHandler'
export * from './object'
