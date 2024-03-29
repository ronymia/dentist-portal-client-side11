import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
     return (
          <>
               <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapper ClassName={{}}
                    wrapperStyle=""
                    visible={true}
               />
          </>
     )
}

export default Loader;
