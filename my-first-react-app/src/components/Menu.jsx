import React from 'React';
import { useState } from 'react';

class Menu extends React.Component {
    createList() {
        const { data } = this.props;
        return data.map(data => <li key={data.id}>{data.name}</li>);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <nav>
                            <ul>
                                {this.createList()}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9">
                        {children}
                    </div>
                </div>
            </div>

        );
    }
}

export default Menu;