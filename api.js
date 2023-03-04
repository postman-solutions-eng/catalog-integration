const baseUrl = 'https://api.getpostman.com'
const shortLink = 'https://go.postman.co'

async function getSchema (url) {
  return await $.get(url)
}

async function getWorkspaces () {
  return await $.get({
    url: `${baseUrl}/workspaces`,
    headers: { 'x-api-key': globals.key }
  })
}

async function createPostmanAssets (workspaceId) {
  const collection = await $.post({
    url: `${baseUrl}/import/openapi?workspace=${workspaceId}`,
    data: { type: 'string', input: globals.schema },
    headers: { 'x-api-key': globals.key }
  })

  const collectionDetails = collection.collections[0]
  
  const mock = await $.post({
    url: `${baseUrl}/mocks?workspace=${workspaceId}`,
    data: {
      mock: {
        collection: collectionDetails.uid,
        name: collectionDetails.name
      }
    },
    headers: { 'x-api-key': globals.key }
  })

  return {
    workspace: `${shortLink}/workspace/${workspaceId}`,
    collection: `${shortLink}/collection/${collectionDetails.uid}`,
    mock: `${shortLink}/mock/${mock.mock.id}`,
    mockServer: mock.mock.mockUrl
  }
}