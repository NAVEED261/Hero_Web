import React from "react";

interface IBook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Cards = async () => {
  let res = await fetch("https://simple-books-api.glitch.me/books");

  let books: IBook[] = await res.json();

  return (
    <div className="flex flex-wrap">
      {books.map((book) => {
        return (
          <div key={book.id} className="w-1/2 p-4">
            <div className="border rounded-lg overflow-hidden bg-gray-200 shadow-md hover:shadow-lg font-sans hover:font-serif">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{book.name}</h2>
                <p className="text-gray-700">{book.type}</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
                Purchase
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
