import React from 'react';

const ImageLinkForm = () => {
    return(
        <div>
            <p className='f3'>
                {`This will detect faces in picture, try it or else... don't`}
            </p>
            <div>
                <input className='f2 pa2 w-70 center' type='text' />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;