export class BeerSong {
  verse(number: number): string {
    switch (number) {
      case 0:
        return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
      case 1:
        return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
      default:
        return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number -
          1} bottle${number !== 2 ? 's ' : ' '}of beer on the wall.\n`
    }
  }

  sing(verso1: number, verso2: number = 0): string {
    let versoFinal: string = ''
    for (let i = verso1; i >= verso2; i--) {
      const saltoLinea: string = i === verso2 ? '' : '\n'
      versoFinal = versoFinal + this.verse(i) + saltoLinea
    }
    return versoFinal
  }
}
