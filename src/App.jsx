import "./App.css";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <main>
      <ProfileCard
        name="Jane"
        role="Developer"
        imageUrl="images/headshot.jpg"
        imageAltText="A headshot of woman with brown hair"
        skills={["HTML", "CSS", "JavaScript"]}
      />
    </main>
  );
}

export default App;
