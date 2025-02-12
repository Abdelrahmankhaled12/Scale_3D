// Importing required dependencies and components
import {
    MRT_GlobalFilterTextField,
    MRT_TableBodyCellValue,
    MRT_TablePagination,
    flexRender,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Autocomplete,
} from '@mui/material';
import { data } from './makeData'; // Sample data
import './style.scss'; // Component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';

// Options for sorting
const timeFrameOptions = ['Project Number', 'Cust Surname', 'Date Added', 'Comp Name'];

// Table column definitions
const columns = [
    { accessorKey: 'projectNumber', header: 'Project Number' },
    { accessorKey: 'firstName', header: 'Cust. Firstname' },
    { accessorKey: 'lastName', header: 'Cust. Surname' },
    { accessorKey: 'date', header: 'Date Added' },
    { accessorKey: 'comp', header: 'Comp. Name' },
    { accessorKey: 'numImages', header: 'Num Images' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'goodImages', header: '% Good Images' },
    { accessorKey: 'delete', header: '' },
];

const TableShowProjects = ({ setIsOpen }) => {
    const [timeFrame, setTimeFrame] = useState('Project Number'); // Default sort option
    const [filteredData, setFilteredData] = useState(data); // Filtered data
    const [searchValue, setSearchValue] = useState(''); // Global search value
    const navigate = useNavigate(); // For route navigation

    // Initialize Material React Table
    const table = useMaterialReactTable({
        columns,
        data: filteredData, // Use filtered data for the table
        enableRowSelection: true, // Enable row selection
        initialState: {
            pagination: { pageSize: 8, pageIndex: 0 }, // Default pagination state
            showGlobalFilter: true, // Enable global filtering
        },
        muiPaginationProps: {
            rowsPerPageOptions: data.length > 16 ? [8, 16, 32] : data.length > 8 ? [8, 16] : [8], // Pagination options
            variant: 'outlined',
        },
        paginationDisplayMode: 'pages',
    });

    // Handle search filtering
    const handleSearchChange = (value) => {
        setSearchValue(value);
        const filtered = data.filter((row) =>
            Object.values(row).some((cell) =>
                String(cell).toLowerCase().includes(value.toLowerCase())
            )
        );
        setFilteredData(filtered);
    };

    const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('/');
        return new Date(`${year}-${month}-${day}`);
    };

    // Handle sorting
    const handleSortChange = (newValue) => {
        setTimeFrame(newValue);
        const sortedData = [...filteredData].sort((a, b) => {
            switch (newValue) {
                case 'Cust Surname':
                    return a.lastName.localeCompare(b.lastName);
                case 'Date Added':
                    return parseDate(a.date) - parseDate(b.date);
                case 'Comp Name':
                    return a.comp.localeCompare(b.comp);
                default:
                    return a.projectNumber.localeCompare(b.projectNumber);
            }
        });
        setFilteredData(sortedData);
    };

    // Delete project confirmation
    const deleteProject = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            iconColor: "#0003",
            showCancelButton: true,
            confirmButtonColor: "#000000",
            cancelButtonColor: "#0003",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    iconColor: "#0003",
                    confirmButtonColor: "#000000",
                })
            }
        });
    };

    return (
        <Stack sx={{ m: '2rem 0' }}>
            {/* Table header with search and sort */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: "20px"
                }}
            >
                {/* Global search field */}
                <MRT_GlobalFilterTextField table={table} />
                {/* Sorting dropdown */}
                <Autocomplete
                    value={timeFrame}
                    onChange={(event, newValue) => {
                        handleSortChange(newValue);
                    }}
                    id="time-frame-dropdown"
                    options={timeFrameOptions}
                    sx={{ width: 200 }}
                    renderInput={(params) => <TextField {...params} label="Sort by :" />}
                />
            </Box>

            {/* Table container */}
            <TableContainer>
                <Table>
                    {/* Use your own markup, customize however you want using the power of TanStack Table */}
                    <TableHead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header, _columnIndex) => {
                                    if (_columnIndex === 0) {
                                        return;
                                    }
                                    return <TableCell align="center" variant="head" key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.Header ??
                                                header.column.columnDef.header,
                                                header.getContext(),
                                            )}
                                    </TableCell>
                                }
                                )}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {table.getRowModel().rows.map((row, rowIndex) => (
                            <TableRow key={row.id} selected={row.getIsSelected()}>
                                {row.getVisibleCells().map((cell, _columnIndex) => {
                                    if (_columnIndex === 0) {
                                        return;
                                    }
                                    if (_columnIndex === 1) {
                                        return (
                                            <TableCell align="center" variant="body" key={cell.id}
                                                onClick={() => navigate(`/projects/project-details?number=${cell.row.original.projectNumber}`)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                {/* Use MRT's cell renderer that provides better logic than flexRender */}
                                                <MRT_TableBodyCellValue
                                                    cell={cell}
                                                    table={table}
                                                    staticRowIndex={rowIndex} //just for batch row selection to work
                                                />
                                            </TableCell>
                                        )
                                    }
                                    if (_columnIndex === 9) {
                                        return (
                                            <TableCell align="center" variant="body" key={cell.id}
                                                style={{ cursor: "pointer" }}
                                                className='deleteIcon'
                                                onClick={() => deleteProject()}
                                            >
                                                <div title="Delete">
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </div>
                                            </TableCell>
                                        )
                                    }
                                    return (
                                        <TableCell align="center" variant="body" key={cell.id}
                                        >
                                            {/* Use MRT's cell renderer that provides better logic than flexRender */}
                                            <MRT_TableBodyCellValue
                                                cell={cell}
                                                table={table}
                                                staticRowIndex={rowIndex} //just for batch row selection to work
                                            />
                                        </TableCell>
                                    )
                                }
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Showing data summary and pagination */}
            <p className="entries">
                Showing data {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to {Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, filteredData.length
                )} of {filteredData.length} entries
            </p>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: "20px"
                }}
            >
                {/* Add Project Button */}
                <button className="addProjectButton" onClick={setIsOpen}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <p>Add Project</p>
                </button>
                {/* Table pagination */}
                <MRT_TablePagination table={table} />
            </Box>
        </Stack>
    );
};

export default TableShowProjects;
