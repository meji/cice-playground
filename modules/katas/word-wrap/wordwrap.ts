export class Wordwrap {
  wrapper(phrase: string, width: number) {
    return phrase
      .split('')
      .reduce((acc: any[], actualItem, index) => {
        if (index % width === 0 && actualItem === ' ') {
          acc.push('\n')
        } else {
          acc.push(actualItem)
        }
        return acc
      }, [])
      .join('')
  }
}
