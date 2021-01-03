import React, {Component} from 'react';
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
class App extends Component {
    render() {
        return (
            <div>
                <NavBar>
                    <span>aaaa</span>
                    <strong>bbbbb</strong>
                    <a href="/#">ccccc</a>
                </NavBar>
                <NavBar2 leftslot={ <span>aaaa</span>}
                         centersolt = { <strong>bbbbb</strong>}
                         rightsolot = {<a href="/#">ccccc</a>}
                />
            </div>
        );
    }
}

export default App;
