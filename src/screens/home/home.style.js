import {COLORS,FONT_SIZE} from "../../constants/themes.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        padding: 20
    },
    logo: {
        width: 100,
        height: 30,
        backgroundColor: COLORS.white,
    },
    dashboard: {
        alignItems: "center",
        width: "100%",
        backgroundColor: COLORS.blue,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    dashboardValor: {
        color: COLORS.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"
        
    },
    dashboardText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.sm,
        
    },
    dashboardImage: {
        width: 35,
        height: 60,
    },
    despesasTitulo:{
        width: "100%",
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        marginTop: 15,
        fontWeight: "bold",
    },
    teste:{
        width: "100%"
    },
    btnAdd:{
        position: "absolute",
        bottom: 12,
    },
    btnAddImage:{
        width: 50,
        height: 50,
    },
    
}