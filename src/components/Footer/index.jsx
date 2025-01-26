import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <p className={styles.text}>@ 2025 made with ❤️ by </p>
        <p className={styles.name}>Gabriel Vasconcelos</p>
      </div>
      <div></div>
    </footer>
  );
}
