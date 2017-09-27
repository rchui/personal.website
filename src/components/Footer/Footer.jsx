import React, { Component } from 'react';

import Tech from './Tech/Tech';

class Footer extends Component {
    render() {
        return(
            <div className="Footer">
                <footer className="footer">
                    <Tech />
                    <div className="container">
                        <div className="content has-text-centered">
                        <p>
                            The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                        </p>
                        <p>
                            <a class="icon" href="https://github.com/rchui/personal.website">
                            <i class="fa fa-github"></i>
                            </a>
                        </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;