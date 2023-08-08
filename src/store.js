import Vuex from 'vuex';
import api from '../src/service/api'

export default new Vuex.Store({
    state: {
        titulo: 'Emergências médicas',
        cadastro: 'Cadastrar Equipamento/Profissional',
        equipe: {
            medico: '',
            enfermeiro: '',
            socorrista: '',
            ambulancia: '',
            contato: '',
            kitMedico: ''
        },
        equipes: [],
        enfermeiros: [],
        socorristas: [],
        medicos: [],
        equipamentos: {
            ambulancias: [],
            kitsMedicos: []
        },
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
        totalKits: state => state.equipamentos.kitsMedicos.length,
    },
    mutations: {
        adicionarEquipe(state, equipe) {
            state.equipes.push(equipe)
        },
        limparEquipe(state) {
            state.equipe = {}
        },
        setItemEquipe(state, item) {
            let t = item.tipo;
            let d = item.dados;
            if (t == 'enfermeiros') state.equipe.enfermeiro = d.nome
            if (t == 'socorristas') state.equipe.socorrista = d.nome
            if (t == 'medicos') state.equipe.medico = d.nome
            if (t == 'ambulancias') state.equipe.ambulancia = d.placa
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
        setKitsMedicos(state, payload) {
            state.equipamentos.kitsMedicos = payload;
        },
        cadastroProfissional(state, payload) {
            state.enfermeiros.push(payload)
        },
        cadastroAmbulancia(state, payload) {
            state.equipamentos.ambulancias.push(payload)
        },
        cadastroKit(state, payload) {
            state.equipamentos.kitsMedicos = payload;
            console.log('payload', payload)
        }
    },
    actions: {
        async adicionarAmbulancias(state) {
            //Aqui podemos fazer regras de negocio e condições para no fim efetuar o commit no state do vuex
            const response = await api.get("/ambulancias");
            state.commit('setAmbulancias', response.data);
        },
        async adicionarKitsMedicos(state) {
            const response = await api.get("/kits-medicos");
            state.commit('setKitsMedicos', response.data);
        },
    }
})