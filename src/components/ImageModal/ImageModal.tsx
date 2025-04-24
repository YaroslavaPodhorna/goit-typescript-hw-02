import Modal from "react-modal";
import { ImageModalProps } from "../../types";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  closeModal,
  image,
}: ImageModalProps) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={closeModal}>
        ×
      </button>
      <img
        className={css.image}
        src={image.urls.regular}
        alt={image.description || "Image description not available"}
      />
      <p className={css.text}>
        <strong>Author:</strong> {image.user.name}
      </p>
      <p className={css.text}>
        <strong>Likes:</strong> {image.likes}
      </p>
    </Modal>
  );
}
