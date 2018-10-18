import React from 'react';
import { shallow } from 'enzyme';
import ExpnseListItem from './ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpnseListItem {...expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});