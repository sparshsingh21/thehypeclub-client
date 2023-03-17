import Helmet from 'react-helmet';
import React from 'react';

const Metadata = ({title}) => {
    return (
        <Helmet>
        <title>{title} | The Hype Club</title>
        </Helmet>
    )
}

export default Metadata;