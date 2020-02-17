describe('map', () => {
  it('should set a value with key foo and value bar', () => {
    const map = new Map()
    map.set('foo', 'bar')
    expect(map.size).toBe(1)
  })

  it('should set some value and get it', () => {
    const map = new Map()
    map.set('foo', 'bar')
    const actual = map.get('foo')
    expect(actual).toEqual('bar')
  })

  it('should tell me the size', () => {
    const map = new Map()
    map.set('foo', 'bar')
    const actual = map.get('foo')
    expect(actual).toBe(1)
  })

  it('should check that it has some value', () => {
    const map = new Map()
    map.set('foo', 'bar')
    const actual = map.get('foo')
    expect(actual).toBe(true)
  })

  it('should check that it has some value after deleting a value', () => {
    const map = new Map()
    map.set('foo', 'bar')
    map.delete('foo')
    const actual = map.get('foo')
    expect(actual).toBeUndefined()
  })

  it('should delete all values', () => {
    const map = new Map()
    map.set('foo', 'bar')
    map.set('bar', 'baz')
    map.clear()
    expect(map.size).toBe(0)
  })

  it('should execute a callback for each value', () => {
    const map = new Map()
    const mock = jest.fn()
    map.set('foo', 'bar')
    map.set('foo2', 'bar2')
    expect(map.forEach(mock)).toBeCalledTimes(2)
  })

  it('should be iterated with a for loop', () => {})
})
