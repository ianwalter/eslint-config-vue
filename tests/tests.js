const { test } = require('@ianwalter/bff')
const { CLIEngine } = require('eslint')

test('pass', ({ expect }) => {
  const cli = new CLIEngine()
  const { results: [pass] } = cli.executeOnFiles(['tests/fixtures/pass.vue'])
  expect(pass.errorCount).toBe(0)
  expect(pass.warningCount).toBe(0)
})

test('fail', ({ expect }) => {
  const cli = new CLIEngine()
  const { results: [fail] } = cli.executeOnFiles(['tests/fixtures/fail.vue'])
  console.log(fail)
  expect(fail.errorCount).toBe(5)
  expect(fail.warningCount).toBe(5)
})
