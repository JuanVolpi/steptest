import { Titulo } from "@/lib/fonts";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="p-0 m-0 h-full w-full bg-white grid items-center justify-center capitalize">
      <h1
        style={Titulo.style}
        className="font-extrabold text-9xl p-0 m-0 rounded-md tracking-tighter animate-appearance-in text-blue-500"
      >
        StepTest.
      </h1>
      <hr className="w-2/3 text-fuchsia-500" />
    </div>
  );
}
