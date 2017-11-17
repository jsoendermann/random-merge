import randomMerge from '.'

describe('random-merge', () => {
  test('handles empty array', () => {
    const res = Array.from(randomMerge([]))
    expect(res).toEqual([])
  })

  test('handles array of empty arrays', () => {
    const res = Array.from(randomMerge([[], []]))
    expect(res).toEqual([])
  })

  test('handles single array', () => {
    const res = Array.from(randomMerge([[1, 2, 3]]))
    expect(res).toEqual([1, 2, 3])
  })

  test('merges correctly', () => {
    const a = Array.from({ length: 3 }).map((_, i) => `a${i}`)
    const b = Array.from({ length: 3 }).map((_, i) => `b${i}`)
    const res = Array.from(randomMerge([a, b]))
    const filteredA = res.filter(e => e[0] === 'a')
    expect(filteredA).toEqual(a)
    const filteredB = res.filter(e => e[0] === 'b')
    expect(filteredB).toEqual(b)
  })
})
