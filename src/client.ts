import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";

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

function handler(err: Error, response: any) {
  if (err) {
    throw err;
  }

  console.log("Greeting:", response.message);
}

function main() {
  const client = new greetings_proto.Greeter(
    `localhost:${PORT}`,
    grpc.credentials.createInsecure()
  );

  let name;

  if (process.argv.length >= 3) {
    name = process.argv[2];
  } else {
    name = "World";
  }

  client.sayHello({ name }, handler);
  client.sayBye({ name }, handler);
}

main();
