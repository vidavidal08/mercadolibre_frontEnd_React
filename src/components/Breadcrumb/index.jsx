import React from 'react';
import breadcrumb from './breadcrumb.css';

const Index = () => {
    return (
        <div className='container' >
        <nav id="breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Electrónica,Audio y Video</a></li>
            <li className="breadcrumb-item active" aria-current="page">iPod</li>
            <li className="breadcrumb-item active" aria-current="page">Reproductores</li>
            <li className="breadcrumb-item active" aria-current="page">iPod touch</li>
            <li className="breadcrumb-item active" aria-current="page">32 GB</li>
          </ol>
        </nav>
      </div>
    );
}

export default React.memo(Index);