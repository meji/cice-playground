import {inject, injectable} from 'inversify'
import {Greeter, PersonalAssistant} from './di-dependencies'

@injectable()
export class Service{
  protected Greet: Greeter;
  protected Perso: PersonalAssistant;

  constructor(
    @inject(Greeter) greeter: Greeter,
    @inject(PersonalAssistant) personalAssistant: PersonalAssistant,
  ){
    this.Greet = greeter;
    this.Perso = personalAssistant;
  }

  public assist(name: string):string {
    return this.Perso.morningRoutine(name);
  }

}
