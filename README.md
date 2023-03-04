# Catalog Integration

This repo is intended to show how the Postman API can be integrated into a pre-existing API catalog.

This is intended to be as lightweight example as possible that isn't opinionated on any specific type of implementation.

# Main goals of this integration

When adding an API to your catalog in the form of an API definition:

- create the API in Postman
- add it to Postman's catalog (Private API Network)
- spin up or use an existing Postman Workspace for this API
- create a mock server that reflects the provided API definition

# Understanding how it works

3 endpoints from the Postman API are used to enable this experience:

- [Get all workspaces](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-f027a0fa-9012-4654-a65d-2b751a3154a9)
- [Import an OpenAPI definition](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-346e9bad-5d56-47db-9f4d-ba4ff8231e38)
- [Create a mock server](https://www.postman.com/postman/workspace/postman-public-workspace/request/12959542-296628ed-d49b-4206-b4a7-d622e693945c)

This can be seen in more detail in [api.js](https://github.com/postman-solutions-eng/catalog-integration/blob/main/api.js)

# Example

You can see this repo in practice via the GitHub pages link below:

https://postman-solutions-eng.github.io/catalog-integration/
