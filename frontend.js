const $ = window.jQuery
const globals = {}

$('.schema-url').change(async function () {
  const url = $(this).val()
  const schema = await getSchema(url)
  globals.schema = schema

  $('.get-schema').addClass('d-none')
  $('.schema-loaded').removeClass('d-none')
})

$('.postman-api-key').change(async function () {
  globals.key = $(this).val()

  const workspaces = await getWorkspaces()
  const workspaceNames = workspaces.workspaces.map(item => `<option value="${item.id}">${item.name}</option>`)

  $('.workspace-picker').html(workspaceNames)
  $('.get-api-key').addClass('d-none')
  $('.select-workspace').removeClass('d-none')
})

$('.workspace-picker').change(async function() {
  const workspaceId = $(this).val()
  const links = await createPostmanAssets(workspaceId)

  $('.select-workspace').addClass('d-none')
  $('.final-details').html(`
    <h2>Workspace Link</h2>
    <p><a href="${links.workspace}">${links.workspace}</a></p>
    <h2>Collection Link</h2>
    <p><a href="${links.collection}">${links.collection}</a></p>
    <h2>Mock Link</h2>
    <p><a href="${links.mock}">${links.mock}</a></p>
    <h2>Mock Server URL</h2>
    <p><a href="${links.mockServer}">${links.mockServer}</a></p>
  `)
})