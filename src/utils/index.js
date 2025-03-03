export const getRandomBG = () => {
    const colors = [
        "#f6b100",
        "#2e4a40",
        "#664a04",
        "#f5f5f5",
        "#ababab",
        "#1f1f1f",
        "#383838",
        "#262626",
        "#f5f5f5",
        "#ababab",
        "#f6b100",
        "#2e4a40",
        "#664a04",
        "#f5f5f5",
        "#ababab",
        "#1f1f1f",
        "#383838",
        "#262626",
        "#f5f5f5",
        "#ababab",
    ];

    const color = colors[Math.floor(Math.random() * colors.length)];
    return "bg-[" + color+ "]";
}

export const getBgColor = () => {
    const bgarr = ['#b73e3e', '#5b45b0', '#7f167f', '#735f32', '#1d2569', '#285430'];
    const randomBg = Math.floor(Math.random() * bgarr.length);
    const color = bgarr[randomBg];
    return color

}