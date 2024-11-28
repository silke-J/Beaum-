import SectionText from "../components/sectiontext/SectionText";
import styles from "../style/pages/about.module.css";
const About = () => {
  return (
    <article className={styles.about}>
      <h1>About</h1>
      <div className={styles.text}>
        <SectionText text="Jeg synes under processen af hjemmesiden og alt var meget nem at komme i gang med fordi der var mange af de ting vi redder havet lavet men det var bare med at få sat alting op rigtig med det rigtige ting" />
        <SectionText text="Til store problem jeg har haft er at få kategorien beauty til at komme frem men jeg har også haft mange problemer med mine hætterebilleder er de så virkelig pæn ud i mobil Men ikke særlig pæn ude i computerudgaven" />
        <SectionText text="Til næste gang vil jeg også gerne have haft parfumer så for parfumer ind så det hænger jeg bedre sammen med hjemmesiden ved der er hjemmesiden logo og headerbilleder er med parfume" />
        <SectionText text="Jeg vil gerne have lavet en Footer. For jeg synes den mangler sin footer og så vil jeg også gerne have arbejde lidt mere med stylingen får jeg synes ikke rigtigt den er pæn så jeg gøre den skulle se ud." />
      </div>
    </article>
  );
};
export default About;
