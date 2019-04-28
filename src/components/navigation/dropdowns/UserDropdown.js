import React from 'react';

import { UserContainer } from '../navigationStyles.js';

const UserDropdown = ({account_img}) => (
    <UserContainer>
        <button>
            <img src={account_img} alt=""/>
        </button>
    </UserContainer>
)

export default UserDropdown;