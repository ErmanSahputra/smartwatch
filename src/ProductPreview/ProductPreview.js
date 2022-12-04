import React from "react";
import classes from './ProductPreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';


const ProductPriview = (props) => {

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className={classes.ProductPriview}>
            <img src={props.currentPreviewImage} alt='Product Preview' />

            {
                props.currentSelectedFeature === 1 ?
                    <div className={classes.HeartBeatSection}>
                        <FontAwesomeIcon icon={faHeartPulse} color='red' beat />
                        <p>78</p>
                    </div>
                    :
                    <div className={classes.TimeSection}>
                        <p>{`${currentHour}:${currentMinute}`}</p>
                    </div>
            }




        </div>
    );
}

export default ProductPriview;