import { TextStyle } from "react-native/types";

const size = {
    xs: 10,
    sm:12,
    default: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 30,
}
const weight: {[key: string]: TextStyle["fontWeight"]} = {
    fill: "900",
    semi: "600",
    bold: 'bold',
    normal: "normal",
    this: "400"
}
export default {size, weight};