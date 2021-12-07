function PageWrapper(props) {
  return (
    <div>
      <div id="preloader">
        <img
          className="logo"
          src="images/uploads/logo.png"
          alt=""
          width="119"
          height="58"
        />
        <div id="status">
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <a href="#" className="close">
            x
          </a>
          <h3>Login</h3>
          <form method="post" action="#">
            <div className="row">
              <label for="username">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your User"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label for="password">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <div className="remember">
                <div>
                  <input type="checkbox" name="remember" value="Remember me" />
                  <span>Remember me</span>
                </div>
                <a href="#" className="pass">Forget password ?</a>
              </div>
            </div>
            <div className="row">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="row">
            <p>Or via social</p>
            <div className="social-btn-2">
              <a className="fb" href="#">
                <i className="ion-social-facebook"></i>Facebook
              </a>
              <a className="tw" href="#">
                <i className="ion-social-twitter"></i>twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="login-wrapper" id="signup-content">
        <div className="login-content">
          <a href="#" className="close">
            x
          </a>
          <h3>sign up</h3>
          <form method="post" action="#">
            <div className="row">
              <label for="username-2">
                Username:
                <input
                  type="text"
                  name="username"
                  id="username-2"
                  placeholder="Your User"
                  pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                  required="required"
                />
              </label>
            </div>

            <div className="row">
              <label for="email-2">
                your email:
                <input
                  type="password"
                  name="email"
                  id="email-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label for="password-2">
                Password:
                <input
                  type="password"
                  name="password"
                  id="password-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <label for="repassword-2">
                re-type Password:
                <input
                  type="password"
                  name="password"
                  id="repassword-2"
                  placeholder=""
                  pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  required="required"
                />
              </label>
            </div>
            <div className="row">
              <button type="submit" >sign up</button>
            </div>
          </form>
        </div>
      </div>

      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
              <div
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
              </div>
                <img
                  className="logo"
                  src="images/uploads/logo.png"
                  alt=""
                  width="80"
                  height="60"
                />
            </div>

            <div
              className="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li className="dropdown first">
                  <a href="/" className="btn btn-default">
                    Home
                  </a>
                </li>
                <li className="dropdown first">
                  <a href="/blog" className="btn btn-default lv1">
                    Blog
                  </a>
                </li>
                <li className="loginLink">
                  <a href="#">Log In</a>
                </li>
                <li className="btn signupLink">
                  <a href="#">Sign up</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="top-search">
            <select>
              <option value="united">TV show</option>
              <option value="saab">Others</option>
            </select>
            <input
              type="text"
              placeholder="Search for a movie, TV Show or celebrity that you are looking for"
            />
          </div>
        </div>
      </header>

      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1>Movies For You</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-single movie_list">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <label>Sort by:</label>
                <select>
                  <option value="popularity">Popularity Descending</option>
                  <option value="popularity">Popularity Ascending</option>
                  <option value="rating">Rating Descending</option>
                  <option value="rating">Rating Ascending</option>
                  <option value="date">Release date Descending</option>
                  <option value="date">Release date Ascending</option>
                </select>
              </div>

              {props.children}
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Search for movie</h4>
                  <form className="form-style-1" action="#">
                    <div className="row">
                      <div className="col-md-12 form-it">
                        <label>Movie name</label>
                        <input type="text" placeholder="Enter keywords" />
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Genres & Subgenres</label>
                        <div className="group-ip">
                          <select>
                            <option value="">Enter to filter genres</option>
                            <option value="">Action</option>
                            <option value="">Suspense</option>
                            <option value="">Romantic</option>
                            <option value="">Sci-Fi</option>
                            <option value="">Horror</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Rating Range</label>

                        <select>
                          <option value="">
                          10
                          </option>
                          <option value="">
                          9
                          </option>
                          <option value="">
                          8
                          </option>
                          <option value="">
                          7
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        <label>Release Year</label>
                        <div className="row">
                          <div className="col-md-6">
                            <select>
                              <option value="">---</option>
                              <option value="number">2000</option>
                              <option value="number">90's</option>
                              <option value="number">80's</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 ">
                        <input
                          className="submit"
                          type="submit"
                          value="submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="ads">
                  <img src="images/uploads/advertisement.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
                <img className="logo" src="images/uploads/film.png" alt="" width="50%" />
              <p>
                5th Avenue st, manhattan
                <br />
                New York, NY 10001
              </p>
              <p>
                Call us: <p>(+01) 202 342 6789</p>
              </p>
            </div>
            <div className="flex-child-ft item5">
              <h4>Newsletter</h4>
              <p>
                Subscribe to our newsletter system now <br /> to get latest news
                from us.
              </p>
              <form action="#">
                <input type="text" placeholder="Enter your email..." />
              </form>
              <a href="#" className="btn">
                Subscribe now <i className="ion-ios-arrow-forward"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-left">
            <p>
              Copyright &copy;
            </p>
          </div>
          <div className="backtotop">
            <p>
              <a href="#" id="back-to-top">
                Back to top <i className="ion-ios-arrow-thin-up"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PageWrapper;