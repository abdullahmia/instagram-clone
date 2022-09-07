import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import useDarkTheme from "./hooks/useDarkTheme";
import { store } from "./redux/store";
import Main from "./views/pages/Main";

const App = () => {
  const [colorTheme] = useDarkTheme();
  return (
    <Provider store={store}>
      <div className="background">
        <Main />
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </Provider>
  );
};

export default App;
