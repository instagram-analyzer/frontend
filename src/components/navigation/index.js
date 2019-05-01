import React from 'react'

import { 
    NavbarContainer,
    LeftSection,
    RightSection,
    NavSpacing
} from './navigationStyles.js';
import UserDropdown from './dropdowns/UserDropdown.js';

const Navigation = ({}) => (
    <NavSpacing>
        <NavbarContainer>
            <div className="inner-content">
                <LeftSection>
                    <button>
                        <i className="fas fa-bars"/>
                        Menu
                    </button>
                </LeftSection>
                <RightSection>
                    <UserDropdown
                        account_img="https://scontent-yyz1-1.cdninstagram.com/vp/0fd777edf7c2e64e59f1eb620bf12675/5D5D6043/t51.2885-19/s150x150/44374083_252553575613233_2079222512993959936_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com"
                    />
                </RightSection>
            </div>
        </NavbarContainer>
    </NavSpacing>
)

export default Navigation;
