'use client';
import { renderToString } from 'react-dom/server';
import Text from '@/components/Text';
import { TextIcon } from '@/components/Icon';

export default function Sidebar() {
  const components = [
    { id: 1, name: 'Text', entity: <Text />, icon: <TextIcon /> },
  ];

  function getEntity(componentId) {
    for (const component of components) {
      if (component.id == componentId) {
        return component.entity;
      }
    }
  }

  function dragStart(event) {
    event.dataTransfer.setData('text', renderToString(getEntity(event.currentTarget.dataset.componentId)));
    event.dataTransfer.effectAllowed = 'all';
  }

  return (
    <aside className="flex flex-col fixed gap-y-2 top-0 left-0 h-screen w-64 p-4 overflow-y-auto bg-neutral-900 shadow-2xl shadow-neutral-900/50">
      <h1 className="px-8 py-5 text-center text-neutral-300">Builder Boost</h1>
      <nav className='flex flex-col gap-4'>
        {components.map((component) => (
          <div
            className="flex flex-col gap-y-2 w-24 h-24 p-5 text-neutral-50 font-semibold bg-neutral-700 items-center justify-center rounded"
            data-component-id={component.id}
            key={component.id}
            draggable
            onDragStart={dragStart}
          >
            <div>{component.name}</div>
            <div className="w-10 h-10">{component.icon}</div>
          </div>
        ))}
      </nav>
    </aside>
  );
}