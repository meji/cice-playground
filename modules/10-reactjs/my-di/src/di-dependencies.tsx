import {injectable} from "inversify";

@injectable()
export class Greeter {
  hello(): string {
    return 'Hola'
  }
}
@injectable()
export class PersonalAssistant {
  constructor(private readonly greeter: Greeter) {}
  morningRoutine(name: string) {
    return `${this.greeter.hello()} Mr|Ms ${name}`
  }
}
