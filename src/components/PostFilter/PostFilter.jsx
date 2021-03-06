import React from 'react';
import { Input } from '../UI/Input/Input';
import { Select } from '../UI/Select/Select';

// type filter =
// {sort: string, query: string}

// пропсы добавлены для того чтобы иметь доступ в родительском компоненте
export const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <Input
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Searching..."
          />
        <Select
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sorting"
          options={[
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By content'}
          ]}
          />
    </div>
  );
};
