import React  from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import Input from '@mui/material/Input';
import { StyledSearchBar } from './styled';





export const SearchBar=()=>{
return(
    <StyledSearchBar>
    <div >
        <Input 
        disableUnderline={true}
        fullWidth={true}
        placeholder="Search Article"
          id="search-bar"
          startAdornment={
              <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
          />
    </div>
          </StyledSearchBar>
)

}
