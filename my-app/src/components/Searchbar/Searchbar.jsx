import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Searchbar.css'

const Searchbar = () => {
  return (
    <div className='searchbar'>
    <input type="text" placeholder='Search an album of your choice' />
    <button>
      <FontAwesomeIcon icon={faSearch} />
    </button>

    </div>
  )
}

export default Searchbar