import React from "react";
import Form from "../../components/Form/Form";
import { useTheme } from "../../contexts/theme";

const PanelContainer = () => {
//   const [theme, setTheme] = useState('blue');

//   const handleChangeTheme = (event) => {
//     setTheme(event.target.checked ? 'pink' : 'blue')
//   }
  const { theme, onChangeTheme } = useTheme();

  return (
    <>
    <Form/>
      <label>
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

export default PanelContainer;
