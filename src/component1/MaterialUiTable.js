import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MaterialUiTable() {
    const columns = [
        { id: "customerid", name: "customerId" },
        { id: "customername", name: "customerName" },
        { id: "customeremail", name: "customerEmail" },
        { id: "customermobile", name: "customerMobile" },
        { id: "customerpassword", name: "customerPassword" },
        { name: "Action" },
    ];
    const [rows, setRow] = useState([]);
    const [page, setPage] = useState(0);
    const [rowPage, setRowPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        fetch(
            `https://hammerhead-app-tzlph.ondigitalocean.app/customers?pageNo=${page}&rowPage=${rowPage}`
        )
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => {
                setRow(resp.content);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, [page, rowPage]);

    return (
        <div>
            <Paper sx={{ width: "90%", marginLeft: "5%", marginTop: "4%" }}>
                <TableContainer>
                    <Link to="/add">Add Customer</Link>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        style={{
                                            backgroundColor: "black",
                                            color: "white",
                                        }}
                                        key={column.id}
                                    >
                                        {column.name}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows &&
                                rows
                                    //.slice(page * rowPage, page * rowPage* rowPage  )

                                    .map((row, i) => {
                                        return (
                                            <TableRow key={i}>
                                                <TableCell>
                                                    {row.customerId}
                                                </TableCell>
                                                <TableCell>
                                                    {row.customerName}
                                                </TableCell>
                                                <TableCell>
                                                    {row.customerEmail}
                                                </TableCell>
                                                <TableCell>
                                                    {row.customerMobile}
                                                </TableCell>
                                                <TableCell>
                                                    {row.customerPassword}
                                                </TableCell>
                                                <TableCell>
                                                    <Link
                                                        to={
                                                            "/edit/" +
                                                            row.customerId
                                                        }
                                                    >
                                                        Edit
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowPageOption={[5, 10, 25]}
                    Component="div"
                    page={page}
                    rowpage={rowPage}
                    count={rows.length}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage={<span>Rows:</span>}
                    labelDisplayedRows={({ page }) => {
                        return `Page: ${page}`;
                    }}
                />
            </Paper>
        </div>
    );
}
export default MaterialUiTable;
