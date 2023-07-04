import Vuex from 'vuex';
import api from '../src/service/api'

export default new Vuex.Store({
    state: {
        titulo: 'Emergências médicas',
        equipe: {
            enfermeiro: '',
            socorrista: '',
            medico: '',
            ambulancia: '',
            telefone: '',
            kitMedico: ''
        },
        enfermeiros: [],
        socorristas: [],
        medicos: [],
        equipamentos: {
            ambulancias: [],
            telefones: [],
            kitsMedicos: []
        }
    },
    getters: {
        totalEnfermeiros(state) {
            return state.enfermeiros.length;
        },
        filtroSocorristaTurno(state) {
            return (turno) => {
                if (!turno) {
                    return state.socorristas;
                }
                return state.socorristas.filter(turnoSocorrista => turnoSocorrista.turno === turno)
            }
        },

        totalSocorristasPorTurno: (state, getters) => {
            return turno => getters.filtroSocorristaTurno(turno).length
        },
        totalSocorristas: state => state.socorristas.length,
        totalMedicos: state => state.medicos.length,
        totalAmbulancias: state => state.equipamentos.ambulancias.length,
        totalTelefones: state => state.equipamentos.telefones.length,
        totalKits: state => state.equipamentos.kitsMedicos.length,
    },
    mutations: {
        limparEquipe(state) {
            state.equipe.enfermeiro = ''
            state.equipe.socorrista = ''
            state.equipe.medico = ''
            state.equipe.ambulancia = ''
            state.equipe.telefone = ''
            state.equipe.kitMedico = ''
        },
        setItemEquipe(state, item) {
            let t = item.tipo;
            let d = item.dados;
            if (t == 'enfermeiros') state.equipe.enfermeiro = d.nome, console.log(d.nome)
            if (t == 'socorristas') state.equipe.socorrista = d.nome, console.log(state.equipe.socorrista)
            if (t == 'medicos') state.equipe.medico = d.nome
            if (t == 'ambulancias') state.equipe.ambulancia = d.placa
            if (t == 'telefones') state.equipe.telefone = d.telefone
            if (t == 'kits-medicos') state.equipe.kitMedico = d.kit
        },
        setEnfermeiros(state, payload) {
            state.enfermeiros = payload;
        },
        setSocorristas(state, payload) {
            state.socorristas = payload;
        },
        setMedicos(state, payload) {
            state.medicos = payload;
        },
        setAmbulancias(state, payload) {
            state.equipamentos.ambulancias = payload;
        },
        setTelefones(state, payload) {
            state.equipamentos.telefones = payload;
        },
        setKitsMedicos(state, payload) {
            state.equipamentos.kitsMedicos = payload;
        },
    },
    actions: {
        async adicionarAmbulancias(state) {
            //Aqui podemos fazer regras de negocio e condições para no fim efetuar o commit no state do vuex
            const response = await api.get("/ambulancias");
            state.commit('setAmbulancias', response.data);
        },
        async adicionarKitsMedicos(state) {
            const response = await api.get("/kits-medicos");
            console.log(response.data)
            state.commit('setKitsMedicos', response.data);
        },
        async adicionarTelefones(state) {
            const response = await api.get("/telefones");
            state.commit('setTelefones', response.data);
        },
    }
})