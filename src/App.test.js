import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(rootReducer)

test('renders Home page text', () => {
  render(
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>
    );
  const linkElement = screen.getByText("Welcome to Shoply!");
  expect(linkElement).toBeInTheDocument();
});

it("renders the home page and cart page", function() {
  const { queryByTestId, queryByText } = render(
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>
    );
  
  // expect shoply homepage text, not checkout
  expect(queryByText("Checkout")).not.toBeInTheDocument();
  expect(queryByText("Welcome to Shoply!")).toBeInTheDocument();

  // click the cart and total on top right to render cart page
  const cartBtn = queryByTestId("cart");
  fireEvent.click(cartBtn);

  // expect checkout text, not shoply homepage
  expect(queryByText("Checkout")).toBeInTheDocument();
  expect(queryByText("Welcome to Shoply!")).not.toBeInTheDocument();

});