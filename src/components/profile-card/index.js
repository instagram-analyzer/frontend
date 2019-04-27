import React from 'react'

import { ProfileCardContainer, TopSection, BottomSection } from "./profileCardStyles.js"; 

const ProfileCard = ({ 
    account_img, 
    user_name, 
    bio, 
    bio_url,
    full_name,
    follower_count,
    following_count,
    posts_count
}) => (
    <ProfileCardContainer>
        <TopSection>
            <img src={account_img} alt={full_name}/>
            <div>
                <h3>@{user_name}</h3>
                <h1>
                    <i className="fab fa-instagram"/>
                    {full_name}
                </h1>
                <h2>{bio}</h2>
                <h3>{bio_url}</h3>
            </div>
        </TopSection>
        <BottomSection>
            <div>
                <h3>{follower_count}</h3>
                <h4>followers</h4>
            </div>
            <div className="middle">
                <h3>{following_count}</h3>
                <h4>followers</h4>
            </div>
            <div>
                <h3>{posts_count}</h3>
                <h4>followers</h4>
            </div>
        </BottomSection>
    </ProfileCardContainer>
)

export default ProfileCard;