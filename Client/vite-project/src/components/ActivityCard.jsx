// import React, { useContext } from "react";
import chessImg from "../img/chess.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ActivityCard = () => {
  // const { planTrabajoName, fecha, actividades } = props.data;
  //   const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  //     useContext(ShopContext);

  return (
    <div class="h-full max-h-72 min-w-[320px] rounded-lg border border-gray-200 bg-white p-6 shadow">
      <div class="flex flex-row">
        <div class="flex basis-11/12 flex-col">
          <a href="#">
            <h5 class="mb-2 font-normal tracking-tight text-lg">
              Torneo de ajedrez
            </h5>
          </a>
          <span class="font-extralight">Sede Cartago</span>
          <div className="my-4">
            <img src={chessImg} alt="activityImg" class="rounded-lg" />
          </div>
          <div>
            <span class="font-regular">2:30 p.m.</span>
            <span class="ml-2 font-extralight">16 Feb 2023</span>
          </div>
        </div>
        <div class="flex justify-end ml-6">
          <div class="flex flex-col justify-between">
            <button className="text-blue-500">
              <MoreVertIcon />
            </button>
            <button class="text-green-500">Ver</button>
          </div>
        </div>
      </div>
    </div>
  );
};
