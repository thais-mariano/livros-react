import React from 'react';

interface LinhaLivroProps {
  titulo: string;
  autores: string[];
  editora: string;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ titulo, autores, editora }) => {
  return (
    <tr>
      <td>{titulo}</td>
      <td>{autores.join(', ')}</td>
      <td>{editora}</td>
    </tr>
  );
};

export default LinhaLivro;
