import { Titulo } from "@/lib/fonts";
import style from "@/styles/component/StepTestLogo.module.scss";

export default function StepTestLogo() {
  return (
    <h1 style={Titulo.style} className={style.wrapper}>
      StepTest.
    </h1>
  );
}
