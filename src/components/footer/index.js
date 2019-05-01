import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    FooterSpacing,
    FooterContainer,
    LeftSection,
    RightSection
} from './footerStyles.js';

const Footer = ({ links, fixed }) => {
  return (
    <>
        <FooterSpacing>
            <FooterContainer fixed={fixed}>
                <div className="inner-content">
                    <LeftSection>
                        {links && links.map(l => {
                            return (
                                <NavLink 
                                    exact={l.exact} 
                                    to={l.path}
                                >
                                {l.text}
                                </NavLink>
                            )
                        })}
                    </LeftSection>
                    <RightSection>

                    </RightSection>
                </div>
            </FooterContainer>
        </FooterSpacing>
    </>
  )
}

export default Footer