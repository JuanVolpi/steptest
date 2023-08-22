import { Titulo } from "@/lib/fonts";
import style from "@/styles/component/StepTestLogo.module.scss";

function changePage() {
  window.location.href = "/";
}

export default function StepTestLogo() {
  return (
    <h1 onClick={changePage} style={Titulo.style} className={style.wrapper}>
      StepTest.
    </h1>
  );
}
