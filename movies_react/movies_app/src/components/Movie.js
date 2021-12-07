function Movie(props) {
  return (
    <div className="movie-item-style-2">
      <img src={props.img} alt="" />
      <div className="mv-item-infor">
        <h6>
          <a href="#">
            {props.title}
          </a>
        </h6>
        <p className="rate">
          <i className="ion-android-star"></i>
          <span>{props.rating}</span> /10
        </p>
        <p className="describe">{props.description}</p>

        <p className="run-time">
          Run Time: {props.runtime}<span>MMPA: PG-13 </span>
          <span>Release: {props.release}</span>
        </p>
        <p>
          Director: <a href=""> {props.director} </a>
        </p>
        <p>
          Stars: <a href="#"> {props.cast} </a>  
        </p>
      </div>
    </div>
  );
}

export default Movie;
