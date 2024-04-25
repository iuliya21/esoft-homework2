import styles from "./compitenties.module.css";

// eslint-disable-next-line react/prop-types
function Compitenties({ title, children }) {
  return (
    <>
      <h2 className={styles.text}>{title}</h2>
      {children}
    </>
  );
}

export default Compitenties;
