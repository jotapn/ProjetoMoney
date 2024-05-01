import {Image, View, Text, TextInput,TouchableOpacity } from "react-native";
import {styles} from "./cad-despesa.style.js"
import icons from "../../constants/icons.js"

const CadDespesa = () => {
    const handlerSalvar = () => {

        }
    const handlerExcluir = () => {

        }
    return <View style={styles.container}>


        <View style={styles.containerField}> 
            <Text style={styles.inputLabel}>Valor</Text>
            <TextInput placeholder="0,00" style={styles.inputValor}
                        defaultValue="0"
                        keyboardType="decimal-pad"/>
        </View>

        <View style={styles.containerField}>
            <Text style={styles.inputLabel}>Descrição</Text>
            <TextInput placeholder="Ex: Aluguel"
                        style={styles.inputText}
                        defaultValue=""/>
        </View>
        <View style={styles.containerField}>
            <Text style={styles.inputLabel}>Categoria</Text>
            <TextInput placeholder="Ex: Lazer"
                        style={styles.inputText}
                        defaultValue=""/>
        </View>

        <View style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn} onPress={handlerSalvar}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.containerDelete}>
            <TouchableOpacity onPress={handlerExcluir}>
                <Image source={icons.remove} style={styles.btnDelete}/>
            </TouchableOpacity>
        </View>
    </View>
}

export default CadDespesa;