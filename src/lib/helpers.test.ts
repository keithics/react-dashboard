import { snakeToCapitalize } from './helpers';

test('this is a sample', () => {
  expect(snakeToCapitalize('snakeCase')).toBe('Snake Case');
});
test('this is a sample2', () => {
  expect(snakeToCapitalize('firstName')).toBe('First Name');
});
