import { snakeToCapitalize } from './helpers';

test('this is a sample', () => {
  expect(snakeToCapitalize('snakeCase')).toBe('Snake Case');
});
