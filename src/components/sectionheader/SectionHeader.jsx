import style from "./sectionheader.module.css";

const SectionHeader = ({ title }) => {
  return (
    <header className={style.SectionHeader}>
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;
