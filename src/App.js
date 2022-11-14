// import "bootstrap/dist/css/bootstrap.css";
import GroceryBasket from "./svg/groceryBasket";
import Logo from "./svg/logo";
import Plas from "./svg/plas";
import ProfileUser from "./svg/profileUser";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <Logo />
          <div className="mr-30">
            <h3 className="text-uppercase">React Electronics</h3>
            <p>Интернет-магазин</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <GroceryBasket />
            <span> 0 руб.</span>
          </li>
          <li>
            <ProfileUser />
          </li>
        </ul>
      </header>
      <br />
      <div className="content p-40">
        <h1 className="mb-40">Список товаров</h1>

        <div className="d-flex">
          <div className="card">
            <img
              width={120}
              height={110}
              src="/img/card/RTX4090.jpg"
              alt="Card"
            />
            <h5>Asus ROG Strix GeForce RTX 4090 24GB GDDR6X</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>300 000 руб.</b>
              </div>
              <button className="button">
                <Plas />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={120}
              height={110}
              src="/img/card/RTX4090.jpg"
              alt="Card"
            />
            <h5>Asus ROG Strix GeForce RTX 4090 24GB GDDR6X</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>300 000 руб.</b>
              </div>
              <button className="button">
                <Plas />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={120}
              height={110}
              src="/img/card/RTX4090.jpg"
              alt="Card"
            />
            <h5>Asus ROG Strix GeForce RTX 4090 24GB GDDR6X</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>300 000 руб.</b>
              </div>
              <button className="button">
                <Plas />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={120}
              height={110}
              src="/img/card/RTX4090.jpg"
              alt="Card"
            />
            <h5>Asus ROG Strix GeForce RTX 4090 24GB GDDR6X</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>300 000 руб.</b>
              </div>
              <button className="button">
                <Plas />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
