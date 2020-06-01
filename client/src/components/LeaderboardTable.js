import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import theme from '../theme';

import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableHeader: {
        backgroundColor: theme.palette.primary.main,
    },
    tableHeaderText: {
        color: theme.palette.text.secondary,
    }
});

export default function SimpleTable() {
    const classes = useStyles();
    const [playerArray, setPlayerArray] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/topRanked")
            .then(res => {
                setPlayerArray(res.data);
            })
            .catch(error => {
                console.log(error.data);
            })
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead className={classes.tableHeader} >
                    <TableRow>
                        <TableCell className={classes.tableHeaderText}>Rank</TableCell>
                        <TableCell className={classes.tableHeaderText}>Name</TableCell>
                        <TableCell className={classes.tableHeaderText}>Winrate</TableCell>
                        <TableCell className={classes.tableHeaderText}>Rating</TableCell>
                        <TableCell className={classes.tableHeaderText}>Peak Rating</TableCell>
                        <TableCell className={classes.tableHeaderText}>Tier</TableCell>
                        <TableCell className={classes.tableHeaderText}>Region</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {playerArray.map((player) => (
                        <TableRow key={player.rank}>
                            <TableCell>{player.rank}</TableCell>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{Math.round((player.wins / player.games) * 100) + "%"}</TableCell>
                            <TableCell>{player.rating}</TableCell>
                            <TableCell>{player.peak_rating}</TableCell>
                            <TableCell>{player.tier}</TableCell>
                            <TableCell>{player.region}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}