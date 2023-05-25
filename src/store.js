import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        titulo: 'Emergências médicas',
        team: {
            nurse: 'Nome enfermeiro',
            rescuer: 'Nome do socorrista',
            doctor: 'Nome do médico',
            ambulance: 'Placa da ambulância',
            phone: '+55 (11) 9 9999-9999',
            reanimationKit: 'Kit 001'
        }
    }
})