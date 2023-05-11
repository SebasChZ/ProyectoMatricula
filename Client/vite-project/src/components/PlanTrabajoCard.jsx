// import React, { useContext } from "react";

export const PlanTrabajoCard = () => {
  // const { planTrabajoName, fecha, actividades } = props.data;
  //   const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  //     useContext(ShopContext);

  return (
    <div className="min-w-[420px] max-w-[480px] max-h-72 h-full p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex justify-between">
        <div className="flex place-content-center h-20 w-20 rounded-full bg-indigo-100">
          <div className="flex flex-col place-content-center">
            <span className="text-center text-4xl text-indigo-400 font-semibold">
              09
            </span>
            <span className="text-center text-xl text-indigo-400 font-medium">
              APR
            </span>
          </div>
        </div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-normal tracking-tight text-end">
            Plan Cartago I 2023
          </h5>
        </a>
      </div>
      <div className="flex mt-4 flex-row justify-between">
        <div className="basis-9/12">
          <span>Actividades</span>
          <p className="mb-3 font-normal text-gray-400">
            1. Charla sobre blockchain
            <br />
            2. Actividad recreativa
            <br />
            3. Juegos en conjunto
            <br />
            4. Torneo de ajedrez
          </p>
        </div>
        <div className="flex items-end">
          <a
            href="#"
            className="max-h-[36px] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-indigo-400 bg-indigo-100 rounded-lg hover:bg-indigo-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-800"
          >
            Ver
          </a>
        </div>
      </div>
    </div>
  );
};
