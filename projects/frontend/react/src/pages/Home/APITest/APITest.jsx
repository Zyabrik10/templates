import { Container } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import css from './APITest.module.css';
import todoService from 'services/todo.service';
import { LoadInfo } from 'widgets';

export default function APITest() {
  const [array, setArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);

  useEffect(() => {
    if (array.length > 0) return;

    async function getTodos() {
      try {
        setIsLoading(true);
        const {data} = await todoService.getTodos();
        setIsLoading(false);
        setIsNothingFound(false);

        const arr = [];
        for (let i = 0; i < 20; i++) {
          arr[i] = data[i];
        }

        setArray(arr);
      } catch (e) {
        console.error(e.message);
        setIsLoading(false);
        setIsNothingFound(true);
      }
    }
    getTodos();
  }, [array]);
  
  return (
    <Container type="section">
      <Container>
        <h2>API test</h2>
        <Container type="flex">
          <LoadInfo
            isLoading={isLoading}
            isFound={isNothingFound}
            renderComponent={() => {
              return array.map(({ userId, id, title, completed }) => {
                return (
                  <li
                    className={`${css['item']} ${
                      completed ? css['completed'] : ''
                    }`}
                    key={nanoid()}
                  >
                    <p>{userId}</p>
                    <p>{id}</p>
                    <p>{title}</p>
                    <p>{completed.toString()}</p>
                  </li>
                );
              });
            }}
            message={`Nothing found`}
          />  
        </Container>
      </Container>
    </Container>
  );
}
