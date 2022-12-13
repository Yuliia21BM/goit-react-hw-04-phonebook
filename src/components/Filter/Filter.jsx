import { Box } from '../Box';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { FilterInput, FilterTitle } from './Filter.styled';

const filterId = nanoid();

export const Filter = ({ value, onChange }) => {
  return (
    <Box display="flex" flexDirection="column">
      <FilterTitle htmlFor={filterId}>Finde contact by name</FilterTitle>
      <FilterInput
        type="text"
        id={filterId}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
