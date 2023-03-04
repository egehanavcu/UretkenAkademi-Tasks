import React, { useEffect, useState } from "react";
import Table from "./Table";

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  const changeHandler = (event) => {
    setFilteredCoins(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const renderedData = data.map((fetchedData) => {
          return {
            icon: <img src={fetchedData.image} width="20px" height="20px" />,
            name: fetchedData.name,
            symbol: fetchedData.symbol.toUpperCase(),
            current_price: `$ ${fetchedData.current_price}`,
            price_change_percentage_24h: (
              <span
                style={{
                  color:
                    fetchedData.price_change_percentage_24h < 0
                      ? "red"
                      : "green",
                }}
              >
                {fetchedData.price_change_percentage_24h} %
              </span>
            ),
          };
        });
        setCoins(renderedData);
        setFilteredCoins(renderedData);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Crypto Tracker",
        columns: [
          {
            Header: "Icon",
            accessor: "icon",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Symbol",
            accessor: "symbol",
          },
          {
            Header: "Price",
            accessor: "current_price",
          },
          {
            Header: "Price Change",
            accessor: "price_change_percentage_24h",
          },
        ],
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Crypto Coin"
        onChange={changeHandler}
      />
      <div style={{ margin: "1rem" }} />
      <Table columns={columns} data={filteredCoins} />
    </React.Fragment>
  );
}

export default App;
