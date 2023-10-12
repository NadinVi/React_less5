import { useTheme } from "../../contexts/theme";


function Panel({ title, children }) {
  const { theme } = useTheme();
  //console.log('Panel', theme);

  const className = `panel-${theme}`;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
    
  )
}

export default Panel;