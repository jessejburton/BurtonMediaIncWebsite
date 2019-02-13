import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

renderApp();

// To be moved to their own files
var navigation = document.querySelector('.navigation');
var header = document.querySelector('.header');

// Make sure the header and navigation show up correctly
setInterval(handleScroll, 10);

function handleScroll() {
  fadeHeader();
  setNavigationClass();
}

// Fade Header
function fadeHeader() {
  if (window.scrollY > 1) {
    header.style.opacity = 1 - window.scrollY * 0.003;
  } else {
    header.style.opacity = 1;
  }
}

// Set Navigation Class
function setNavigationClass() {
  if (window.scrollY > 50) {
    navigation.classList.add('navigation__scrolled');
  } else {
    navigation.classList.remove('navigation__scrolled');
  }
}
setNavigationClass(); // Call this on load in case the user is down the page.
