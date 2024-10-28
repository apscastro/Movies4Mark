import { Box, Button, Modal, Typography } from '@mui/material';
import { Cast, Genre, Movie } from '../../api/movies';
import { styles } from './styles';
import CloseIcon from '@mui/icons-material/Close';
type DetailsProps = {
    open: boolean,
    handleClose: ()=>void,
    movie: Movie
}
const Details = ({open,handleClose,movie}: DetailsProps) =>{
    
    const renderGenres = (genres: Genre[]) =>{
        let s: string = ""
        genres.map((g:Genre,n:number)=>(
            n === (genres.length-1) ? s += g.name : s += g.name + ", "
        ))
        return s
    }

    const renderCast = (cast: Cast[]) =>{
        let s :string = ""
        cast.map((c:Cast,n:number)=>(
            s += `${c.name}   `
        ))
        return s
    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
                <Box sx={styles.box1}>
                    <Box sx={{width:"628px"}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={styles.title}>
                        {movie.title}
                    </Typography>
                   
                    <hr style={{width:"52px", color:"#164E78", float:"left", marginTop:"5px",marginBottom:"5px", border:"1px solid #21B3CF"}}></hr>
                    <br/>

                    <Typography sx={styles.detailTitle}>Year</Typography>
                    <Typography sx={styles.detailText}>{movie.releaseDate}</Typography>
                    
                    <Typography sx={styles.detailTitle}>
                        Genres
                    </Typography>
                    <Typography sx={styles.detailText}>
                        {renderGenres(movie.genres)}
                    </Typography>

                    <Typography sx={styles.detailTitle}>
                        Description
                    </Typography>
                    <Typography sx={styles.detailText}>
                        {movie.overview}
                    </Typography>

                    <Box sx={{display:"flex",flexDirection: 'row',}}>
                        <Box sx={{mr:"20px"}}>
                            <Typography sx={styles.detailTitle}>
                                Director
                            </Typography>
                            <Typography sx={styles.detailCredits}>
                                {movie.credits.crew[0].name}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={styles.detailTitle}>
                                Cast
                            </Typography>
                            <Typography sx={styles.detailCredits}>
                                {renderCast(movie.credits.cast)}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography sx={styles.detailTitle}>
                        Runtime
                    </Typography>
                    <Typography sx={styles.detailText}>
                        {movie.runtime} mins
                    </Typography>


                    <Typography sx={styles.detailTitle}>
                        Rating
                    </Typography>
                    <Typography sx={styles.detailText}>
                        {movie.voteAverage}
                    </Typography>


                    <Typography sx={styles.detailTitle}>
                        Votes
                    </Typography>
                    <Typography sx={styles.detailText}>
                        {movie.voteCount} mins
                    </Typography>


                    <Typography sx={styles.detailTitle}>
                        Revenue
                    </Typography>
                    <Typography sx={styles.detailText}>
                    {'$' + new Intl.NumberFormat('en-US', 
                            {style: 'currency', currency: 'USD', minimumFractionDigits: 0,}).format(movie.revenue).replace('$', '')}
                    </Typography>
                    
                    </Box>
                    <Button onClick={handleClose} sx={styles.button}><CloseIcon sx={{float:"right"}}/></Button>
                </Box>
                
        </Modal>
    )
}

export default Details;