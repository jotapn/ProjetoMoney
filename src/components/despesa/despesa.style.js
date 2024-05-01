import {COLORS,FONT_SIZE} from "../../constants/themes.js"


export const styles = {
    despesa: {
        backgroundColor: COLORS.gray,
        width: "100%",
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    containerIcon: {
        flex: 3,
    },
    containerCategoria: {
        flex: 11
    },
    containerValor: {
        flex: 6
    },
    despesaIcon: {
        width: 35,
        height: 35,
    },
    despesasTexto:{
    
    },
    despesasValor:{
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold",
        
    },
    despesaCategoria:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold"
    },
    despesaDescricao: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,        
    },
    despesaValor: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold",
        textAlign: "right"

    }
}