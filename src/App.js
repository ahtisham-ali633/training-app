import React, {useEffect} from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./container/Home";
import Store from "./redux/store";
import { Provider } from "react-redux";
import {fetchPeople} from "./redux/actions/peopleAction";
import Setting from "./container/Setting";
import 'antd/dist/antd.css'


function App() {
    const dispatch = Store.dispatch;
  useEffect(() => {
    dispatch(fetchPeople(1, 100));
  }, []);

    return (
        <Provider store={Store}>
            <Router>
                <React.StrictMode>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/setting" component={Setting} />
                    </Switch>
                </React.StrictMode>
            </Router>
        </Provider>
    );
}

export default App