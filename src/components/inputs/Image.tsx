import {
  LockClosedIcon,
  LockOpenIcon,
  PhotoIcon,
} from "@heroicons/react/20/solid";
import { useRef, useState } from "react";

export type ImagemProps = {};

export default function ImageUpload(props: ImagemProps) {
  const [locked, setLocked] = useState(false);

  const refImg = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-1.5">
      <h3 className="flex flex-row gap-2.5 items-center font-semibold tracking-tight text-blue-400">
        <label
          htmlFor="imagem"
          className="font-semibold tracking-tight text-blue-400"
        >
          Carregamento da Imagem
        </label>
        <button
          onClick={() => setLocked(!locked)}
          className="p-1 rounded"
          style={{
            backgroundColor: locked
              ? "rgba(225, 0, 0, 0.22)"
              : "rgba(0, 225, 0, 0.22)",
          }}
        >
          {locked ? (
            <LockClosedIcon className="w-4 h-4 text-red-500" />
          ) : (
            <LockOpenIcon className="w-4 h-4  text-green-500" />
          )}
        </button>
      </h3>
      <main className="">
        <label
          className="border-2 rounded-lg border-blue-300 inline-flex gap-2 items-center p-3 bg-blue-100 text-blue-500 cursor-pointer transition-all ease-in-out duration-250 absolute top-auto hover:border-b-4 hover:-translate-y-0.5 active:translate-y-0.5"
          htmlFor="imagem"
          about="Carregar uma imagem"
        >
          <input
            disabled={locked}
            className="hidden"
            type="file"
            id="imagem"
            name="imagem"
            accept="image/png, image/jpeg, image/svg"
            required
            ref={refImg}
          />
          <PhotoIcon className="w-6 h-6" />
          Escolher Imagem
        </label>
      </main>
    </div>
  );
}
