import { ImageCardProps } from "../../types";

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <img
      src={image.urls.small}
      alt={image.alt_description || "Image description not available"}
    />
  );
}
