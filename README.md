## Learning Objectives

- The layout of React project
- What are props, why and how to use them.
- Passing props down to child components.

## Project setup

1. Navigate to the directory where you want to create your project.
2. Run `npm create vite@latest`
3. Name your project `profile-card`
4. Select: _**React**_
5. Select: _**JavaScript**_
6. Follow terminal instructions
7. Run `npm run dev` to ensure the project dev server starts correctly.
8. Delete everything in:
   1. `src/App.css`
   2. `src/App.jsx`
   3. `src/index.css`
9. Create a `components` directory within `src`
10. Create another directory within `components` named `ProfileCard.
11. Create a directory within `public` named `images` and add the example headshot.

## The ProfileCard component

1.  Create a new file in `components/ProfileCard` named `ProfileCard.jsx`
2.  Declare four props on `ProfileCard.jsx`:
    1. name
    2. role
    3. imageUrl
    4. imageAltText
    5. Skills
3.  Create your mark up to display the name, role, image, and skills with the values passed in from props.

## Using the ProfileCard component

1. In `App.jsx` create another component called `App`
2. Import `ProfileCard`
3. Use `ProfileCard` in the return statement, passing in example props values for `name`, `role`, and `imageUrl`, and `imageAltText`.

## Add styling the the ProfileCard

1. Create another file within `components/ProfileCard` named `ProfileCard.module.css
2. At the top of `ProfileCard.jsx` import the styles by adding `import styles from './ProfileCard.module.css`.
3. Add the example styles (or create the styles yourself if you like) into the stylesheet. Apply the styles to the relevant markup elements by using `className={styles.<CLASS NAME>}`

## Additional steps
1. Add a second profile card to `main.jsx` with different props and photos.
