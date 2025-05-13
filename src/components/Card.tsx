import React from "react";

type props = {
  iconPath: string,
  title: string,
  list: string[],
  className: string
}

const Card: React.FC<props> = ({ iconPath, title, list, className}) => {
  return (
    <div className={`w-80 bg-darkzinc px-4 py-4 flex flex-col cursor-pointer gap-3 rounded-2xl transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20 ${className}`}>
      <div className="my-2">
        <img className="text-mintpaper text-3xl ml-2 w-10 transition-transform duration-300 hover:scale-110" src={iconPath} />
      </div>
      <h1 className='text-xl text-white transition-colors duration-300 hover:text-mintpaper'>{title}</h1>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {list.map((text, index) => (
          <li key={index} className="flex items-start gap-2 transition-colors duration-300 hover:text-white">{text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card