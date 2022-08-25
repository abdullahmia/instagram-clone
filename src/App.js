import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./views/pages/Main";

const App = () => {
  return (
    <Provider store={store}>
      <div className="background">
        <Main />
      </div>
    </Provider>
  );
};

export default App;
