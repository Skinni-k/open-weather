import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import styles from "./search.module.css"
import { StylesProvider } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const Search = (props) => {
    const { onValueChange, onSubmitHandler, placeList, onPlaceSelect } = props;

    const CssTextField = withStyles({
        root: {
          "& label.Mui-focused": {
            color: "#000",
            fontSize: "20px",
            fontWeight: "bold",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "3px solid #000",
                borderRadius: "10px",
            },
            "&.Mui-focused fieldset": {
                border: "3px solid #FFF",
              borderColor: "white"
            }
          }
        }
      })(TextField);

    return (
        <StylesProvider injectFirst>
        <div>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <Autocomplete className={styles.searchBar2} id="free-solo-demo" freeSolo
                options={placeList}
                getOptionLabel={(option) => option.display_name}
                onChange={onPlaceSelect} 
                renderInput={params => (
                    <CssTextField
                    {...params}
                    onChange={onValueChange} 
                    label="Enter Location" variant="outlined" id="custom-css-outlined-input" required
                    />
                )}
                />
                <button className={styles.submitButton}>SEARCH</button>
            </form>
            <div>
            </div>
        </div>
        </StylesProvider>
    )
}

export default Search;
