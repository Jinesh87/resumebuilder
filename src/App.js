import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import "./App.css";
import MainPage from "./components/MainPage";
import initialState from "./redux/initialState";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: process.env.NODE_ENV !== "production",
});
function App() {  
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
