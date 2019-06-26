import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound = () => {
    return(
        <div className="loader">
            <h1>Sorry, no videos found</h1>
            <div>
                <FontAwesomeIcon icon={['fal', 'sad-cry']} size="6x" />
            </div>
        </div>
    )
}

export default NotFound;