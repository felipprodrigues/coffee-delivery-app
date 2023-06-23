import axios from "axios";

export async function getCepApi() {
  const cep = 17036630;
  try {
    const data = await axios.get(`viacep.com.br/ws/${cep}/json/`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
