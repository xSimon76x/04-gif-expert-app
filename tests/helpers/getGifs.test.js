import { getGift } from "../../src/helpers/getGift";

describe("getGifs - Test", () => {
  test("debe retornar un arreglo de gifs ", async () => {
    const gifs = await getGift("One punch");

    //validar si el arreglo, retorna un objeto de mas de un resultado
    expect(gifs.length).toBeGreaterThan(0);

    //validar la estructura del objeto que responde
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
