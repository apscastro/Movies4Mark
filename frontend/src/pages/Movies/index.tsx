import { useEffect, useState } from "react";
import { getMovies, Movie } from "../../api/movies";
import { Box, Button,  Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { styles } from "./styles";
import CircularProgress from '@mui/material/CircularProgress';
import Details from "../../components/Details";
import DropDown from "../../components/DropDown";
const Movies = () =>{

    const [movies, setMovies] = useState<Movie[]>([]);
    const [page,setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [sort, setSort] = useState<boolean>(false)
    const [year, setYear] = useState<number>(0)
    const [activeButton, setActiveButton] = useState<number>(0)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openDrop = Boolean(anchorEl);
    
    
    useEffect(() =>{
        const fetchMovies = async() =>{
            const data = await getMovies(page, sort, year);
            setMovies((prevMovies) => [...prevMovies, ...data]);
            setIsLoading(false);
        }
        fetchMovies();
    }, [page,sort,activeButton,year])

    const renderRevenue = (revenue: number) => {
        return '$' + new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(revenue).replace('$', '');
    }
    


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });



    const handleButtons = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ,buttonId: number,year:number) => {
        if(activeButton === buttonId){
            setSort(false)
            setMovies([])
            setYear(0)
            setPage(1)
            setActiveButton(0)
        }
        else if(buttonId === 1){
            setSort(true)
            setMovies([])
            setYear(0)
            setPage(1)
            setActiveButton(1)
        }
        else{
            handleClickDrop(event)
        }
    }

    
    const handleClickDrop = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseDrop = (year: number) => {
        setSort(true)
        setMovies([])
        setYear(year)
        setPage(1)
        setActiveButton(2)
        setAnchorEl(null);
    };

    const renderMovies = () =>{
        return(
            <TableBody>
                {movies.map((movie: Movie, idx: number) =>{
                    return(
                        <TableRow  key={idx}>
                            <TableCell sx = {styles.cell}>{idx + 1}</TableCell>
                            <TableCell sx = {styles.cell}>{movie.title}</TableCell>
                            <TableCell sx = {styles.cell}>{movie.releaseDate}</TableCell>
                            <TableCell sx = {styles.cell}>{renderRevenue(movie.revenue)}</TableCell>
                            <TableCell sx = {styles.cell}><Button onClick={()=>{setSelectedMovie(movie);handleOpen()}}><VisibilityIcon/></Button></TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        )
    }

    return(
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
            <Box sx={{width:"100%", height:"50px", backgroundColor:"#012433"}}></Box>
            <Box sx={{width:"70%"}}>
                <Box sx = {styles.parent}>
                    <Box sx={styles.box1}>
                        <Typography sx={styles.typo}>
                            Movie Ranking
                        </Typography>
                    </Box>

                    <Box sx={styles.box1}>
                        <Button sx={activeButton === 1 ? styles.activeButton :styles.button} onClick={(event) => {handleButtons(event,1,0)}}>Top 10 Revenue</Button>
                        <Button 
                        aria-controls={openDrop ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openDrop ? 'true' : undefined}
                        sx={activeButton === 2 ? styles.activeButton :styles.button} 
                        onClick={(event) => {handleButtons(event,2,year)}}>Top 10 Revenue per Year
                        </Button>
                        <DropDown anchor={anchorEl} open={openDrop} handleClose={handleCloseDrop} ></DropDown>
                    </Box>

                    <Box sx={styles.box3}>
                        <Table sx={styles.table}>
                            <TableHead sx={styles.tableHead}>
                                <TableRow sx={styles.tableHead}>
                                    <TableCell sx={styles.headCell}>RANKING</TableCell>
                                    <TableCell sx={styles.headCell}>TITLE</TableCell>
                                    <TableCell sx={styles.headCell}>YEAR</TableCell>
                                    <TableCell sx={styles.headCell}>REVENUE</TableCell>
                                    <TableCell sx={styles.headCell}></TableCell>
                                </TableRow>
                            </TableHead>
                            {renderMovies()}
                        </Table>
                        {isLoading && <CircularProgress sx={{height:"100px",color:"#78849E"}}/>}
                    </Box>
                    
                </Box>
            </Box>
            {selectedMovie && <Details open={open} handleClose={handleClose}  movie={selectedMovie}></Details>}
        </Box>
    )
}

export default Movies;