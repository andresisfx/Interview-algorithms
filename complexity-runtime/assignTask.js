function getPermutations(arr) {
  // Caso base: si el arreglo está vacío, devolvemos [[]]
  if (arr.length === 0) return [[]]; 
  // Ejemplo: getPermutations([]) → [[]]

  const result = [];

  // Recorremos cada elemento del arreglo
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]; // elemento actual
    // Ejemplo 1ª iteración (arr = [0,1,2]): current = 0

    // Creamos un nuevo arreglo SIN el elemento actual
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    // Si arr = [0,1,2] y current = 0 → remaining = [1,2]
    // Si current = 1 → remaining = [0,2]
    // Si current = 2 → remaining = [0,1]

    // Obtenemos las permutaciones del arreglo restante
    const remainingPerms = getPermutations(remaining);

    /*
      Aquí la recursión entra más profundo:
      getPermutations([1,2]) →
          i=0: current=1, remaining=[2]
            getPermutations([2]) →
                i=0: current=2, remaining=[]
                  getPermutations([]) → [[]]
                  combinamos [2] → [[2]]
            combinamos con 1 → [[1,2]]

          i=1: current=2, remaining=[1]
            getPermutations([1]) →
                i=0: current=1, remaining=[]
                  getPermutations([]) → [[]]
                  combinamos [1] → [[1]]
            combinamos con 2 → [[2,1]]

      Resultado final de getPermutations([1,2]) → [[1,2],[2,1]]
    */

    // Ahora combinamos el elemento actual con las permutaciones restantes
    for (let perm of remainingPerms) {
      result.push([current, ...perm]);
      /*
        Si current = 0 y remainingPerms = [[1,2], [2,1]]:
          1ª combinación → [0,1,2]
          2ª combinación → [0,2,1]

        Si current = 1 y remainingPerms = [[0,2], [2,0]]:
          1ª combinación → [1,0,2]
          2ª combinación → [1,2,0]

        Si current = 2 y remainingPerms = [[0,1], [1,0]]:
          1ª combinación → [2,0,1]
          2ª combinación → [2,1,0]
      */
    }
  }

  return result;
}

// Ejemplo de ejecución:
const resultado = getPermutations([0, 1, 2]);

/*
Salida paso a paso esperada:
getPermutations([0,1,2]) →
  current = 0 → combina con [[1,2],[2,1]] → [[0,1,2],[0,2,1]]
  current = 1 → combina con [[0,2],[2,0]] → [[1,0,2],[1,2,0]]
  current = 2 → combina con [[0,1],[1,0]] → [[2,0,1],[2,1,0]]

Resultado final:
[
  [0,1,2],
  [0,2,1],
  [1,0,2],
  [1,2,0],
  [2,0,1],
  [2,1,0]
]
*/
