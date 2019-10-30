import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./app.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // getMovies = async()=>{
  //   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  // }

  async componentDidMount() {
    // this.getMovies();
    const {
      data: {
        data: { movies }
      } // es6
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); // json형태의 영화값들을 다 불러오고 data.data.movies안의 20개의 영화 리스트를 저장
    this.setState({ movies, isLoading: false }); // state 안의 movies 에 넣고 isLoading 값을 false로 변경
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? ( // componentDidMount를 다 처리할 때 까지 삼항연산자로 Loading을 화면에 보여줌 * lifecycle : render -> componentDidMount
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres} // Movie.js의 틀을 사용해 값을 나타낸다.
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
