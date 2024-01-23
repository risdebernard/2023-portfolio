
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function AboutPage() {

  return (
    <div>
      <Header title="About" />
      <p>About page information.</p>
    </div>
  );
}