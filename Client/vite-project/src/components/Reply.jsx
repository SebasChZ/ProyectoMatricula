export function Reply() {
  return (
    <div className="mt-4 mb-4 flex">
      <img
        className="h-8 w-8 rounded-full"
        src="https://picsum.photos/id/1027/150/150"
      />
      <div className="ml-3">
        <p className="text-justify font-light">
          <span className="font-semibold">Fernanda Murillo Mata </span>
          Muy poco me parece a mi, pero bueno, algo es algo
        </p>
        <button className="font-thin text-gray-400">Responder</button>
      </div>
    </div>
  );
}
