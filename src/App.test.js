import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import App from './App';
import BpkCalendar from './App' 

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

let container = null
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container)
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders a calendar', () => {
  act(() => {
    render(<BpkCalendar />, container);
  })
  expect(container.textContent).toContain("Mon");w
})