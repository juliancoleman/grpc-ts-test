# gRPC NodeJS Test

A gRPC test repo that follows convention as closely as
possible. This project makes use of the `barrel` pattern
for the controllers.

## Installation

### Protobuf

MacOS

```bash
brew install protobuf clang-format
code --install-extension zxh404.vscode-proto3 --install-extension xaver.clang-format
```

Linux

```bash
PROTOC_ZIP=protoc-3.7.1-linux-x86_64.zip
curl -OL https://github.com/google/protobuf/releases/download/v3.7.1/$PROTOC_ZIP
sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
rm -f $PROTOC_ZIP
```

Goals:

- [ ] 100% TypeScript
- [ ] Simple configuration
- [ ] Convention (file and directory names, as well as gRPC best practices)

Future:

- [ ] PostgreSQL
- [ ] Knex
- [ ] ObjectionJS

Docs:

- [Protobuf v3](https://developers.google.com/protocol-buffers/docs/proto3)
- [Protobuf Styleguide](https://developers.google.com/protocol-buffers/docs/style)
- [Protobuf Techniques](https://developers.google.com/protocol-buffers/docs/techniques)
