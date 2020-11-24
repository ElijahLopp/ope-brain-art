import Tooltip from '@material-ui/core/Tooltip';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import React, {ChangeEvent, useCallback, useRef, useState} from 'react';
import {InputSearchProps} from './interfaces';
import * as S from './styles';

const InputSearch: React.FC<InputSearchProps> = ({
  onSearch,
  debounceInterval = 500,
  placeholderText,
}) => {
  const [visibleClear, setVisibleClear] = useState(false);
  const timeRef = useRef<number>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOnSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {value} = e.currentTarget;
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
      timeRef.current = setTimeout(() => {
        onSearch(value);
      }, debounceInterval);

      setVisibleClear(true);
    },
    [onSearch, debounceInterval],
  );

  const handleClean = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setVisibleClear(false);
      onSearch('');
    }
  }, [onSearch]);

  return (
    <S.Container>
      <SearchIcon fontSize="small" />
      <S.InputSearch
        inputRef={inputRef}
        placeholder={placeholderText}
        onChange={handleOnSearch}
        inputProps={{'aria-label': 'Pesquisar Paciênte'}}
      />
      {visibleClear && (
        <Tooltip title="Limpar pesquisa" aria-label="Limpar pesquisa">
          <S.IconButton type="submit" aria-label="search" onClick={handleClean}>
            <ClearIcon fontSize="small" />
          </S.IconButton>
        </Tooltip>
      )}
    </S.Container>
  );
};

export default InputSearch;
