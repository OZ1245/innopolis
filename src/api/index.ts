const url = "https://swapi.dev/api/people"

export interface IPeople {
  id?: number,
  name: string, 
  height: string, 
  mass: string, 
  hair_color: string, 
  skin_color?: string, 
  eye_color?: string, 
  birth_year?: string, 
  gender?: string, 
  homeworld?: string, 
  films?: string[], 
  species?: any[], // FIXME: Прочитать доку api 
  vehicles?: string[], 
  starships?: string[], 
  created?: string, // FIXME: Прочитать доку api 
  edited?: string, // FIXME: Прочитать доку api  
  url?: string
}

export interface IPeopleAll {
  count: number,
  next: string | null,
  previous: string | null,
  results: IPeople[],
}

const fetchPeople = async (page: number): Promise<IPeopleAll> => {
  return await fetch(`${url}?${new URLSearchParams({ page: page.toString() })}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(async (response) => {
    return await response.json()
  })
} 

const fetchPeopleById = async (id: number): Promise<IPeople> => {
  return await fetch(`${url}/${id}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(async (response) => {
    return await response.json()
  })
}

const searchPeople = async (search: string | null): Promise<IPeopleAll> => {
  return await fetch(url, {
    method: 'GET',
    body: JSON.stringify({
      search
    })
  })
  .then(async (response) => {
    return await response.json()
  })
}

export default {
  fetchPeople,
  fetchPeopleById,
  searchPeople
}