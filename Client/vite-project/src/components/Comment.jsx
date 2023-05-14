import { Reply } from "./Reply";

export function Comment() {
  return (
    <div className="mt-4 mb-4 flex">
      <img
        className="h-8 w-8 rounded-full"
        src="https://picsum.photos/id/1027/150/150"
      />
      <div className="ml-3">
        <p className="text-justify font-light">
          <span className="font-semibold">Fernanda Murillo Mata </span>
          Está excelente don fernando, me parece muy bien para incentivar a los
          chicos!! Ese premio se ve muy tentador
        </p>
        <button className="font-thin text-gray-400">Responder</button>
        <div className="ml-3">
          <Reply />
        </div>
      </div>
    </div>
  );
}
