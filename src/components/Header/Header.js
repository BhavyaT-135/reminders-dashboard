import React from "react";
import Author from "../../images/Author.png";
import "./header.css";

const Header = () => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <a className="active item" style={{ userSelect: 'auto', color: 'black', fontSize: '800', marginBottom: '#32CD32' }}>
                    Teams
                </a>
                <a className="item" style={{ userSelect: 'auto', color: 'grey' }}>
                    U23
                </a>
                <a className="item" style={{ userSelect: 'auto', color: 'grey' }}>
                    U19
                </a>
                <div className="right menu" style={{ userSelect: 'auto'}}>
                    <a className="ui item" style={{ userSelect: 'auto' }}>
                        <img src={Author} className="ui mini rounded image" style={{ userSelect: 'auto', content: { marginTop: '30px' }}} />
                        <a className="browse item" style={{ userSelect: 'auto' }}>
                            Marcus
                            <i className="dropdown icon" style={{ userSelect: 'auto' }} />
                        </a>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;