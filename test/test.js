import test from 'ava'
import { CLIEngine } from 'eslint'

test('pass', t => {
  const cli = new CLIEngine()
  const { results: [pass] } = cli.executeOnFiles(['test/fixtures/pass.vue'])
  t.is(pass.errorCount, 0)
  t.is(pass.warningCount, 0)
})

test('fail', t => {
  const cli = new CLIEngine()
  const { results: [fail] } = cli.executeOnFiles(['test/fixtures/fail.vue'])
  t.log(fail)
  t.is(fail.errorCount, 5)
  t.is(fail.warningCount, 5)
})
