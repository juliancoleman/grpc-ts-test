import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";

import { sayBye, sayHello } from "./controllers";
import invoke from "./helpers/invoke";

/**
 * The `PROTO_PATH` should always point to a single
 * protobuf file. This will serve as the entrypoint for all
 * other service definitions.
 */
const PROTO_PATH = `${__dirname}/protos/greetings.proto`;
const opts: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, opts);
const greetings_proto = grpc.loadPackageDefinition(packageDefinition).greeter;

const PORT = 50051;

function main() {
  const server = new grpc.Server();

  server.addService(greetings_proto.Greeter.service, {
    sayHello: invoke(sayHello),
    sayBye: invoke(sayBye)
  });
  server.bind(`localhost:${PORT}`, grpc.ServerCredentials.createInsecure());
  server.start();

  console.warn(`Server listening on ${PORT}`);
}

main();
