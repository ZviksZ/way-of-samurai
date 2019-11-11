import {returnStatement} from "@babel/types";
import React             from 'react';
import Preloader         from "../../common/Preloader/Preloader.jsx";
import s                 from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    
    let contacts = props.profile.contacts;
    
    return (

        <div>
            <img className={s.main_img}
                 src="https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png"
                 alt=""/>
                 
            <div className={s.content_info}>
                
                <div className={s.leftSide}>
                    <img className={s.avaImg} src={props.profile.photos.large} alt=""/>
                </div>
                
                <div className={s.rightSide}>
                    
                    <div className={s.content_user_data}>
                        
                        <h2 className={s.fullName}>{props.profile.fullName}</h2>
                        <div className={s.description}>
                            {props.profile.aboutMe}
                        </div>
                        <ul className={s.socials}>
                            {
                                Object.keys(contacts).map(cont => {
                                    if(contacts[cont]) {
                                        return <li>
                                            <span>{cont}</span> -
                                            <a href={contacts[cont]} target="_blank">
                                                {contacts[cont]}
                                            </a>
                                        </li>
                                    }
                                })
                            }
                        </ul>
                        
                    </div>
                    
                </div>
                
                
            </div>

        </div>
    );
}

export default ProfileInfo;