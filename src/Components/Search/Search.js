import React from 'react'
import { countryListAllData } from "../CountryList";
import styles from "./search.module.css"

const Search = (props) => {
    const { value, onValueChange, countryHandler, onSubmitHandler } = props;
    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input required value={value} onChange={onValueChange} className={styles.searchBar} type="text" placeholder="Enter Location" />
            <select id="country-select" required name="pets" className={styles.select} onChange={countryHandler}>
                <option disabled selected className={styles.option}>--PLEASE CHOOSE THE COUNTRY--</option>
                {countryListAllData.map(country => <option key={country.code} value={country.code} className={styles.option}>{country.name}</option>)}
            </select>
            <button className={styles.submitButton}>SEARCH</button>
        </form>
    )
}

export default Search;