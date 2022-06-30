import React from 'react';
import { usePaginations } from '../../hooks/usePaginations';

export const PaginationsContainer = ({totalPages, page, changePage}) => {
  const pagesArray = usePaginations(totalPages);

  return (
    <div className='buttons-page-container'>
        {pagesArray.map(p =>
          <button
            onClick={() => changePage(p)} 
            key={p}
            className={page === p ? `myBtn active` : `myBtn`}
          >
            {p}
          </button>
        )}
      </div>
  );
};
