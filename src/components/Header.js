import React from 'react';

const Header = (props) => {

    const {
        authenticate,
        uid,
    } = props;

    return (
        <div className="header">
            <div className="headerLeft">
                <h1>Notely</h1>
            </div>
            <div className="headerRight">
                <div className="headRightMiniStack">
                    <h3>Logged in as:</h3>
                    <h3>{uid}</h3>
                </div>
                <h1 onClick={ () => authenticate('github') } >Login</h1>
            </div>
        </div>
    )
}

export default Header;