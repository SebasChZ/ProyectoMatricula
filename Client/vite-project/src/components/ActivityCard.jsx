// import React, { useContext } from "react";
import chessImg from "../img/chess.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

export const ActivityCard = () => {
  // const { planTrabajoName, fecha, actividades } = props.data;
  //   const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  //     useContext(ShopContext);

  return (
    <div className="h-full max-h-72 min-w-[320px] rounded-lg border border-gray-200 bg-white p-6 shadow">
      <div className="flex flex-row">
        <div className="flex basis-11/12 flex-col">
          <a href="#">
            <h5 className="mb-2 font-normal tracking-tight text-lg">
              Torneo de ajedrez
            </h5>
          </a>
          <span className="font-extralight">Sede Cartago</span>
          <div className="my-4">
            <img src={chessImg} alt="activityImg" className="rounded-lg w-60" />
          </div>
          <div>
            <span className="font-regular">2:30 p.m.</span>
            <span className="ml-2 font-extralight">16 Feb 2023</span>
          </div>
        </div>
        <div className="flex justify-end ml-6">
          <div className="flex flex-col justify-between">
            <button className="text-blue-500">
              <MoreVertIcon />
            </button>
            <Link className="text-green-500" to="/view-activity">
              Ver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
