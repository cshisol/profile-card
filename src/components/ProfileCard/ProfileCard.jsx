import styles from "./ProfileCard.module.css";

export function ProfileCard({ name, role, imageUrl, imageAltText }) {
  return (
    <article
      className={styles.profileCard}
      aria-labelledby={`${name}-card-heading`}
    >
      <h2 id={`${name}-card-heading`} className={styles.heading}>
        {name}
      </h2>
      <p className={styles.role}>{role}</p>
      <img src={imageUrl} className={styles.headshot} alt={imageAltText} />
    </article>
  );
}
