import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Header from "../components/HeaderComponent";
// REDUX
import {Provider} from "react-redux";
import store from "../redux/store/store";

function MyApp({Component, pageProps}) {
	return (
		<Provider store={store}>
			<Header />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
