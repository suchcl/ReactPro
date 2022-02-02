import React, { useContext } from 'react';
import theme from "../assetes/data/theme.json";

// 创建一个theme的Context
const ThemeContext = React.createContext(theme.dark);
// 在Toolbar组件中使用一个使用了theme的button组件
export default function ToolBar(props) {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

// 在ThemeButton中使用useContext获取当前主题
function ThemeButton() {
    const currentTheme = useContext(ThemeContext);

    return (
        <button style={{
            background: currentTheme.background,
            color: currentTheme.foreground
        }}>
            我使用了context设置的主题
        </button>
    )
}
