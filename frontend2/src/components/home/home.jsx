import "./home.css";
import { useContext } from "react";
import { fileContext } from "../../context/context";
import { Link } from "react-router-dom";

const Home = () => {
  const { fakeApi } = useContext(fileContext);

  return (
    <main className="home">
      {fakeApi.map((item, index) => (
        <article key={index} className="image-card">
          <Link to={`/${item.section}`} aria-label={item.title}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              width="300"
              height="200"
            />
          </Link>
          <p>{item.title}</p>
        </article>
      ))}
    </main>
  );
};

export default Home;
