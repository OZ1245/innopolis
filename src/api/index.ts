const url = "https://swapi.dev/api/people"

export interface IPeople {
  name: string, 
  height: string, 
  mass: string, 
  hair_color: string, 
  skin_color: string, 
  eye_color: string, 
  birth_year: string, 
  gender: string, 
  homeworld: string, 
  films: string[], 
  species: any[], // FIXME: Прочитать доку api 
  vehicles: string[], 
  starships: string[], 
  created: string, // FIXME: Прочитать доку api 
  edited: string, // FIXME: Прочитать доку api  
  url: string
}

export interface IPeopleAll {
  count: number,
  next: string | null,
  previous: string | null,
  results: IPeople[],
}

export const fetchPeople = async (page: number | null): Promise<IPeopleAll> => {
  if (page) {
    return await fetch(url, {
      method: 'GET',
      body: JSON.stringify({
        page
      })
    })
    .then(async ({ json }) => {
      return await json()
    })
  }

  return await fetch(url, { method: 'GET' })
    .then(async ({ json }) => {
      return await json()
    })
} 

export const fetchPeopleById = async (id: number): Promise<IPeople> => {
  return await fetch(`${url}/${id}`, {
    method: 'GET'
  })
  .then(async ({ json }) => {
    return await json()
  })
}

export const searchPeople = async (search: string | null): Promise<IPeopleAll> => {
  return await fetch(url, {
    method: 'GET',
    body: JSON.stringify({
      search
    })
  })
  .then(async ({ json }) => {
    return await json()
  })
}