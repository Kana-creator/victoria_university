import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class WilNav extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="sidenavd">
                        <ul class="w3-ul w3-card-4" style={{boxShadow: 'none'}}>
                            <li class="w3-display-container" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/wil' style={{fontSize: '16px'}}>About WIL<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/how-wil-works' style={{fontSize: '16px'}}>How WIL works<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/benefits' style={{fontSize: '16px'}}>Benefits<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container"style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/costs-and-insurance' style={{fontSize: '16px'}}>Costs and insurance<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container"style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/wil-hall-of-fame' style={{fontSize: '16px'}}>WIL Hall of Fame<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                            <li class="w3-display-container" style={{borderBottom: 'none', padding: '6px 22px'}}><Link to='/contactwil' style={{fontSize: '16px'}}>Contact us<span onclick="this.parentElement.style.display='none'" class="w3-button w3-transparent w3-display-right"></span></Link></li>
                        </ul>
                    </div>
            </React.Fragment>
        )
    }
}

export default WilNav;