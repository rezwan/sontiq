import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
    <div>
        <React.Fragment>
            <h1>Log in</h1>


            <div>
                <select className="ui dropdown">
                    <option value="1">EZShild</option>
                    <option value="0">Identity Force</option>
                </select>
            </div>
            <div>
                <input type="text" name="Id" id="Id" />
            </div>

            <button type="button"
                    className="btn btn-primary btn-lg">
                Submit
            </button>
        </React.Fragment>
    </div>
);

export default connect()(Home);
