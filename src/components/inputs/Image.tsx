export type ImagemProps = {};

export default function ImageUpload(props: ImagemProps) {
  return (
    <>
      <label htmlFor="imagem">Carregamento da Imagem</label>
      <input
        type="image"
        id="imagem"
        name="imagem"
        accept="image/png, image/jpeg, image/svg"
      />
    </>
  );
}
