import type React from 'react';
import type { Task } from '~/types';

const KanbanCard: React.FC<Task> = props => {
  const { title, content, createdAt } = props;
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300"
      title={createdAt.toISOString()}>
      <div className="p-4">
        <div className="font-bold text-lg mb-1">{title}</div>
        <p className="text-gray-70  0 text-base">{content}</p>
      </div>
    </div>
  );
};

export default KanbanCard;
