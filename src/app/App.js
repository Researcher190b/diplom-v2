function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-10">Корзина</h2>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(img/pd.png" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20">
              <p className="mb-5">Видеокарта GeForce RTX 4090</p>
              <b>300 000 руб.</b>
            </div>
            <img
              className="cartItemRemove"
              src="img/btn-remove.svg"
              alt="remove"
            />
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/cpu.svg" alt="logo-cpu" />
          <div className="mr-30">
            <h3 className="text-uppercase">React Electronics</h3>
            <p>Интернет-магазин</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/basket.svg" alt="basket" />
            <span> 0 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <br />
      <div className="content p-40">
        <div>
          <div className="d-flex align-center justify-between mb-40">
            <h1>Список товаров</h1>
            <div className="search-block d-flex">
              <img width={18} height={18} src="/img/search.svg" alt="search" />
              <input placeholder="Поиск ..." />
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorit">
              <img src="/img/heart.svg" alt="heart" />
            </div>
            <img width={110} height={90} src="card/pd.png" alt="Card" />
            <h5>GeForce RTX 4090</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>300 000 руб.</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={110} height={90} src="card/pd.png" alt="Card" />
            <h5>GeForce RTX 4090</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>300 000 руб.</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={110} height={90} src="card/pd.png" alt="Card" />
            <h5>GeForce RTX 4090</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>300 000 руб.</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={110} height={90} src="card/pd.png" alt="Card" />
            <h5>GeForce RTX 4090</h5>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column align-center">
                <span>Цена:</span>
                <b>300 000 руб.</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
