package com.example.demo.controllers;

import com.example.demo.dtos.MovieDTO;
import org.springframework.web.bind.annotation.*;
import com.example.demo.services.TmdbService;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/movies")
public class TmdbController {
    private final TmdbService tmdbService;

    public TmdbController(TmdbService tmdbService) {
        this.tmdbService = tmdbService;
    }

    @GetMapping("/highest-revenue")
    public List<MovieDTO> getHighestRevenueMovies(@RequestParam(defaultValue = "1") int page,
                                                  @RequestParam(defaultValue = "false") boolean sort,
                                                  @RequestParam(defaultValue = "0") int year) {
        return tmdbService.getHighestRevenueMovies(page,sort,year);
    }

    @GetMapping("/details/{movieId}")
    public MovieDTO getMovieDetails(@PathVariable int movieId) {
        return tmdbService.getMovieDetails(movieId);
    }
}

