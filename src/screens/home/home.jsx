import { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import icons from "../../constants/icons.js"
import {styles} from "./home.style.js";
import Despesas from "../../components/despesa/despesa.jsx";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-web";

//function Home() {}
const Home = (props) => {

    const [total, setTotal] = useState(0);
    const [despesas, setDespesas] = useState([]);

    const openDespesa = (id) => {
        props.navigation.navigate("despesas")
    }

    const listarDespesas = () => {
        //simular acesso a API...
        const dados = [
            {id:1, icon: icons.car, categoria: "Carro", descricao: "Pagamento IPVA", valor: 1500},
            {id:2, icon: icons.carrinho, categoria: "Mercado", descricao: "Compras do Mês", valor: 500},
            {id:3, icon: icons.home, categoria: "Casa", descricao: "Aluguel", valor: 2500},
            {id:4, icon: icons.car, categoria: "Carro", descricao: "Gasolina", valor: 150},
            {id:5, icon: icons.estudos, categoria: "Educação", descricao: "Mensalidade Curso", valor: 100},
        ];

        let soma = 0;
        for (var i=0; i < dados.length; i++)
            soma = soma + dados[i].valor;


        setTotal(soma);
        setDespesas(dados);
    }

    useEffect(() => {
        listarDespesas();
    }, []);

    return <View style={styles.container}>
        <Image source={icons.logo} style={styles.logo} />
        
        <View style={styles.dashboard}>
            <View>
                <Text style={styles.dashboardValor}>R$ {total.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</Text>
                <Text style={styles.dashboardText}>Total de Gastos</Text>
            </View>
            <Image style={styles.dashboardImage} source={icons.money}/>
        </View>

        <ScrollView style={styles.teste} showsVerticalScrollIndicator={false}>
            <View >
                <Text style={styles.despesasTitulo}>Despesas</Text>
                
                { 
                    despesas.map((desp) => {
                        return <Despesas id={desp.id}
                                        icon={desp.icon}
                                        categoria={desp.categoria}
                                        descricao={desp.descricao}
                                        valor = {desp.valor}
                                        onClick={openDespesa}
                                        />
                    })
                }
                
            </View>
        </ScrollView>

        <TouchableOpacity style={styles.btnAdd} onPress={() => openDespesa(0)}>
            <Image source={icons.add} style={styles.btnAddImage}/>
        </TouchableOpacity>
    </View>
}

export default Home;