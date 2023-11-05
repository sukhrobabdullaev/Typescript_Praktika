import { ChangeEvent, useState } from "react";
import { IData } from "./interfaces";
import { data } from "./constants";

function App() {
  const [title, setTitle] = useState<string>("");
  const [arr, setArr] = useState<IData[]>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      desc: "desc",
    };
    console.log(newData);
    setArr([...arr, newData]);
    setTitle("");
  };

  const handleDel = (id: number): void => {
    const newData = arr.filter((c) => c.id != id);
    setArr(newData);
  };
  return (
    <main className="flex items-center flex-col justify-center h-screen w-full bg-cyan-500">
      <h1 className="mb-1 text-lg font-bold">TO DO APP</h1>
      <div className="flex items-center gap-10">
        <input
          type="text"
          placeholder="add todo"
          value={title}
          onChange={handleChange}
          className="border border-blue-400 p-2 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-300"
        >
          Add Todo
        </button>
      </div>
      <div>
        {arr.map((el) => (
          <div
            className="my-2 bg-black text-white flex items-center gap-4"
            key={el.id}
          >
            <p>{el.title}</p>
            <button className="text-red-500" onClick={() => handleDel(el.id)}>
              del
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
