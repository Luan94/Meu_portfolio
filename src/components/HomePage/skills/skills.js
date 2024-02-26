import React, { useState, useEffect } from 'react';
import stacksData from '../../data/skills.json'; // Importando o arquivo JSON

const StacksSection = () => {
  const [stacks, setStacks] = useState([]);

  useEffect(() => {
    setStacks(stacksData); // Definindo o estado com os dados do JSON importado
  }, []);

  return (
    <div>
      <h2>Stacks</h2>
      <ul>
        {stacks.map((stack, index) => (
          <li key={index}>
            <h3>{stack.skill_name}</h3>
            <img src={stack.skill_icon} alt={stack.skill_name} />
            <p>{stack.skill_description_en}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StacksSection;
