import selectExpensesTotal from './expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0);
});

test('Should correctly add up a single expense', () => {
  expect(selectExpensesTotal([expenses[1]])).toBe(109500);
});

test('Should correctly add up multiple expenses', () => {
  expect(selectExpensesTotal(expenses)).toBe(114195);
});