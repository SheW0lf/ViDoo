import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = () => {
    return(
        <div className="loader">
            <FontAwesomeIcon icon={['far', "circle-notch"]} spin size="6x" />
        </div>
    );
}

export default Loader;