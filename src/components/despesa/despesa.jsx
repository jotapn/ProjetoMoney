import { View, Text, Image } from "react-native";
import {styles} from "./despesa.style.js"
import icons from "../../constants/icons.js";

const Despesas = () => {
    return (
    <View style={styles.despesa}>
            <View style={styles.containerIcon}>
                <Image style={styles.despesaIcon} source={icons.car}/>
            </View>

            <View style={styles.containerCategoria}>
                <Text style={styles.despesaCategoria}>Carro</Text>
                <Text style={styles.despesaDescricao}>Pagamento IPVA</Text>
            </View>

            <View style={styles.containerValor}>
                <Text style={styles.despesaValor}>R$ 2.500,00</Text>
                
            </View>
    </View>

    )
}

export default Despesas;