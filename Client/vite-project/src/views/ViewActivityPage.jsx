import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import chessImg from "../img/chess.png";
import { ActivityComments } from "../components/ActivityComments";
import Modal from "../components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ViewActivityPage() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        children={<ActivityComments />}
        title={""}
      ></Modal>
      <div className="p-4 flex justify-center items-center w-full h-screen">
        <div className="bg-white rounded-sm max-w-2xl">
          <div className="flex justify-between">
            <div className="flex items-center py-3">
              <img
                className="h-8 w-8 rounded-full"
                src="https://picsum.photos/id/1027/150/150"
              />
              <div className="ml-3 ">
                <div className="flex flex-row">
                  <span className="font-semibold antialiased block leading-tight">
                    Fernanda Murillo Mata
                  </span>
                  <span className="text-sm font-light ml-1">• 16 Feb 2023</span>
                </div>
                <span className="text-gray-600 text-xs block">LI-08</span>
              </div>
            </div>
            <Link to="/modificar-actividad" className="py-3">
              <MoreHorizIcon />
            </Link>
          </div>
          <img src={chessImg} className="rounded-2xl" />
          <div className="mt-4 mb-4">
            <p className="text-justify font-light">
              <span className="font-semibold">Fernanda Murillo Mata </span>
              Me complace anunciarles que se desarrollará un torneo de ajedrez a
              principios de este primer semestre 2023, donde el ganador se
              llevará 20mil colones en efectivo. No se lo pierdan!!
            </p>
          </div>
          <button
            onClick={openModal}
            className="text-white text-sm font-light bg-blue-950 px-6 rounded-3xl h-10"
          >
            Ver comentarios
          </button>
        </div>
      </div>
    </>
  );
}
