import * as grpc from "grpc";

import {
  ByeReply,
  ByeRequest,
  HelloReply,
  HelloRequest
} from "../../generated/greetings_pb";

export const sayHello = async (
  call: grpc.ServerUnaryCall<HelloRequest.AsObject>
): Promise<HelloReply.AsObject> => ({ message: `Hello, ${call.request.name}` });

export const sayBye = async (
  call: grpc.ServerUnaryCall<ByeRequest.AsObject>
): Promise<ByeReply.AsObject> => ({ message: `Bye, ${call.request.name}` });
