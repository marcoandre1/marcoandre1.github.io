import React from "react";
import { connect } from "react-redux";
import profile from "../images/profile.png";
import ProfileImage from "./ProfileImage";

export const TaskList = ({ name, description }) => (
  <div className="md:flex bg-gray-100 dark:bg-gray-900 rounded-xl p-8 md:p-0">
    <div className="bg-gray-100 dark:bg-gray-800 md:w-full md:h-auto md:rounded-xl rounded-xl shadow-2xl mx-auto md:ml-4 md:my-4 md:p-8">
      <ProfileImage id={profile} />
      <div className="px-4 py-4 md:px-2">
        <div className="font-bold text-xl text-gray-600 dark:text-gray-300 mb-2">
          ModokemDev
        </div>
        <p className="text-gray-700 dark:text-gray-400 text-base">
          {description}
        </p>
      </div>
      <div className="px-4 md:px-0 pt-4 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-gray-300 font-bold">
        Who am I?
      </div>
      <p className="mt-2 mb-2 text-left text-gray-600 dark:text-gray-400">
        My name is ModokemDev. I am enthusiast web developer. I spend some of my
        time learning technologies, mainly for fun, but also to be a better
        developer.
      </p>
      <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-gray-300 font-bold">
        So what have you been learning?
      </div>
      <p className="mt-2 mb-2 text-left text-gray-600 dark:text-gray-400">
        Oh man it's hard to keep track of everything. But here is what I can
        remember. My first experience was probably at primary school with
        something called Scratch 😺. I think it is still around. As a child, I
        remember my dad giving me a book to learn Visual Basic (Yes, I know
        ...🙄). The book came with a floppy disk 💾 (I am not that old...). When
        I was a teenager I took some classes to learn Visual Basic, MySQL and
        C++. I forgot most of it to be honest. Don't ask me why but I ended up
        studying chemistry at university. I call this the dark times. I
        officially started my developer journey when I got into software
        engineering at university.
      </p>
    </div>
  </div>
);

export const ConnectedTaskList = connect((state) => state)(TaskList);
