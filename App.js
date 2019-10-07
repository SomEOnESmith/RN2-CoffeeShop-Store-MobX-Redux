import React, { Component } from "react";
import { Spinner, Text } from "native-base";
import HomePage from "./Components/HomePage";

//redux
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {
    loading: false
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="black" />;
    }
    return (
      <Provider store={store}>
        <App>
          <HomePage />
        </App>
      </Provider>
    );
  }
}

export default App;
