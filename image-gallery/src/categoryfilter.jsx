import "./filter.css";

export default function Filter({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav>
      <ul className="list">
        {categories.map((category) => {
          const itemClass =
            category === "All collections"
              ? "list-1"
              : category === "Animals"
              ? "list-2"
              : "";

          return (
            <li key={category} className={itemClass}>
              <button
                type="button"
                onClick={() => onCategoryChange(category)}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
