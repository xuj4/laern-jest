import { Injectable } from '@nestjs/common';
import { haveFun } from '../repository/fun';

@Injectable()
export class AppService {
  getHello = (): string => 'Hello World!';

  getAsyncRequest = async () => {
    try {
      const mood = await haveFun();
      return mood ?? 'unhappy';
    } catch (error) {
      return 'I do not want to tell you.';
    }
  };
}
