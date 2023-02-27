import React from "react";

import classNames from "classnames";
import styles from "./ProfileCollectionFilters.module.scss";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import Search from "@mui/icons-material/Search";

export default function ProfileCollectionFilters({
  filters = {
    sort: [

    ],
    price: [

    ],
  },
}) {
  return (
    <div className={classNames(styles["profile-collection-filters"])}>
      <Stack direction="row" spacing={2} alignItems="center">
        <FormControl>
          <InputLabel id="select-sort-by"></InputLabel>
          <Select
            id="select-sort-by"
            label="sortBy"
            className={classNames(styles.select)}
          >
            {/* {filters.sort.map((e) => (
              <MenuItem className={classNames(styles.items)} value={e.value}>
                {e.label}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="select-sort-by-price"></InputLabel>
          <Select
            id="select-sort-by-price"
            label="Price range"
            className={classNames(styles.select)}
          >
            {/* {filters.price.map((el) => (
              <MenuItem value={el.value}>{el.label}</MenuItem>
            ))} */}
          </Select>
        </FormControl>
        <TextField
          className={classNames(styles.search)}
          variant="standard"
          focused={false}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search className={classNames(styles.icon)} />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </div>
  );
}
