import * as Bluebird from 'bluebird';
import {ServerUnaryCall} from 'grpc';

type AsyncFn = (call: ServerUnaryCall<any>) => Promise<any['AsObject']>;

export default function invoke(asyncFn: AsyncFn) {
  const promiseFn = Bluebird.method(asyncFn);

  return function(call: ServerUnaryCall<any>, callback) {
    promiseFn(call).asCallback(callback);
  }
}
