import { YesNoHttpRepository } from './yes-no-http-repository'
import { Http } from './http'
import { instance, mock, when } from 'ts-mockito'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
describe('YesNoHttpRepository', () => {
  it('should make a get request', async () => {
    const http: Http = mock(Http)
    const yesNoDtoToYesNoMapper: YesNoDtoToYesNoMapper = mock(YesNoDtoToYesNoMapper)
    const yesNoHttpRepository = new YesNoHttpRepository(
      instance(http),
      instance(yesNoDtoToYesNoMapper)
    )
    await yesNoHttpRepository.find()
  })
})

