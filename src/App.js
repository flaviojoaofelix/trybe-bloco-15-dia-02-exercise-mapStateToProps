import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import Loading from "./components/Loading";

//PROVIDER => QUEM VAI DISPONIBILIZAR AS INFORMACOES PARA OS COMPONENTES
import { Provider } from "react-redux";

//STORE => O ESTADO DO REDUX
import store from "./redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <Provider store={store}>
          {isLoading ? <Loading /> : <CardList />}
        </Provider>
      </div>
    );
  }
}

export default App;
