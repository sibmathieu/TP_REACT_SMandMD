import './App.css';
import Router from './components/router';
import AppBar from "./components/app-bar/app-bar";
import {Route, Routes} from "react-router-dom";
import ContactList from "./components/contact-list/ContactList";
import ContactInfo from "./components/contact-info/ContactInfo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AppBar/>
          <Router />
      </header>
    </div>
  );
}

export default App;
