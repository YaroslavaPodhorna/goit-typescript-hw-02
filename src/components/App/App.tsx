import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "../../types";

const API_KEY = "iShxM2emJPHjdrzU9HiKqc7umEc94uvGxRyZPA3xkAQ";
const BASE_URL = "https://api.unsplash.com/search/photos";

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  function openModal(image: Image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedImage(null);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setError(null);
        setLoading(true);

        const response = await axios.get<{ results: Image[] }>(BASE_URL, {
          params: { query, page, per_page: 12 },
          headers: { Authorization: `Client-ID ${API_KEY}` },
        });

        setImages((prev) => [...prev, ...response.data.results]);
      } catch (err) {
        setError("Failed to fetch images. Try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        isOpen={isOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
