import getLocal from '../src/utils/getLocal'

describe('getLocal', () => {
  test('multiple', () => {
    const acceptLanguage = 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7'
    expect(getLocal(acceptLanguage)).toBe('zh-TW')
  })
  test('single', () => {
    const acceptLanguage = 'en'
    expect(getLocal(acceptLanguage)).toBe('en')
  })
  test('empty string', () => {
    const acceptLanguage = ''
    expect(getLocal(acceptLanguage)).toBe('')
  })
  test('null', () => {
    const acceptLanguage = null
    expect(getLocal(acceptLanguage)).toBe('')
  })
  test('undefined', () => {
    const acceptLanguage = undefined as any
    expect(getLocal(acceptLanguage)).toBe('')
  })
})