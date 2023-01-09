export function mapToArray<T>(object: T[]): T[] {
  const array: T[] = [];

  for (const elem in object) {
    array.push({
      ...object[elem],
      id: elem,
    });
  }

  return array;
}

// arma un array de objetos y agrega el id, el maptoarray, lo agrego con el filtro d elas categorias
//
