package com.example.demo.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MovieDTO {
    @JsonProperty("id")
    private int id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("overview")
    private String description;

    @JsonProperty("release_date")
    private Date releaseDate;

    @JsonProperty("runtime")
    private int runtime;

    @JsonProperty("vote_average")
    private double rating;

    @JsonProperty("vote_count")
    private int votes;

    @JsonProperty("revenue")
    private long revenue;

    @JsonProperty("genres")
    private List<Genre> genres;

    @JsonProperty("credits")
    private CreditsDTO credits;

    public MovieDTO() {}

    public CreditsDTO getCredits() {
        return credits;
    }

    public void setCredits(){
        credits.setCredits();
    }

    public static class Genre {
        @JsonProperty("id")
        private int id;

        @JsonProperty("name")
        private String name;
    }

    public static class CreditsDTO {

        @JsonProperty("crew")
        private List<CrewDTO> crew;

        @JsonProperty("cast")
        private List<CastDTO> cast;

        public void setCredits(){
            List<CrewDTO> crewl = new ArrayList<CrewDTO>();
            List<CastDTO> castl = new ArrayList<CastDTO>();
            for (CrewDTO c : crew) {
                if(c.job.equals("Director"))
                    crewl.add(c);
            }
            int i = 0;
            while (i < cast.size() && i < 4) {
                castl.add(cast.get(i));
                i++;
            }
            crew = crewl;
            cast = castl;
        }

        public static class CrewDTO{
            @JsonProperty("id")
            private int id;

            @JsonProperty("name")
            private String name;

            @JsonProperty("job")
            private String job;
        }
        public static class CastDTO{

            @JsonProperty("id")
            private int id;

            @JsonProperty("name")
            private String name;
        }
    }
}
