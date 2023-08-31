'use client';
import { useState } from 'react';

export default function Home() {
  const [dropZone, setDropZone] = useState('');

  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    setDropZone(data);
  }

  function dropOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  return (
    <main className="flex flex-col p-9 ml-64">
      <div id="placeholder" className="w-full h-full p-4 bg-neutral-100" onDrop={drop} onDragOver={dropOver}>Please drag and drop left components here</div>
      <div dangerouslySetInnerHTML={{ __html: dropZone }}></div>
    </main>
  )
}
