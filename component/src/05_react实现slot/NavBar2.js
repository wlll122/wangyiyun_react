import React, {Component} from 'react';
class NavBar2 extends Component {
    render() {
        const {leftslot,centersolt,rightsolot} = this.props
        return (
            <div className="nav-bar">
                <div className="nav-left">
                    {leftslot}
                </div>
                <div className="nav-center">
                    {centersolt}
                </div>
                <div className="nav-right">
                    {rightsolot}
                </div>

            </div>
        );
    }
}

export default NavBar2;
