import {COLORS,FONT_SIZE} from "../../constants/themes.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20
    },
    containerField: {
        marginBottom: 40,
    },
    inputLabel: {
        fontSize: FONT_SIZE.xsm,
        color: COLORS.medium_gray
    },
    inputValor: {
        fontSize: FONT_SIZE.xl,
        borderBottomColor: COLORS.medium_gray,
        borderBottomWidth: 2,
        fontWeight: "bold",
        padding: 5,
        placeholderTextColor: COLORS.medium_gray
    },
    inputText:{
        fontSize: FONT_SIZE.md,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 2,
        padding: 5,
        placeholderTextColor: COLORS.medium_gray
    },
    containerBtn: {
        alignItems: "flex-end"
    },
    btn: {
        backgroundColor: COLORS.blue,
        borderRadius: 6,
        padding: 10,
        width: 150
    },
    btnText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.md,
        textAlign: "center"
    },
    containerDelete:{
        alignItems: "center",
        marginTop: 50
    },
    btnDelete: {
        width: 50,
        height: 50
    }


}