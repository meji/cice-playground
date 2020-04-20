import {Greeter, PersonalAssistant} from './di-dependencies'
import {Container, injectable} from 'inversify'


const DIContainer = new Container()
DIContainer.bind<Greeter>(Greeter).toSelf();
DIContainer.bind<PersonalAssistant>(PersonalAssistant).toSelf();

export default DIContainer





