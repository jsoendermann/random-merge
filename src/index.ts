export default function* <T>(arrays: T[][]): IterableIterator<T> {
  const arraysCopy = arrays
    .filter(array => array.length > 0)
    .map(array => [...array])

  while (arraysCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * arraysCopy.length)
    const element = arraysCopy[randomIndex].shift()!
    if (arraysCopy[randomIndex].length === 0) {
      arraysCopy.splice(randomIndex, 1)
    }
    yield element
  }
}
