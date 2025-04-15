const Home = () => {
  const { fakeApi } = useContext(fileContext);

  return (
    <div className="home">
      {fakeApi.map((item) => (
        <Link 
          to={`/${item.section}`} 
          className="image-card-link"
          key={item.id} // Prefer item.id over index
        >
          <div className="image-card">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto" }}
            />
            <p>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};