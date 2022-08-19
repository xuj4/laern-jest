import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../controller/app.controller';
import { AppService } from './app.service';
describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('App Service', () => {
    /**
     * This is an example test
     */
    test('should return Hello World!', () => {
      expect(appService.getHello()).toEqual('Hello World!');
    });


    /**
     * getAsyncRequest function has been implemented, please write a test for it
     *
     * Hint: You can use spyon of jest or mock if you prefer
     *
     * https://jestjs.io/docs/jest-object
     */
    test('implement me', () => {
      expect(1).toEqual(2);
    });
  });
});
