# Profile Card: React Code-Along

Build the profile card in this project one small step at a time. The finished example displays a person's name, photo, role, and skills. Along the way, we will use JSX, components, props, arrays, CSS Modules, and semantic HTML.

## Learning goals

- Recognize the main parts of a small React project.
- Build and render a React component.
- Pass data into a component with props.
- Render a list from an array and give each item a key.
- Apply component-specific styles with a CSS Module.

## Before the workshop

You will need Node.js and npm installed. Open a terminal in this project folder and install the project dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open the local URL printed in the terminal. Vite keeps the page updated as you save changes. Keep the server running during the code-along; use `Ctrl+C` in the terminal when you are finished.

The starter is already a Vite + React project. `src/main.jsx` mounts the `App` component, and the example photo is in `public/images/headshot.jpg`. Files in `public` are served from the site root.

## 1. Create the component

Create `src/components/ProfileCard/ProfileCard.jsx`. Create the folders if they do not exist. Start with a component that accepts the person's information as props:

```jsx
export function ProfileCard({ name, role, imageUrl, imageAltText, skills }) {
  return (
    <article>
      <h2>{name}</h2>
      <img src={imageUrl} alt={imageAltText} />
      <p>{role}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
```

`ProfileCard` is a function component. The values inside its parameter are props: inputs supplied by the component that renders it. `skills` is an array, so `map` turns each skill into a list item. The `key` helps React keep track of list items when a list changes.

## 2. Render the component

Open `src/App.jsx`. Import `ProfileCard` and render it inside the existing `<main>` element. Replace the file contents with:

```jsx
import "./App.css";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <main>
      <ProfileCard
        name="Jane"
        role="Developer"
        imageUrl="images/headshot.jpg"
        imageAltText="A headshot of a woman with brown hair"
        skills={["HTML", "CSS", "JavaScript"]}
      />
    </main>
  );
}

export default App;
```

Save both files and check the browser. You should see the name, photo, role, and three skills. Try changing a prop value and notice that the card updates without changing `ProfileCard` itself. That separation between the component and its data is the useful part of props.

## 3. Add accessible structure

The card is an independent piece of content, so use an `<article>`. Give its heading an `id`, then connect the article to that heading with `aria-labelledby`. The image's `alt` text should describe the photo for people who cannot see it. Replace the component markup with this version; the props stay the same:

```jsx
export function ProfileCard({ name, role, imageUrl, imageAltText, skills }) {
  return (
    <article aria-labelledby={`${name}-card-heading`}>
      <h2 id={`${name}-card-heading`}>{name}</h2>
      <img src={imageUrl} alt={imageAltText} />
      <p>{role}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
```

The template literal inserts `name` into the heading ID. The article's `aria-labelledby` points to that heading, giving the article an accessible name.

## 4. Add a CSS Module

Create `src/components/ProfileCard/ProfileCard.module.css`. CSS Modules let this component use class names without accidentally applying those styles to unrelated components. Add the card styles:

```css
.profileCard {
  display: inline-block;
  padding: 20px;
  border: 1px solid rgb(223, 222, 222);
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
}

.heading,
.role,
.skillsList {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.heading {
  margin-top: 0;
  font-size: 2rem;
}

.headshot {
  display: block;
  height: 200px;
  width: auto;
  border-radius: 100vw;
}

.role {
  font-size: 1.25rem;
  font-weight: 600;
}

.skillsList {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.skill {
  padding: 0;
  font-weight: 200;
}
```

Import the module at the top of `ProfileCard.jsx`:

```jsx
import styles from "./ProfileCard.module.css";
```

Apply the imported class names to the matching elements. Your finished `ProfileCard.jsx` should be:

```jsx
import styles from "./ProfileCard.module.css";

export function ProfileCard({ name, role, imageUrl, imageAltText, skills }) {
  return (
    <article
      className={styles.profileCard}
      aria-labelledby={`${name}-card-heading`}
    >
      <h2 id={`${name}-card-heading`} className={styles.heading}>
        {name}
      </h2>
      <img src={imageUrl} className={styles.headshot} alt={imageAltText} />
      <p className={styles.role}>{role}</p>
      <ul className={styles.skillsList}>
        {skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
```

In JSX, use `className` rather than the HTML `class` attribute. `styles.profileCard` refers to the locally scoped `.profileCard` class in the CSS Module.

## 5. Check the finished example

The browser should show a circular headshot, name, role, and an unbulleted list of skills. Confirm the component still updates when you change the props in `App.jsx`.

You can also run the project's checks from a terminal:

```sh
npm run lint
npm run build
```

If the image is missing, check that the file is named `headshot.jpg` and is inside `public/images`. If the page is blank, check the browser console and terminal for a missing import or a JSX syntax error.

## Try next

- Render a second `ProfileCard` with different prop values.
- Add another skill to the array.
- Change the role or image alt text and observe what changes.
- Try a longer name and consider what styling might need to adapt.
