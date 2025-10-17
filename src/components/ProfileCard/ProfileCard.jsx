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
