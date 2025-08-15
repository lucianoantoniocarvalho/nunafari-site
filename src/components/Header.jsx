function Header() {
  return (
    <header style={{ backgroundColor: "#21A51F", padding: "10px" }}>
      <img
        src={`${import.meta.env.BASE_URL}assets/logo-nunafari-fundo-verde.png`}
        alt="Nuna Fari logo"
        style={{ height: "50px", verticalAlign: "middle" }}
      />
      <span style={{ color: "#fff", marginLeft: "10px" }}>
        Doing now. Doing the now.
      </span>
    </header>
  );
}

export default Header;
