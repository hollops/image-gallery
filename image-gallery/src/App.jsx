import "./App.css";
import Filter from "./categoryfilter";
import { useEffect, useState } from "react";
import { fetchImages } from "./services/pexelsApi";

const categories = {
  "All collections": "popular",
  Nature: "nature landscape",
  Cars: "luxury cars",
  Fashion: "fashion photography",
  Technology: "technology workspace",
  Animals: "wildlife animals",
  Architecture: "modern architecture",
};

function App() {
  const [images, setImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Nature");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadImages = async () => {
      try {
        setError("");
        const query = categories[activeCategory] || "nature";
        const data = await fetchImages(query);
        setImages(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load images right now. Please try again.");
      }
    };

    loadImages();
  }, [activeCategory]);

  return (
    <>
      <header>
        <nav className="nav-bar">
          <h1 className="nav-item">GALLERY</h1>
          <button className="nav-item1">inquire</button>
        </nav>
      </header>
      <main>
        <section>
          <div className="hero-1">
            <h2 className="hero-1a">Premium Image Showroom</h2>
            <p>
              A curated destination for high-end visual assets. Discover a
              world-class collection of photography, architectural wonders, and
              technical precision for professional creators.
            </p>
          </div>
          <div>
            <form className="search-form">
              <input
                type="search"
                name=""
                id="form"
                placeholder="Search Categories"
                className="search-input"
                aria-label="Search images"
              />

              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>
          <Filter
            categories={Object.keys(categories)}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </section>
        {error && <p className="error-message">{error}</p>}
        <div className="image-grid">
          {images.map((image) => (
            <img key={image.id} src={image.src.medium} alt={image.alt} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
