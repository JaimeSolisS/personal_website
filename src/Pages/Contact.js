import React from 'react';
import styled from "styled-components"; 
import PrimaryButton from '../Components/PrimaryButton';
import Title from "../Components/Title"; 
import {MainLayout, InnerLayout} from "../styles/Layouts"; 

function Contact() {
    return (
        <MainLayout>
            <ContactStyled>
                <Title title={'Contact'}/>
                <InnerLayout>
                <p className="paragraph">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur magnam, possimus obcaecati, culpa beatae illum praesentium necessitatibus eligendi error hic harum excepturi sint dolores fuga animi asperiores labore amet aut.
                 </p>   
                    <div className="button">
                        <a href="mailto:hi@jaimesolis.dev">
                            <PrimaryButton title={'Say Hello'} />
                        </a>
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
        
    );
}

const ContactStyled = styled.div`

    .paragraph{
        padding: 1rem 0; 
    }

    .button{
        display: flex;
        justify-content: center;
        padding-top: 2rem;

    }
`; 

export default Contact;