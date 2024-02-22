
const Navbar = () => {
    return (
        <header >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
    <img src="../assets/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="Mateados"/>
    Mateados
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Mates</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Termos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Bombillas</a>
      </li>
    </ul>
    <tr>
				<th scope="row" colspan="5">Carrito vacío</th>
			  </tr>
  </div>
</nav>
        </header>
    )
}

export default Navbar 