import { createStore } from 'vuex'
import api, { IPeople, IPeopleAll } from '@/api'
import { deleteFromArray } from '@/utils'

export default createStore({
  state: {
    favorite: <IPeople[]> []
  },
  getters: {
  },
  mutations: {
    SET_FAVORITE_CHARACTER: (state, data) => {
      state.favorite = [
        ...state.favorite,
        data
      ]
    },
    REMOVE_FAVORITE_CHARACTER: (state, id) => {
      state.favorite = deleteFromArray(state.favorite, id, 'id')
    }
  },
  actions: {
    initFavorite({ commit }) {
      const ls = localStorage.getItem('swCharacters')

      if (ls) {
        const data: IPeople[] = JSON.parse(ls)

        data.map((people: IPeople): void => {
          commit('SET_FAVORITE_CHARACTER', people)
        })
      }
    },

    async fetchPeople(_, page: number | null): Promise<IPeopleAll> {
      return await api
        .fetchPeople(page)
        .then((response) => {
          return response
        })
    },

    async fetchPeopleById(_, id: number): Promise<IPeople> {
      return await api
        .fetchPeopleById(id)
        .then((response) => {
          return response
        })
    },

    async searchPeople(_, search: string): Promise<IPeopleAll> {
      return await api
        .searchPeople(search)
        .then((response) => {
          return response
        })
    },

    addFavorite({ commit, state }, characters: IPeople[]) {
      characters.map((character: IPeople): void => {
        commit('SET_FAVORITE_CHARACTER', character)
      })

      localStorage.removeItem('swCharacters')

      localStorage.setItem(
        'swCharacters',
        JSON.stringify(state.favorite)
      )
    },

    removeFavorite({ commit, state }, ids: number[]) {
      ids.map((id: number): void => {
        commit('REMOVE_FAVORITE_CHARACTER', id)
      })

      localStorage.removeItem('swCharacters')

      localStorage.setItem(
        'swCharacters',
        JSON.stringify(state.favorite)
      )
    }
  },
  modules: {
  }
})
