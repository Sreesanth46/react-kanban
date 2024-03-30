import { nanoid } from 'nanoid';
import { useState } from 'react';
import type { Column, ID, Task } from '~/types';
import KanbanCard from './KanbanCard';
import { Reorder } from 'framer-motion';

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: nanoid(),
      createdAt: new Date(),
      tasks: [
        {
          createdAt: new Date(),
          id: nanoid(),
          title: 'Kanban 1',
          content: 'description 1'
        },
        {
          createdAt: new Date(),
          id: nanoid(),
          title: 'Kanban 2',
          content: 'description 2'
        },
        {
          createdAt: new Date(),
          id: nanoid(),
          title: 'Kanban 3',
          content: 'description 3'
        },
        {
          createdAt: new Date(),
          id: nanoid(),
          title: 'Kanban 4',
          content: 'description 4'
        },
        {
          createdAt: new Date(),
          id: nanoid(),
          title: 'Kanban 5',
          content: 'kanban description'
        }
      ]
    }
  ]);

  const sortTask = (columnId: ID, tasks: Task[]) => {
    const updatedColumn = columns.map(column => {
      if (column.id === columnId) {
        column.tasks = tasks;
      }
      return column;
    });
    setColumns(updatedColumn);
  };

  return (
    <div className="flex justify-start overflow-x-auto gap-4">
      {columns.map(column => (
        <div
          className="flex flex-col min-w-48 bg-slate-700 rounded"
          key={column.id}>
          <Reorder.Group
            className="space-y-2"
            values={column.tasks}
            onReorder={tasks => sortTask(column.id, tasks)}>
            {column.tasks.map(task => (
              <Reorder.Item value={task} key={task.id}>
                <KanbanCard {...task} />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
