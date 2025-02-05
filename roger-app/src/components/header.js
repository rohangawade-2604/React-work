const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" ><i class="fa-solid fa-user pe-3"></i>I'm Rohan Gawade</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto ">
                        <li class="nav-item">
                            <a class="nav-link " href="#">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link " href="#">Experience</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link " href="#">Skills</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link " href="#">Project</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link " href="#">Contact</a>
                        </li>


                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        
    );
}
export default Header;
 