import { Image, View, Text } from "react-native";
import icons from "../../constants/icons.js"
import {styles} from "./home.style.js";
import Despesas from "../../components/despesa/despesa.jsx";
import { ScrollView } from "react-native";

//function Home() {}
const Home = () => {
    return <View style={styles.container}>
        <Image source={icons.logo} style={styles.logo} />
        
        <ScrollView style={styles.teste} showsVerticalScrollIndicator={false}>
        <View style={styles.dashboard}>
            <View>
                <Text style={styles.dashboardValor}>R$ 5.000,00</Text>
                <Text style={styles.dashboardText}>Total de Gastos</Text>
            </View>
            <Image style={styles.dashboardImage} source={icons.money}/>
        </View>

            <View >
                <Text style={styles.despesasTitulo}>Despesas</Text>
                <Despesas/>
                <Despesas/>
                <Despesas/>
                <Despesas/>
                <Despesas/>
                <Despesas/>
                <Despesas/>
                <Despesas/>
                <Despesas/>
                <Despesas/>
                
            </View>
        </ScrollView>
    
    </View>
}

export default Home;