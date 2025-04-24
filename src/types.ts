export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string | null;
  description: string | null;
  user: {
    name: string;
  };
  likes: number;
}

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  image: Image | null;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface ErrorMessageProps {
  message: string;
}

export interface ImageCardProps {
  image: Image;
}
