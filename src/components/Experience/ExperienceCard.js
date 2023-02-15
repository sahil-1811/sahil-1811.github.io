import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'
import { Description } from '@material-ui/icons';


function ExperienceCard({id, company, jobtitle, startYear, endYear, duties}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));



    const classes = useStyles();

    var x = (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    
                    <h4 style={{color: theme.tertiary}}>{company}</h4>
                    <h5 style={{color: theme.tertiary80}}>{jobtitle}</h5>
<br/>
                    <h5 style={{color: theme.tertiary50}}>{duties}</h5>
                    
                   
                </div>
            </div>
        </Fade>   
    )
    // document.getElementById('haha').innerHTML = "test";
    return x

}

export default ExperienceCard
