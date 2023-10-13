import React from "react";
import { useTheme } from "../../contexts/theme";

const PanelTheme = () => {
  //   const [theme, setTheme] = useState('blue');

  //   const handleChangeTheme = (event) => {
  //     setTheme(event.target.checked ? 'pink' : 'blue')
  //   }
  const { theme, onChangeTheme } = useTheme();

  return (
    <>
      <label className="check_theme">
        <input
          type="checkbox"
          checked={theme === 'pink'}
          onChange={onChangeTheme}
        />
        Pink theme
      </label>
    </>
  );
};

export default PanelTheme;
