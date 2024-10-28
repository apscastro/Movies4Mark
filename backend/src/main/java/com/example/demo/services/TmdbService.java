package com.example.demo.services;

import com.fasterxml.jackson.core.type.TypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import com.example.demo.dtos.MovieDTO;
@Service
public class TmdbService {

    private final String API_KEY = "9c32e5f64b7dee010a56970ce4f8ba6b";
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    public TmdbService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public List<MovieDTO> getHighestRevenueMovies(int page, boolean sort, int year) {
        String url = "https://api.themoviedb.org/3/discover/movie?api_key=" +  API_KEY;

        boolean divisible = page%2==0;
        if(divisible){
            url += "&page=" + (page/2);
        }
        else {
            url += "&page=" + (page / 2 + 1);
        }
        if(sort){
            url += "&sort_by=revenue.desc";
        }
        if(year != 0){
            url += "&primary_release_year=" + year;
        }
        String response = restTemplate.getForObject(url, String.class);
        try {
            Map<String, Object> map = objectMapper.readValue(response, Map.class);
            List<Map<String,Object>> result = objectMapper.convertValue(map.get("results"), new TypeReference<List<Map<String,Object>>>() {});
            int indexesToReturn = 0;
            List<MovieDTO> movies = new ArrayList<>();
            for(Map<String,Object> m : result){
                if(!divisible && indexesToReturn < 10){
                    movies.add(getMovieDetails((Integer) m.get("id")));
                }
                else if(divisible && indexesToReturn >= 10){
                    movies.add(getMovieDetails((Integer) m.get("id")));
                }
                indexesToReturn++;
            }

            return movies;
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse TMDb response", e);
        }
    }

    public MovieDTO getMovieDetails(int movieId) {
        String url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" +  API_KEY + "&append_to_response=credits";
        String response = restTemplate.getForObject(url, String.class);
        try {
            Map<String,Object> map =  objectMapper.readValue(response, Map.class);
            MovieDTO movie = objectMapper.convertValue(map, MovieDTO.class);
            movie.getCredits().setCredits();
            return movie;
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse TMDb response", e);
        }
    }
}
