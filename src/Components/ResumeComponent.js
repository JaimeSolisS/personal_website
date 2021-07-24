import React from 'react';
import styled from 'styled-components';
import Title from './Title'; 
import {InnerLayout} from '../styles/Layouts';
import SmallTitle from '../Components/SmallTitle';
import ResumeItem from './ResumeItem';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';


function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
        <Title title={'Resume'} span={'resume'} />
        <InnerLayout>
            <div className="small-title">
                <SmallTitle icon={briefcase} title={'Working Experience'} />
            </div>
            <div className="resume-content">
                <ResumeItem 
                    year={'Nov 2020 - Present'} 
                    title={'Developer'}
                    subTitle={'This Company'}
                    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                />
                <ResumeItem 
                    year={'August - December 2019'} 
                    title={'Intern'}
                    subTitle={'Another Company'}
                    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                />
            </div>
            <div className="small-title u-small-title-margin">
                <SmallTitle icon={school} title={'Education'} />
            </div>
            <div className="resume-content ">
                <ResumeItem 
                    year={'2016 - 2021'} 
                    title={'Computer Science and Technology'}
                    subTitle={'My Uni'}
                    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                />
                <ResumeItem 
                    year={'January - May 2020'} 
                    title={'Abroad'}
                    subTitle={'Other Uni'}
                    text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                />
            </div>
        </InnerLayout>
    </ResumeStyled>    
    );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume;