import { useState } from "react";

type Pessoa = {
  id: number;
  nome: string;
  idade: number;
  profissao: string;
};

type Form = {
  nome: string;
  idade: number;
  profissao: string;
};

export const HomePage = () => {
  const [form, setForm] = useState({} as Form);
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  console.log(form);

  return (
    <>
      <div>
        <h1>Inscrição:</h1>
        <input
          placeholder="nome"
          value={form.nome || ""}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <input
          placeholder="idade"
          value={form.idade || ""}
          onChange={(e) => setForm({ ...form, idade: +e.target.value })}
        />
        <input
          placeholder="profissão"
          value={form.profissao || ""}
          onChange={(e) => setForm({ ...form, profissao: e.target.value })}
        />
        <button
          onClick={() => {
            setPessoas([
              ...pessoas,
              { id: Math.floor(Math.random() * 10000), ...form },
            ]);
          }}
        >
          Adicionar
        </button>
        <ul>
          {pessoas.map((pessoa) => (
            <div key={pessoa.id}>
              <li>{pessoa.id}</li>
              <li>{pessoa.nome}</li>
              <li>{pessoa.profissao}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
