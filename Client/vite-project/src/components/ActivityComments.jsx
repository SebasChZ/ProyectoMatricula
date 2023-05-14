import chessImg from "../img/chess.png";
import { Comment } from "./Comment";
import SendIcon from "@mui/icons-material/Send";

export function ActivityComments() {
  return (
    <>
      <div className="flex justify-center w-full h-[650px]">
        <div className="basis-1/2">
          <img src={chessImg} className="h-[650px] w-full object-cover" />
        </div>
        <div className="bg-white px-4 basis-1/2">
          <div className="flex justify-between mt-4 border-b-2">
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
                </div>
                <span className="text-gray-600 text-xs block">LI-08</span>
              </div>
            </div>
          </div>
          <div className="overflow-auto max-h-[475px] scrollable pr-2">
            <div className="mt-4 mb-4 flex">
              <img
                className="h-8 w-8 rounded-full"
                src="https://picsum.photos/id/1027/150/150"
              />
              <p className="text-justify font-light ml-3">
                <span className="font-semibold">Fernanda Murillo Mata </span>
                Me complace anunciarles que se desarrollará un torneo de ajedrez
                a principios de este primer semestre 2023, donde el ganador se
                llevará 20mil colones en efectivo. No se lo pierdan!!
              </p>
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm ml-1 block border-y-2 py-2 font-thin text-gray-400 w-full">
              16 Feb 2023
            </span>
            <div className="flex justify-between">
              <input
                type="text"
                className="focus:outline-none basis-11/12"
                placeholder="Añadir comentario..."
              />
              <button>
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
