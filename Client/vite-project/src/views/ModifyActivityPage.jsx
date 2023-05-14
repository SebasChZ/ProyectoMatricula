import chessImg from "../img/chess.png";

export function ModifyActivityPage() {
  return (
    <div className="flex h-screen">
      <div className="mt-8 flex w-full">
        <form className="w-full flex flex-col items-center">
          <input
            type="text"
            value="Torneo de ajedrez"
            className="text-4xl text-center"
          />
          <div className="flex w-full justify-between px-8">
            <div className="basis-4/6 pr-40">
              <textarea name="" id="" cols="45" rows="6"></textarea>
              <img src={chessImg} alt="Afiche" className=" max-h-64" />
              <div className="flex justify-between">
                <button>Subir imagen</button>
                <div>
                  <button>Cancelar</button>
                  <button>Guardar</button>
                </div>
              </div>
            </div>
            <div className="basis-2/6">
              <div>{/* fechas */}</div>
              <div>{/* selects */}</div>
              <div>
                {/* responsables */}
                <button>Añadir</button>
              </div>
              <div>{/* Recordatorios */}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
