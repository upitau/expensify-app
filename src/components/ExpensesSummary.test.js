import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './ExpensesSummary';

test('should correctly render ExpnseSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={45678} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpnseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={12345678} />);
  expect(wrapper).toMatchSnapshot();
});