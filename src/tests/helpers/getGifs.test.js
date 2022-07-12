import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch");
    // console.log(gifs)
    expect(gifs.length).toBeGreaterThan(0); // Que sea mayor a 0, es decir me aseguro que mi arreglo tenga más de un elemento
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    }); // Espero que el primer elemento de mi arreglo, tenga un id, title y url, y que los mismos sean strings
  });
});
