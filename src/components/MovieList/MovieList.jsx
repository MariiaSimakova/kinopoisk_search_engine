import { Button, Modal } from "antd";
import imgNotFound from "../../common/assets/imgNotFound.jpg";
import { useState } from "react";
import "../MovieList/movieList.scss";

function MovieList({
  nameRu,
  posterUrlPreview,
  year,
  filmLength,
  rating,
  countries,
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const country = countries.map((i) => i.country);

  return (
    <>
      <div className="movie-card" onClick={handleShow}>
        <img
          className="movie-card-poster"
          src={posterUrlPreview ? posterUrlPreview : imgNotFound}
          alt="poster"
        />
        <h3 className="movie-card-title">{nameRu}</h3>
      </div>
      <Modal
        open={show}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
            Закрыть
          </Button>,
        ]}
      >
        <img
          className="modal-img"
          src={posterUrlPreview ? posterUrlPreview : imgNotFound}
          alt="poster"
        />
        <p className="modal-name">{nameRu}</p>
        <p>Год: {year}</p>
        <p>Время: {filmLength}</p>
        <p>Рейтинг: {rating}</p>
        <p>Страна: {country.join(", ")}</p>
      </Modal>
    </>
  );
}
export default MovieList;
