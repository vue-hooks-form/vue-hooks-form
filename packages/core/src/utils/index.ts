export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number' && !Number.isNaN(val)
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isObject(val: unknown) {
  return val !== null && typeof val === 'object'
}

export function isArray(val: unknown): val is Array<unknown> {
  return Array.isArray(val)
}

export function isEmptyObject(val: unknown) {
  return isObject(val) && Object.keys(val as object).length === 0
}

export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined'
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isNullOrUndefined(val: unknown) {
  return isNull(val) || isUndefined(val)
}

export function isHTMLElement(val: unknown): val is HTMLElement {
  return val instanceof HTMLElement
}

export function isEmpty(val: unknown) {
  return val === '' || val === null || val === undefined
}

export function isRegex(val: unknown): val is RegExp {
  return val instanceof RegExp
}

export function isObjectType(val: unknown) {
  return typeof val === 'object'
}

export function isPrimitive(val: unknown) {
  return isNullOrUndefined(val) || !isObjectType(val)
}

export function isDateObject(val: unknown): val is Date {
  return val instanceof Date
}

export * from './createHandler'
