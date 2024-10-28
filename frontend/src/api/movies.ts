import axios from "axios";

export type Movie = {
    id: number,
    title: string,
    overview: string,
    releaseDate: number,
    runtime:number,
    voteAverage: number,
    voteCount: number,
    revenue: number,
    genres: Genre[],
    credits: Credits
}

export type Genre = {
    id: number,
    name:string
}

export type Crew = {
    id: number,
    name: string,
    job: string
}

export type Cast = {
    id: number,
    name: string
}

export type Credits = {
    crew : Crew[],
    cast : Cast[]
}


export const getMovies = async(page:number, sort: boolean, year: number) => {
    const response = await axios.get(`http://localhost:8081/api/movies/highest-revenue?page=${page}&sort=${sort.toString()}&year=${year}`);
    const movies: Movie[] = response.data.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        releaseDate: new Date(movie.release_date).getFullYear(),
        runtime:movie.runtime,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        revenue: movie.revenue,
        genres: movie.genres,
        credits: movie.credits
    }));
    return movies;
}