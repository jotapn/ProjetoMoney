import { Image, View, Text } from "react-native";
import icons from "../../constants/icons.js"
import {styles} from "./home.style.js";

//function Home() {}
const Home = () => {
    return <View style={styles.container}>
        <Image source={icons.logo} style={styles.logo} />
        
        <View style={styles.dashboard}>
            <View>
                <Text style={styles.dashboardValor}>R$ 5.000,00</Text>
                <Text style={styles.dashboardText}>Total de Gastos</Text>
            </View>
            <Image style={styles.dashboardImage} source={icons.money}/>
        </View>
        
        <View>
            <Text style={styles.despesasTitulo}>Despesas</Text>
            
        </View>
    </View>
}

export default Home;