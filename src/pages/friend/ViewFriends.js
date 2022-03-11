import React, { useEffect, useState } from "react";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import UseTable from "../../components/table/UseTable";
import { getAllFriendsAsync, selectFriends } from "../../features/friends/friendSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "phone", label: "Mobile Number" },
];

const ViewFriends = () => {
  const classes = useStyles();

  const records = useSelector(selectFriends);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFriendsAsync())
  }, [dispatch])
  

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });


  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = UseTable(records, headCells, filterFn);


  return (
    <>
      <Paper className={classes.pageContent}>
        <TblContainer>
          <TblHead />
          <TableBody>
            {(() => {
              if (records) {
                return recordsAfterPagingAndSorting().map((item) =>  {
                  return (
                  <TableRow key={item.id}>
                    <TableCell>{item.firstName}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                  </TableRow>
                  );
                })
              }  
            })()}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
};

export default ViewFriends;
