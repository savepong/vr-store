import React, { Component } from 'react';
import Nav from './components/navbar.js';
import Footer from './components/Footer';
import Routes from './routes.js';
import styled from 'styled-components';
import ContactUs from './components/ContactUs';
import { connect } from 'react-redux';
import { openCloseContact } from './components/ducks/reducer';

const Body = styled.div`
  min-height: 100vh;
`


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* delete Body tag below, just using to test nav and footer */}
        <Routes />
        <Footer />
        <ContactUs isOpen={this.props.contactIsOpen} cancel={() => this.props.openCloseContact}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactIsOpen: state.contactIsOpen
  }
}

export default connect(mapStateToProps, {openCloseContact})(App);
