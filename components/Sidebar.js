'use client';
import { Text } from "@/components/Icon";

export default function Sidebar() {
  const components = [
    { id: 1, name: 'Text', entity: '<></>', icon: <Text /> },
  ];

  return (
    <aside className="flex flex-col fixed gap-y-2 top-0 left-0 h-screen w-64 p-4 overflow-y-auto bg-neutral-900 shadow-2xl shadow-neutral-900/50">
      <h1 className="px-8 py-5 text-center text-neutral-300">Builder Boost</h1>
      <nav className='flex flex-col gap-4'>
        {components.map((component) => (
          <div className="flex flex-col gap-y-2 w-24 h-24 p-5 text-neutral-50 font-semibold bg-neutral-700 rounded" key={component.id}>
            <div class="text-center">{component.name}</div>
            {component.icon}
          </div>
        ))}
      </nav>
    </aside>
  );
}