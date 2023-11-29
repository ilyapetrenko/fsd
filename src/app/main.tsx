import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../shared/base.css'
import { Provider } from "react-redux";
import { store } from "./appStore";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <App />
    </Provider>
)
