import React from "react";

const Card = ({userName = "Rupesh", place= "Fuck Off", myArr}) => {
// console.log(props)

  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.unsplash.com/photo-1558021211-6d1403321394?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWR5fGVufDB8fDB8fHww"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to motherfuck, adapts to any motherfucking design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400 ">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500">{place}, {myArr}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
